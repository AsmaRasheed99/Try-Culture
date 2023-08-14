import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mdiHumanEdit } from "@mdi/js";
import Swal from "sweetalert2";
import { mdiSilverware } from "@mdi/js";
import { mdiShieldCrownOutline } from "@mdi/js";
import { mdiAccountOutline } from "@mdi/js";

const EditCultures = () => {

  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const [productImage0, setProductImage0] = useState(null);

  const handleProductImageChange0 = (event) => {
    setProductImage0(event.target.files[0]);
  };

  const [cultures, setCultures] = useState([]);
  const [cultureId, setCultureId] = useState("");
  const [Culture, setCulture] = useState("");
  const [Information, setInformation] = useState("");
  const [Image, setImage] = useState("");
  const [HeroImage, setHeroImage] = useState("");

  const fetchCultures = async () => {
    try {
      const cultures = await axios.get(
        "http://localhost:5000/api/getAllCultures"
      );
      setCultures(cultures.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCultures();
  }, []);


  const handleUpdate = (id, culture) => {
    setCulture(culture.Culture);
    setInformation(culture.Information);
    setImage(culture.Image);
    setHeroImage(culture.HeroImage)
    setCultureId(id);
 }
  

 const EditCulture = async (e)=> {
    e.preventDefault();
  

    const formData = new FormData();
    formData.append("Culture", Culture);
    formData.append("image1", productImage);
    formData.append("image2", productImage0);
    formData.append("Information", Information);
   

    try {
        const updated = await axios.put(`http://localhost:5000/api/updateCulture/${cultureId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
        },
      }
       )
    } catch (error) {
        console.error(error)
    }
 }

  return (
    <>
  
      <form
        onSubmit={EditCulture}
      >
        <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
          <div className="relative flex items-center justify-between pt-4">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              Edit <span className="text-4xl text-cyan-600">A</span> Culture
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
               value={Culture}
                onChange={(e) => {
                  setCulture(e.target.value);
                }}
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
              value={Information}
            placeholder="Info about the culture in jordan..."
              onChange={(e) => {
                setInformation(e.target.value);
              }}
            ></textarea>

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="hero"
            >
              Hero Image
            </label>
            <input
              className="file-upload-input mx-auto"
              type="file"
              name="image"
              onChange={handleProductImageChange}
              accept="image/*"
              required
            />

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="user_avatar"
            >
              Card Image
            </label>
            <input
              className="file-upload-input mx-auto"
              type="file"
              name="image"
              onChange={handleProductImageChange0}
              accept="image/*"
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-10"
            >
             Edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCultures;
