const Message = require("../models/Message");


const AddMessage = async (req, res) => {
    const message = req.body;
    console.log(message);
    try {
        const mes = await Message.create(message);
        console.log(mes);
        res.status(200).json(mes);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllMessages = async (req, res) => {
    const conversationId = req.params.conversationId;
    console.log(conversationId)
    try {
        const AllMessages = await Message.find({conversationId})
        res.status(200).json(AllMessages);
    } catch (error) {
        res.status(500).json(error);

    }
}
module.exports = {
    AddMessage,
    getAllMessages,
}