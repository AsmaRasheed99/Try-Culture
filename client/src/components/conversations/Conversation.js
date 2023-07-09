import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);
    const userId = currentUser.id;

    console.log(conversation.members)

    console.log(friendId, userId);
    
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/chatUser/${friendId}`);
        setUser(res.data);
        console.log(user)
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

console.log(user)
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={`http://localhost:5000/${user?.image} `}
 
        alt=""
      />
      <span className="conversationName">{user?.firstName}</span>
    </div>
  );
}
