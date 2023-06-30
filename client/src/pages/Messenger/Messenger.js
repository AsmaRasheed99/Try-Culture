import React, { useEffect, useState, useRef } from 'react'
import './Messenger.css'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/messages/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
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
    const [onlineUsers, setOnlineUsers] = useState([]);
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
        socket.current.on("getUsers", users =>{
            setOnlineUsers(users)
        })
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
 },[UserId])
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

 return (
    <>
    <div className='messenger'>
        <div className='chatMenu'>
            <div className='chatMenuWrapper'>
             <input placeholder='Search for friends' className='chatMenuInput'/>
             
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
            
                 return (  <Message message={m} own={m.sender === UserId} />)
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
                {/* <ChatOnline
                 onlineUsers={onlineUsers}
                 currentId={UserId} 
                 setcurrentChat={setcurrentChat}/> */}
            </div>
        </div>
        </div>
        </>
  )
}
