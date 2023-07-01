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
    
    const updatedCulture = {
        Culture:Culture,
        Information:Information,
        HeroImage:HeroImage,
        image:Image
    }

    try {
        const updated = await axios.put(`http://localhost:5000/api/updateCulture/${cultureId}`, updatedCulture)
    } catch (error) {
        console.error(error)
    }
 }

  return (
    <>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Users
          </div>
        </div>

        <form>
          <div className="relative mt-5">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              //   value={searchTermUsers}
              //   onChange={(e) => {
              //     setSearchTermUsers(e.target.value);
              //     filterDataByNameUsers(e.target.value);
              //   }}
            />
          </div>
        </form>

        <div className="mt-8 overflow-x-scroll xl:overflow-hidden ">
          <table role="table" className="w-full">
            <thead>
              <tr role="row">
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">CULTURE</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">EDIT</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">DELETE</p>
                </th>
              </tr>
            </thead>

            {cultures?.map((e) => {
              return (
                <tbody role="rowgroup">
                  <tr role="row">
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                      role="cell"
                    >
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src={e.image}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>

                      <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                        {e.Culture}
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                      onClick={() => handleUpdate(e._id, e)}
                      >
                        <Icon color="blue" path={mdiHumanEdit} size={1} />
                      </button>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                      // onClick={() => handleDelete(e._id, e.firstName)}
                      >
                        <Icon color="red" path={mdiDelete} size={1} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <div className="flex w-full justify-center mt-5">{}</div>
        </div>
      </div>
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
             Edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCultures;
