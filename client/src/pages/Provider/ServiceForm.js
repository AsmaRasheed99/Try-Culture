import axios from "axios";
import React from "react";
import { useState} from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";



function ServiceForm({UserIdApp}) {
console.log(UserIdApp);
  const navigate = useNavigate();

  
  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const [Business, setBusiness] = useState([]);
  const [NewBusiness, setNewBusiness] = useState({
    businessName: "",
    phoneNumber: "",
    location: "",
    WorkDays: "",
    FromHours: "",
    ToHours: "",
    culture: "",
    businessType: "",
    businessImage: "",
    provider_id:"",
    provider_Name:"",
    
  });
 
  const [ProviderName , setProviderName] = useState("");
    const fetchProvider = async () => {
      try {
        const provider = await axios.get(`http://localhost:5000/api/users/${UserIdApp}`)
        console.log(provider.data)
        setProviderName(provider.data[0].firstName)
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchProvider();

  }, []);
console.log(ProviderName)

  const CreateNewBusiness = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("location", NewBusiness.location);
    formData.append("businessName",NewBusiness.businessName);
    formData.append("phoneNumber",NewBusiness.phoneNumber);
    formData.append("WorkDays",NewBusiness.WorkDays);
    formData.append("FromHours",NewBusiness.FromHours);
    formData.append("ToHours",NewBusiness.ToHours);
    formData.append("culture",NewBusiness.culture);
    formData.append("businessType",NewBusiness.businessType);
    formData.append("provider_id",UserIdApp);
    formData.append("provider_Name",ProviderName);
 
    console.log(productImage, NewBusiness.location,NewBusiness.businessType,UserIdApp, ProviderName,NewBusiness.businessName, NewBusiness.phoneNumber,NewBusiness.WorkDays,NewBusiness.FromHours,NewBusiness.ToHours,NewBusiness.culture,)
    console.log(NewBusiness)

   

    try {
      const response = await axios.post(
        "http://localhost:5000/api/AddNewBusiness", formData
      );
      const createdBusiness = response.data;
      setBusiness([...Business, createdBusiness]);
      setNewBusiness({
        businessName: "",
        phoneNumber: "",
        location: "",
        WorkDays: "",
        FromHours: "",
        ToHours: "",
        culture: "",
        businessType: "",
        businessImage: productImage,
        provider_id: UserIdApp,
        provider_Name: ProviderName,

      });
      console.log(response.data)
      let ServiceId = response.data._id;

      navigate(`/Payment/${ServiceId}`);

      // window.location.href = "http://localhost:3000/Payment";

      console.log("New Business request:", createdBusiness);

    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "You have to be Logged in to send a joining request",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error.message);
    }

    // Call an API or perform the desired action with the form data
    console.log("");

    // Reset form fields
  };
  const backgroundImageUrl = 'https://img.freepik.com/free-vector/worldwide-connection-gray-background-illustration-vector_53876-61769.jpg?size=626&ext=jpg&ga=GA1.1.558610342.1683500202&semt=ais';

  return (
    <>
    <div  style={{ backgroundImage: `url(${backgroundImageUrl})` }} className="bg-cover bg-center">
  <div className="flex items-center flex-wrap justify-around">
   
    <div className="text-center" >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
        Enter your business information 
      </h2>
      <p className="mt-4 text-gray-500 ">
       Enter all the details needed to make it easy for users to easly find your business <br></br>
        If you have more information that you feel should be added too please feel free to contact us <br></br>
      </p>
      <Link
              to="/ContactUs"
            >
              <button
                type="submit"
                className=" mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-gray-500  hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 w-fit hover:bg-gradient-to-br hover:from-cyan-500 hover:to-gray-400 hover:bg-black " // Added 'w-full' class for full-width button
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get In Touch With Us
                </span>
              </button>
            </Link>
    </div>

    <div className="flex justify-center items-center">
        <form
          className="w-full max-w-lg  mx-5 bg-white p-10 rounded-lg my-5"
          onSubmit={CreateNewBusiness}

        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Business Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Business Name "
                value={NewBusiness.businessName}
                      onChange={(e) =>
                        setNewBusiness({ ...NewBusiness, businessName: e.target.value })
                      }
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="tel"
                placeholder="07 * *** ****"
                value={NewBusiness.phoneNumber}
                      onChange={(e) =>
                        setNewBusiness({ ...NewBusiness, phoneNumber: e.target.value })
                      }
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="City-Street-Address"
                value={NewBusiness.location}
                      onChange={(e) =>
                        setNewBusiness({ ...NewBusiness, location: e.target.value })
                      }
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Work Days
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="FROM day TO day
        "
        value={NewBusiness.WorkDays}
                      onChange={(e) =>
                        setNewBusiness({ ...NewBusiness, WorkDays: e.target.value })
                      }
              />
             
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Work Hours
              </label>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-semi-bold my-2"
                htmlFor="grid-last-name"
              >
                From
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="time"
                value={NewBusiness.FromHours}
                      onChange={(e) =>
                        setNewBusiness({ ...NewBusiness, FromHours: e.target.value })
                      }
              />
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-semi-bold my-2 "
                htmlFor="grid-last-name"
              >
                To
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="time"
                value={NewBusiness.ToHours}
                      onChange={(e) =>
                        setNewBusiness({ ...NewBusiness, ToHours: e.target.value })
                      }
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={NewBusiness.culture}
                  onChange={(e) =>
                    setNewBusiness({ ...NewBusiness, culture: e.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    Culture
                  </option>

                  <option>China</option>
                  <option>Egypt</option>
                  <option>Jordan</option>
                  <option>India</option>
                  <option>America</option>
                  <option>Korea</option>
                  <option>Japan</option>
                  <option>Italy</option>
                  <option>Saudi Arabia</option>
                  <option>Morocoo</option>
                  <option>Mexico</option>
                  <option>France</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={NewBusiness.businessType}
                  onChange={(e) =>
                    setNewBusiness({ ...NewBusiness, businessType: e.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    {" "}
                    Business Type
                  </option>
                  <option>Resturant</option>
                  <option>Language Institute</option>
                  <option>Shop</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-5">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="file_input"
              >
                Business Image
              </label>

              <input
            className="file-upload-input mx-auto"
            type="file"
            name="image"
            onChange={handleProductImageChange}
            accept="image/*"
            required
          />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-5">
            <div className="w-full px-3">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-gray-500  hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 w-full hover:bg-gradient-to-br hover:from-cyan-500 hover:to-gray-400 hover:bg-black " // Added 'w-full' class for full-width button
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>

    
    </>
  );
}

export default ServiceForm;
