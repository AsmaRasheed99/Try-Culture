const cultures = require("../models/cultures");


const AddNewCulture = async (req, res) => {
    const {  Culture ,image, HeroImage,Information} = req.body;
    console.log(Culture, image, HeroImage, Information)
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
   
  const updateCulture = async (req, res) => {
    const cultureId = req.params.id;
    const {Culture , Information , HeroImage, image} = req.body;
    console.log(image);
    try {
      const updateCulture = await cultures.findByIdAndUpdate(cultureId,{Culture:Culture, Information:Information, HeroImage:HeroImage, image:image});
      res.json(updateCulture);
    } catch (error) {
      console.error(error.message);
    }

  }

  module.exports = {
    AddNewCulture,
    getAllCultures,
    oneCulture,
    updateCulture,

  }; 