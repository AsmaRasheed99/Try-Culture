const Service = require("../models/Services");


const AddNewBusiness = async (req, res) => {
    const { businessName, phoneNumber,location,WorkDays,FromHours,ToHours,culture,businessType,businessImage, provider_id,Payment_id } = req.body;
    console.log(req.body);
    try {
      const service = await Service.create({ businessName,phoneNumber,location,WorkDays,FromHours,ToHours,culture,businessType,businessImage,provider_id,Payment_id });
      res.status(200).json(service);
      console.log(service)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const getAllBusniess = async (req, res, next) => {
    try {
      const Business = await Service.find();
      res.status(200).json(Business);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 const getOneBusiness = async (req , res) => {
  const id = req.params.id;
  try {
    const Business0 = await Service.find({ _id : id});
    res.status(200).json(Business0);
  } catch (error) {
    console.error(error.message);
  }
 }

 const getBusinessCulture = async (req, res) => {
  const culture = req.params;
  console.log(culture);
  try {
    const businessCulture = await Service.find({culture : culture.culture})
    res.status(200).json(businessCulture)
  } catch (error) {
    console.error(error.message);
  }
 }

 const allUserServices = async (req, res) => {
  const userId = req.params.id;
  try {
    const service = await Service.find({ provider_id: userId }); 
    res.status(200).json(service); 
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
};

 const Subscribed = async (req, res)=> {
  console.log("id");

  const id = req.params.id;
  try {
      const sub = await Service.findByIdAndUpdate(id ,{ Subscribed : true});
      res.status(200).json(sub);
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });

  }
}
const oneUserBusiness = async (req, res) => {

  const businessId = req.params.id;
  const updatedData = req.body;
  console.log(businessId)
  console.log(updatedData)

  // updatedUserData.password= await bcrypt.hash(updatedUserData.password, 5)
  const service = await Service.findByIdAndUpdate(businessId, updatedData, { new: true });
  const updatedService = await service.save();
  console.log(service)
  res.json(updatedService);



};
  // const averageRating = async (req, res, next) => {
  //   try {
  //     const ratings = await Service.find();
      
  //     // Calculate the average rating
  //     let totalRating = 0;
  //     let count = 0;
  //     ratings.forEach((rating) => {
  //       if (rating.averageRating) {
  //         totalRating += parseFloat(rating.averageRating);
  //         count++;
  //       }
  //     });
  
  //     const average = count > 0 ? totalRating / count : 0;
  //     res.status(200).json({ averageRating: average });
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // };
  
  // const addRate = async (req, res) => {
  //   const { rating } = req.body;
  //   try {
  //     const newRating = await Service.create({ averageRating: rating });
  //     res.status(200).json(newRating);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // };

  module.exports = {
    AddNewBusiness,
    getAllBusniess,
    getOneBusiness,
    getBusinessCulture,
    Subscribed,
    allUserServices,
    oneUserBusiness,
    // addRate,
    // averageRating,

  }; 