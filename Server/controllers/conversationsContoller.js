const Conversation = require("../models/Conversation");


const NewConversation = async (req, res) => {
    try {
        const newConv = await Conversation.create({ members: [req.body.senderId, req.body.receiverId]})
        res.status(200).json(newConv)
    } catch (err) {
        res.status(500).json(err)
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