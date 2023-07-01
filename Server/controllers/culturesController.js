const cultures = require("../models/cultures");


const AddNewCulture = async (req, res) => {
    const {  Culture ,Information} = req.body;
    const image1 = req.files['image1'][0];
    const image2 = req.files['image2'][0];
        console.log(Culture, Information, image1.filename, image2.filename);
    try {
      const culture = await cultures.create({ Culture:Culture ,image:image1.filename, HeroImage:image2.filename,Information:Information });
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
    const image1 = req.files['image1'][0];
    const image2 = req.files['image2'][0];
    const {Culture , Information } = req.body;
    console.log(image1, image2);
    try {
      const updateCulture = await cultures.findByIdAndUpdate(cultureId,{Culture:Culture, Information:Information, HeroImage:image2.filename, image:image1.filename});
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