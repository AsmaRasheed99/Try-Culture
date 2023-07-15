import React, { useEffect, useState, useRef } from 'react'
import './Messenger.css'
import '../Messenger/ChatOnline.css'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/messages/Message'
import axios from "axios";
import { io } from 'socket.io-client';

export default function Messenger({UserApp}) {
    // console.log(UserApp)
    const UserId = UserApp.id;

    const [conversations, setConversations] = useState([]);
    const [currentChat, setcurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [persons, setPersons] = useState([]);
    const [FilterDataUsers,setFilterDataUsers]= useState([]);
    const [searchTermUsers, setSearchTermUsers] = useState("");
    const [refreshMessenger, setRefreshMessenger] = useState(null);
    const socket = useRef()
    const scrollRef = useRef();


    useEffect(() => {
        socket.current = io("ws://localhost:5500");
        socket.current.on("getMessage", (data) => {
          setArrivalMessage({
            sender: data.senderId,
            text: data.text,
            createdAt: Date.now(),
          });
        });
      }, []);
    

    useEffect(()=> {
     arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
     setMessages((prev) => [...prev, arrivalMessage])
    },[arrivalMessage, currentChat])


    useEffect(()=>{
        socket.current.emit("addUser", UserId)
       
    },[UserApp]);




 useEffect(()=>{
 const getConversations = async (req, res)=> {
    try {
        const res = await axios.get(`http://localhost:5000/api/UserConversation/${UserId}`)
        setConversations(res.data)
    } catch (err) {
        console.error(err.Message);
    }

 };
 getConversations();
 },[UserId , refreshMessenger])
 useEffect(()=> {
    const getMessages = async (req, res) => {
        try {
            const messages = await axios.get("http://localhost:5000/api/getAllMessages/" + currentChat?._id)
            console.log(messages.data)
            setMessages(messages.data)
        } catch (error) {
            console.error(error.Message);
        }
    }
    getMessages();
 },[currentChat])
 console.log(messages)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
        sender: UserId,
        text:newMessage,
        conversationId: currentChat._id
    };
 
    const receiverId = currentChat.members.find(member => member !== UserId)
    socket.current.emit("sendMessage" , {
        senderId: UserId,
        receiverId,
        text: newMessage
    });
    try {
        const res = await axios.post("http://localhost:5000/api/AddMessage", message);
        setMessages([...messages, res.data]);
        setNewMessage("");
    } catch (error) {
        console.error(error.Message);

    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
 
  const allUsers = async () => {
    const token = localStorage.getItem("auth");
    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: token,
        },
      });

      console.log(response.data);
      setPersons(response.data);
      setFilterDataUsers(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  useEffect(() => {
    allUsers();
  }, []);

  //-----------------------search------------------------//

  const filterDataByNameUsers = (searchTermUsers) => {
    const filteredDataUsers = persons.filter((item) =>
      item.firstName.toLowerCase().includes(searchTermUsers.toLowerCase())
    );
    setFilterDataUsers(filteredDataUsers);
    console.log(filteredDataUsers);
    setCurrentPageUsers(1);
  };

  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  let totalItemsUsers;

  let totalPagesUsers;

  let slicedArrayUsers;

  const itemsPerPage = 5;

  totalItemsUsers = FilterDataUsers.length;

  totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;

  const endIndexUsers = startIndexUsers + itemsPerPage;

  slicedArrayUsers = FilterDataUsers.slice(startIndexUsers, endIndexUsers);

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };


const startConversation = async (id)=>{
 console.log(id)
 console.log(UserId)
 try {
    const conversation = await axios.post("http://localhost:5000/api/NewConversation", {
        senderId:UserId,
        receiverId:id,
  
    })
    setRefreshMessenger(conversation.data)
    {console.log(conversation)}

 } catch (error) {
    
 }
}
 return (
    <>
    <div className='messenger'>
        <div className='chatMenu'>
            <div className='chatMenuWrapper'>
           
            {conversations.map((c) =>
            <div onClick={()=> setcurrentChat(c)}>
             <Conversation conversation={c} currentUser={UserApp} />
             </div>
             )}
           
            

            
            </div>
        </div>
        <div className='chatBox'>
            <div className='chatBoxWrapper'>
                {currentChat? <> 
                    <div className='chatBoxTop'>
                {messages?.map((m)=>{
            
            {console.log(messages)}
                 return (  <Message message={m} own={m.sender === UserId}  />)
                })}
                </div>
              
               
                <div className='chatBoxBottom'>
                    <textarea 
                    className='chatMessageInput' 
                    placeholder="Write Something"
                    onChange={(e)=>setNewMessage(e.target.value)}
                    value={newMessage}
                    ></textarea>
                    <button className='chatSubmitButton' onClick={handleSubmit}>send</button>
                </div>
                </> : <span className='noConversationText'>Start A Conversation</span> }
            </div>
            
        </div>
        <div className='chatOnline'>
            <div className='chatOnlineWrapper'>
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
            />             
            {FilterDataUsers.map((c) =>
             <div className="conversation" onClick={()=>
             
           {
            // setcurrentChat(c)
            startConversation(c._id)
           }  
             
             
             
             }>
             <img
               className="conversationImg"
               src={`http://localhost:5000/${c?.image}`}
               alt=""
             />
             <span className="conversationName">{c?.firstName}</span>
           </div>
           
             )}
            </div>
        </div>
        </div>
        </>
  )
}
