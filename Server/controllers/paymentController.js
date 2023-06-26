const payment = require("../models/payment");


const NewPayment = async (req, res)=> {
    const { cardholder,ServiceId, userId, cvv, CardNumber} = req.body;

    try {
        const Payment = await payment.create({cardholder,ServiceId, userId, cvv, CardNumber});
        res.status(200).json(Payment);
    } catch (error) {
        console.error(error.message);
    }
}


module.exports = {
    NewPayment,
}