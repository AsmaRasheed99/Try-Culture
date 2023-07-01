import React, { useEffect, useState } from "react";
import axios from "axios";

const AddCultures = () => {
  const [Cultures, setCultures] = useState([]);

  const [Culture, setCulture] = useState("");
  const [Information, setInformation] = useState("");
  const [Image, setImage] = useState("");
  const [HeroImage, setHeroImage] = useState("");


  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };
  const onLoad = (fileString) => {
    setImage(fileString);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const onChange2 = (e) => {
    const files2 = e.target.files;
    const file2 = files2[0];
    getBase642(file2);
  };
  const onLoad2 = (fileString2) => {
    setHeroImage(fileString2);
  };
  const getBase642 = (file) => {
    let reader2 = new FileReader();
    reader2.readAsDataURL(file);
    reader2.onload = () => {
      onLoad2(reader2.result);
    };
  };



  const AddCulture = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("auth");

console.log(HeroImage);
console.log(Culture)
console.log(Information)
console.log(Image)

    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.post(
        "http://localhost:5000/api/AddNewCulture",
        {
          Culture:Culture,
          Information:Information,
          HeroImage:HeroImage,
          image:Image,
        }
      );
      setCultures(response.data);
      console.log("Cultures")

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <>
    <form onSubmit={AddCulture}>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Add <span className="text-4xl text-cyan-600">A</span> Culture
            <hr></hr>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Culture
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=> {setCulture(e.target.value)}}
           />
          </div>

          <label
            for="Info"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Information
          </label>
          <textarea
            id="Info"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            placeholder="Info about the culture in jordan..."
            onChange={(e)=> {setInformation(e.target.value)}}

          ></textarea>

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="hero"
          >
            Hero Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-5"
            aria-describedby="user_avatar_help"
            id="hero"
            type="file"
            onChange={(e) => {
              onChange2(e);
            }}
            accept="image/*"
          />

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Card Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            onChange={(e) => {
              onChange(e);
            }}
            accept="image/*"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-10"
           
         >
            ADD
          </button>
        </div>
      </div>
      </form>
    </>
  );
};

export default AddCultures;
