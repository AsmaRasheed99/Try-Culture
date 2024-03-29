import Icon from '@mdi/react';
import { mdiDelete } from "@mdi/js";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

 import Pagination from "@mui/material/Pagination";

const Subsicribers = () => {
  const [Subsicribers, setSubsicribers] = useState([]);
  const [FilterDataSubsicribers, setFilterDataSubsicribers] = useState([]);


  const allProviders = async () => {
    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.get("http://localhost:5000/api/Providers");
      console.log(response.data);
      setSubsicribers(response.data);
      setFilterDataSubsicribers(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  useEffect(() => {
    allProviders();
  }, []);


       //-----------------------search------------------------//
       const [searchTermSubsicribers, setSearchTermSubsicribers] = useState('');
       
       
       const filterDataByNameSubsicribers = (searchTermSubsicribers) => {
         console.log(searchTermSubsicribers)
         
         const filteredDataSubsicribers = Subsicribers.filter(item =>
       
           item.NAME.toLowerCase().includes(searchTermSubsicribers.toLowerCase())
         );
         setFilterDataSubsicribers(filteredDataSubsicribers);
          setCurrentPageSubsicribers(1)
       }
       
       const [currentPageSubsicribers, setCurrentPageSubsicribers] = useState(1);

       let totalItemsSubsicribers;
       
       let totalPagesSubsicribers;
       
       let slicedArraySubsicribers;
       
       const itemsPerPage = 3;
       
       totalItemsSubsicribers = FilterDataSubsicribers.length;
       
       totalPagesSubsicribers = Math.ceil(totalItemsSubsicribers / itemsPerPage);
       
       const startIndexSubsicribers = (currentPageSubsicribers - 1) * itemsPerPage;
       
       const endIndexSubsicribers = startIndexSubsicribers + itemsPerPage;
       
       slicedArraySubsicribers = FilterDataSubsicribers.slice(startIndexSubsicribers, endIndexSubsicribers);
       
       const handlePageChangeSubsicribers = (event, pageNumber) => {
         setCurrentPageSubsicribers(pageNumber);
       };

       

       const handleDelete = (firstName) => {



        Swal.fire({
          title: ` Do you want to remove ${firstName}?  `,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          icon: 'warning'
      }
      ).then((result) => {
          if (result.isConfirmed) {
    
              Swal.fire(` ${firstName} has been removed `, '', 'success');
           
            
          } else
              Swal.fire(' Cancelled', '', 'error')
    
      })
    
    
    }









  return (
    
<>





<div className='bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)] '>



  <div className="relative flex items-center justify-between pt-4">
    <div className="text-xl font-bold text-navy-700 dark:text-white">
    Subsicribers
    </div>
 
  </div>

  <form>
 
 <div className="relative">

   <input
     type="text"
     id="search"
     className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="Search"
     required=""
     value={searchTermSubsicribers}
     onChange={(e) =>{
      setSearchTermSubsicribers(e.target.value);
     filterDataByNameSubsicribers(e.target.value);
    }}
   />

 </div>
</form>

  <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
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
            <p className="text-xs tracking-wide text-gray-600">EMAIL</p>
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
      

{

slicedArraySubsicribers.map((e)=>{

return(

<tbody role="rowgroup">
<tr role="row">
<td
                      className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                      role="cell"
                    >
                      <div className="h-[30px] w-[30px] rounded-full">
                        <img
                          src={`http://localhost:5000/${e.image}`}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>

                      <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                        {e.firstName}
                      </p>
                    </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
            <div className="flex items-center gap-2">
              <div className="rounded-full text-xl">
                {e.email}
              
              </div>
             
            </div>
          </td>

      


          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
                     <button onClick={() => handleDelete(e.firstName)}>
                      <Icon color="red" path={mdiDelete} size={1} />
                    </button>
          </td>


        </tr>
       
      </tbody>




)



})

}


        
    </table>

    <div className='flex w-full justify-center mt-5'>   
    {(
        <Pagination
          count={totalPagesSubsicribers}
          page={currentPageSubsicribers}
          onChange={handlePageChangeSubsicribers}
        />
      )}
    </div> 
  </div>


</div>




  </>
  )
}

export default Subsicribers