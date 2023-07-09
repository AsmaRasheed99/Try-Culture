const Conversation = require("../models/Conversation");


const NewConversation = async (req, res) => {

 const {senderId,receiverId}= req.body
    console.log(senderId,receiverId)

  const checkC = await  Conversation.find({ members: [req.body.senderId, req.body.receiverId]})
  console.log(checkC)
    console.log(checkC.length)
  if(checkC.length == 0 && senderId !=  receiverId ){



    try {
        const newConv = await Conversation.create({ members: [req.body.senderId, req.body.receiverId]})
        console.log(newConv)
        res.status(200).json(newConv)
    } catch (err) {
        res.status(500).json(err)
    }





  }
   
}

const UserConversation = async (req, res) => {
      const userId = req.params.id
    try {
        const conversation = await Conversation.find({
            members: { $in: [userId]}
        })
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err)

    }
}






module.exports = {
    NewConversation,
    UserConversation,
}