const Event = require("../models/Events");

const createNewEvent = async (req, res) => {
    const { EventName, Date, Time, Details, Culture, Organizer,userId,location } = req.body;
    console.log(EventName, Date, Time, Details, Culture, Organizer,userId, location)
    try {
      const event = await Event.create({ EventName, Date, Time, Details, Culture, Organizer,userId, location });
      console.log(event)
      res.status(200).json(event);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

 
  const getAllEvents = async (req, res, next) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = {
    createNewEvent,
    getAllEvents
};
