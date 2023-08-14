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
import { mdiFileDocumentRemove } from '@mdi/js';

const Reports = () => {
    const [persons, setPersons] = useState([]);
    const [reports, seReports] = useState([]);
  
    const [searchTermUsers, setSearchTermUsers] = useState("");
    const [FilterDataUsers, setFilterDataUsers] = useState([]);
    const [HandleP, setHandleP] = useState();
  
    const getReports = async () =>{
        try {
            const response =  await axios.get("http://localhost:5000/api/getReport")
            seReports(response.data)
        } catch (error) {
            console.error(error.message)
        }
    }
  useEffect(()=>{
    getReports()
  },[])

  //-----------------------search------------------------//

  const filterDataByNameUsers = (searchTermUsers) => {
    const filteredDataUsers = persons.filter((item) =>
      item.firstName.toLowerCase().includes(searchTermUsers.toLowerCase())
    );
    setFilterDataUsers(filteredDataUsers);
    console.log(filteredDataUsers);
    setCurrentPageUsers(1);
  };

  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  let totalItemsUsers;

  let totalPagesUsers;

  let slicedArrayUsers;

  const itemsPerPage = 5;

  totalItemsUsers = FilterDataUsers.length;

  totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;

  const endIndexUsers = startIndexUsers + itemsPerPage;

  slicedArrayUsers = FilterDataUsers.slice(startIndexUsers, endIndexUsers);

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };

  const handleDelete =  async(reportId,BlogId) => {
    try {
      await axios.post(`http://localhost:5000/api/DeleteReport/${reportId}`,{BlogId:BlogId})
      getReports()
    } catch (error) {
      console.error(error.message);
    }
  };



  const handleUpdate = async (reportId) => {
  
try {
 const response = await axios.put(`http://localhost:5000/api/UpdateReport/${reportId}`)
 getReports()
} catch (error) {
  console.log(error.message);
}


  };


  return (
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
          value={searchTermUsers}
          onChange={(e) => {
            setSearchTermUsers(e.target.value);
            filterDataByNameUsers(e.target.value);
          }}
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
              <p className="text-xs tracking-wide text-gray-600">NAME</p>
            </th>
            <th
              colSpan={1}
              role="columnheader"
              title="Toggle SortBy"
              className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
              style={{ cursor: "pointer" }}
            >
              <p className="text-xs tracking-wide text-gray-600">Comment</p>
            </th>
            <th
              colSpan={1}
              role="columnheader"
              title="Toggle SortBy"
              className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
              style={{ cursor: "pointer" }}
            >
              <p className="text-xs tracking-wide text-gray-600">Report Type</p>
            </th>
    

            <th
              colSpan={1}
              role="columnheader"
              title="Toggle SortBy"
              className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
              style={{ cursor: "pointer" }}
            >
              <p className="text-xs tracking-wide text-gray-600">Delete Report</p>
            </th>

            <th
              colSpan={1}
              role="columnheader"
              title="Toggle SortBy"
              className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
              style={{ cursor: "pointer" }}
            >
              <p className="text-xs tracking-wide text-gray-600">Delete Comment</p>
            </th>
          </tr>
        </thead>

        {reports.map((e) => {
          return (
            <tbody role="rowgroup">
              <tr role="row">
                 <td
                  className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                  role="cell"
                >
                  <div className="h-[30px] w-[30px] rounded-full">
                    <img
                      src={`http://localhost:5000/${e.Comment.userImage}`}
                      className="h-full w-full rounded-full"
                      alt=""
                    />
                  </div>
                  <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                    {e.Comment.userName}
                  </p>
                </td>
                <td
                  className="pt-[14px] pb-[18px] sm:text-[14px]"
                  role="cell"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full text-xl">
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {e.Comment.comment}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className="pt-[14px] pb-[18px] sm:text-[14px]"
                  role="cell"
                >
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {e.ReportText}
                  </p>
                </td>
            

                <td
                  className="pt-[14px] pb-[18px] sm:text-[14px]"
                  role="cell"
                >
                  <button
                    onClick={() => handleUpdate(e._id)}
                  >
                   
                   <Icon color={"blue"} path={mdiFileDocumentRemove} size={1} />
                   
                  </button>
                </td>

                <td
                  className="pt-[14px] pb-[18px] sm:text-[14px]"
                  role="cell"
                >
                  <button
                    onClick={() => handleDelete(e._id,e.BlogId)}
                  >
                    <Icon color="red" path={mdiDelete} size={1} />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <div className="flex w-full justify-center mt-5">
        {
          <Pagination
            count={totalPagesUsers}
            page={currentPageUsers}
            onChange={handlePageChangeUsers}
          />
        }
      </div>
    </div>
  </div>
  )
}

export default Reports