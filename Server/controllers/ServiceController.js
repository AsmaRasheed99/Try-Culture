const Service = require("../models/Services");


const AddNewBusiness = async (req, res) => {
    const { businessName, phoneNumber,location,WorkDays,FromHours,ToHours,culture,businessType, provider_id,provider_Name } = req.body;
    const businessImage = req.file.path;
    console.log("a")
    console.log(businessName, businessType, location, FromHours, ToHours, culture, WorkDays, phoneNumber, provider_id, provider_Name);
    try {
      const service = await Service.create({ businessName,phoneNumber,location,WorkDays,FromHours,ToHours,culture,businessType,businessImage,provider_id,provider_Name });
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

const Approve = async (req, res) => {
const id = req.params.id;
console.log(id);
try {
  const App = await Service.findByIdAndUpdate(id, { flag: true});
  res.status(200).json(App);
} catch (error) {
  console.error(error.message);
}
}


const oneUserBusiness = async (req, res) => {

  const businessId = req.params.id;
  console.log(businessId);
  const { businessType, businessName,culture,FromHours,ToHours,phoneNumber,WorkDays,location} = req.body;
 const businessImage =req.file.path;
 console.log(businessImage);
console.log(businessImage, businessId, businessName, businessType, culture,FromHours,ToHours,phoneNumber,WorkDays,location);
try {
  const service = await Service.findByIdAndUpdate(businessId,{businessImage:businessImage , businessType:businessType, businessName:businessName,culture:culture,FromHours:FromHours,ToHours:ToHours,phoneNumber:phoneNumber,WorkDays:WorkDays,location:location} );
  console.log(service)
  res.json(service);} catch {
    console.error(error.message)
  }
};

const rateBusiness = async (req, res) => { 
  const BusinessId  = req.params.id;
  const updatedBusinessData = req.body;
console.log(updatedBusinessData,BusinessId)
  const Business = await Service.findByIdAndUpdate(BusinessId, updatedBusinessData, { new: true });
  const updatedBusiness= await Business.save();
  res.json(updatedBusiness);
};

const pendingBusiness = (req, res) => { 
  Service.find({ Subscribed: true,  flag: false })
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const ApprovedBusiness = (req, res) => { 
  Service.find({ Subscribed: true,  flag: true })
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const DeleteBusiness = async (req, res) => {
  const businessId = req.params.id;
  console.log(businessId)

  const service = await Service.findByIdAndUpdate(businessId, {flag:false , Subscribed: false});
  console.log(service)
  res.json(service);
}


  module.exports = {
    AddNewBusiness,
    getAllBusniess,
    getOneBusiness,
    getBusinessCulture,
    Subscribed,
    allUserServices,
    oneUserBusiness,
    pendingBusiness,
    Approve,
    ApprovedBusiness,
    DeleteBusiness,
    rateBusiness

  }; 