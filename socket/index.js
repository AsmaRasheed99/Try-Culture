const io = require("socket.io")(5500, {
    cors: {
      origin: "http://localhost:3000",
    },
  });



let users = [];
  
const addUser = (userId, socketId) => {
    !users.some((user)=> user.userId === userId) &&
     users.push({userId, socketId});
     console.log(users)
}

const removeUser = ( socketId) =>{
    users = users.filter(user => user.userId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
}

io.on("connection", (socket) => {
  console.log(socket.id)
    //when ceonnect
    console.log("a user connected.");
  // take userId and socketId from user
  socket.on("addUser", (userId) => {
   addUser(userId, socket.id)
   io.emit("getUsers", users);
  });
 
//send and get message
socket.on("sendMessage", ({senderId, receiverId, text}) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
    })
} )

  //when disconnect
  socket.on("disconnect", () =>{
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);


  })
});