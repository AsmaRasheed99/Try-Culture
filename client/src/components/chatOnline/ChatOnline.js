import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ChatOnline({onlineUsers, currentId, setcurrentChat}) {
  const [users, setUsers] = useState([]);
  const [OnlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    getUsers();
  }, [currentId]);
  console.log(users, onlineUsers);

  useEffect(() => {
    setOnlineUsers(users.filter((u) => OnlineUsers.includes(u._id)));
  }, [users]);
 
  console.log(onlineUsers);

  return (
    <div className="chatOnline">
      {OnlineUsers?.map((o) => (
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={o?.image}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>

          <span className="chatOnlineName">{o?.firstName}</span>
          {console.log(o)}
        </div>
      ))}
    </div>
  );
}
