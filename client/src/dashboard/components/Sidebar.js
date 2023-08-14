import Icon from '@mdi/react';
import {  mdiBriefcaseEdit, mdiEmail, mdiFileEdit, mdiHandshake, mdiPlus, mdiReload  } from '@mdi/js';
import { mdiAccountMultipleOutline } from '@mdi/js';
import { mdiShieldCrownOutline,mdiAlert } from '@mdi/js';
import React from "react";

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,

  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

  export default function Sidebar() {

function handleLogOut(){

    


  Swal.fire({
    title: ` logout?  `,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    icon: 'warning',
    iconColor: 'orange',
}
).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

        Swal.fire(`  done `, '', 'success');
     
        localStorage.removeItem("auth");
        window.location.href = 'http://localhost:3000/';
      

    } else
        Swal.fire(' Cancelled', '', 'error')

})

}


    return (
      <Card className=" min-h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-white-900/5 Sidebar bg-white sideBarDash">
        <div className="mb-2 p-4">
        <Typography className="text-[#000]" variant="h5" color="blue-gray">
        <Link to="/">
            <h5>Try <span className='text-[#00ACC1] text-3xl'>A</span> Culture</h5>
          </Link>
          </Typography>
        </div>
        <List>
          <Link to='/'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Statistics </a>
          </ListItem>
          </Link>


          <Link to='/ListAdmin'>
           <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiShieldCrownOutline } size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Admins list </a>
          </ListItem>
          </Link>

           <Link to='/ListUser'>
           <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiAccountMultipleOutline} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Users list </a>
          </ListItem>
          </Link>

          <Link to='/Subsicribers'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiHandshake } size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Subsicribers List </a>
          </ListItem>
          </Link>

          <Link to='/EditAboutContact'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiFileEdit} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Edit About </a>
          </ListItem>
          </Link>

          <Link to='/Pending'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiReload
            } size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Pending Businesses </a>
          </ListItem>
          </Link>

          <Link to='/AddCultures'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiPlus} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Add Cultures </a>
          </ListItem>
          </Link>

          <Link to='/EditCultures'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiBriefcaseEdit} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Edit Cultures </a>
          </ListItem>
          </Link>
          <Link to='/Reports'>
          <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
            <Icon path={mdiAlert} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Reports </a>
          </ListItem>
          </Link>

         <Link to='/ContactAdmin'>
         <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
              <Icon path={mdiEmail}className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Inbox </a>
         
          </ListItem>
          </Link>


           <button onClick={handleLogOut}>
           <ListItem className="hover:bg-[#00ACC1]">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Log Out </a>
          </ListItem>
          </button>
        </List>
      </Card>
    );
  }