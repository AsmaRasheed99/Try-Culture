import React from "react";
import Icon from '@mdi/react';
import { mdiAlert, mdiBriefcaseEdit, mdiEarth, mdiFileEdit, mdiHandshake, mdiPlus, mdiReload, mdiShieldCrownOutline } from '@mdi/js';
import { mdiAccountMultipleOutline } from '@mdi/js';
import { mdiInbox } from '@mdi/js';

import '../dashboard.css';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
  UserIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const profileMenuItems = [

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const  closeMenu = (label) =>{ 
    setIsMenuOpen(false)

if(label == "Sign Out"){
    localStorage.setItem("SignStatus","signUp")
    localStorage.removeItem("auth");
    localStorage.removeItem("roles");
    window.location.href = 'http://localhost:3000/';

  console.log(label)
}else if(label == "Profile"){
  window.location.href = 'http://localhost:3000/ProfilePage';

}

};
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
           <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          className="ml-auto mr-2 lg:hidden"
        >
          <UserIcon className="h-6 w-6" />
        </IconButton>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={()=>{closeMenu(label)}}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 

 
function NavListMenuD() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 

 

}
 
// nav list component
const navListItems = [
  {
    label: "Pending Businesses",
    icon: mdiReload ,
    path: "/Pending"
  },
  {
    label: "Add Cultures",
    icon: mdiPlus,
    path: "/AddCultures"
  },
  {
    label: "Edit Cultures",
    icon: mdiBriefcaseEdit ,
    path: "/EditCultures"
  },
  {
    label: "Edit About",
    icon: mdiFileEdit ,
    path: "/EditAboutContact"
  },
  {
    label: "Subsicribers List",
    icon: mdiHandshake ,
    path: "/Subsicribers"
  },
  {
    label: "Users list ",
    icon: mdiAccountMultipleOutline ,
    path: "/ListUser "
  },
  {
    label: "Statistics",
    icon: mdiEarth ,
    path: "/"
  },
  {
    label: "Admins list",
    icon: mdiShieldCrownOutline ,
    path: "/ListAdmin"
  },
  {
    label: "Inbox",
    icon: mdiInbox ,
    path: "/ContactAdmin"
  },
  {
    label: "Reports",
    icon: mdiAlert ,
    path: "/Reports"
  },
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center bg-[#f4f7fe]">
      <NavListMenuD />
      {navListItems.map(({ label, icon,path }, key) => (
        <Link to={path}>
        <Typography
          key={label}
          as="a"       
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            <Icon path={icon} size={1} />
            {label}
          </MenuItem>
        </Typography>
        </Link>
      ))}
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar className=" sticky top-0 z-10 mx-auto max-w-screen p-2 bg-white rounded-full lg:pl-6 h-14 DashboardNav">
      <div className="relative mx-auto flex items-center text-blue-gray-900"> 
        <Link to='/'>
        
       
        <Typography
          as="a"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
                <Link to="/">
                <h5>Try <span className='text-[#00ACC1] text-3xl'>A</span> Culture</h5>
            {/* <p className="text-black">Give Life</p> */}
          </Link>
        </Typography>
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}