const cultures = require("../models/cultures");


const AddNewCulture = async (req, res) => {
    const {  Culture ,image, HeroImage,Information} = req.body;
    try {
      const culture = await cultures.create({ Culture,image, HeroImage,Information });
      res.status(200).json(culture);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getAllCultures = async (req, res, next) => {
    try {
      const Cultures = await cultures.find();
      res.status(200).json( Cultures);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const oneCulture = async (req, res) => {
    try {
      const { country } = req.params; // Accessing the country route parameter
      const countryData = await cultures.findOne({ Culture: country });
  
      if (!countryData) {
        res.status(404).send('Country not found!');
      } else {
        res.json(countryData);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };


  module.exports = {
    AddNewCulture,
    getAllCultures,
    oneCulture,

  }; 