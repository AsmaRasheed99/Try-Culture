import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  XMarkIcon,
  LanguageIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars3Icon,


} from "@heroicons/react/24/outline";

const colors = {
  cyan: "bg-cyan-50 text-cyan-500",
};

const navListMenuItems = [
  {
    color: "cyan",
    icon: LanguageIcon,
    title: "English",
  },

  {
    color: "cyan",
    icon: LanguageIcon,
    title: "Arabic",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { closeNav, updateNav } = useContext(UserContext);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, path }, key) => (
      <Link to={path} key={key}
      onClick={()=>{updateNav(!closeNav)
     
      }}

      >
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-xl"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Language
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const { closeNav, updateNav } = useContext(UserContext);

  return (

    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/"
        onClick={()=>updateNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
            Home
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/Cultures"
        onClick={()=>updateNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
            Cultures
          </ListItem>
        </Link>
      </Typography>
     
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/Blogs"
        onClick={()=>updateNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
            Blogs
          </ListItem>
        </Link>
      </Typography>
     
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
            <Link to="/Events"
        onClick={()=>updateNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
            Events
          </ListItem>
        </Link>
      </Typography>
     
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/Messenger"
        onClick={()=>updateNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
            Chat
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
    </List>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("auth") !== null
  );
  const [selectedType, setSelectedype] = useState("");
  const navigate = useNavigate();

  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/Registration/${SignUpType}`);
  }

  const handleLogout = () => {
    // Perform any necessary cleanup or API calls related to logout

    // Clear the auth token or user data from local storage
    localStorage.removeItem("auth");

    // Update the login status
    setIsLoggedIn(false);
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  const { closeNav, updateNav } = useContext(UserContext);

  useEffect(() => {

   console.log("close")
    setOpenNav(closeNav)

  },[closeNav])

  const profileMenuItems = [
    {
      label: "Profile",
      
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];

   function ProfileMenu() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate =useNavigate()

    const closeMenu = (label) => {
      setIsMenuOpen(false);
      if (label == "Sign Out") {
        localStorage.removeItem("auth");
        window.location.href = "http://localhost:3000/";
        console.log(label);
      } else if (label == "Profile") {
        navigate("/Profile")        
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
            <svg
              xmlns="https://source.unsplash.com/MP0IUfwrn0A"
              className="h-7 w-7 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform text-black ${
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
                onClick={() => {
                  closeMenu(label);
                }}
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
  return (
    
    <Navbar className="mx-auto max-w-screen-4xl px-4 py-2 sticky top-0 z-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 px-3 lg:ml-2 text-4xl font-serif "
        >
          Try <span className="text-5xl text-cyan-500">A</span> Culture
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {isLoggedIn ? (
            <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-normal flex gap-3"
            >
              <Link to="/" onClick={handleLogout}>
                {/* <Button variant="gradient" size="lg" color="cyan">
                  Log Out
                </Button> */}

              </Link>
              <Link to="/Profile">
                {/* <Button variant="gradient" size="lg" color="cyan">
                  <UserCircleIcon className="h-[18px] w-[18px]" />
                  
                </Button> */}
              </Link>
              <ProfileMenu/>
            </Typography>
          ) : (
             <>
          
            <Link to="/SignUp">
              <Button variant="gradient" size="lg" color="cyan"  onClick={() => handleTypeSelection("provider")}>
                Join Us
              </Button>
            </Link>
            <Link to="/Registration">
              <Button variant="gradient" size="lg" color="cyan" onClick={() => handleTypeSelection("user")}>
                Sign Up
              </Button>
            </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          color="cyan"
          className="lg:hidden"
          onClick={() => {setOpenNav(!openNav)
            updateNav(!openNav)
          }}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {isLoggedIn ? (
          
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-normal flex gap-3"
            >
              <Link to="/" onClick={handleLogout}>
                <Button variant="gradient" size="lg" color="cyan" >
                  Log Out
                </Button>
              </Link>
              <Link to="/Profile">
                <Button variant="gradient" size="lg" color="cyan" >
                Profile
                </Button>
              </Link>
            </Typography>
          ) : (
             <>
               <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-normal flex gap-3"
            >
            <Link to="/SignUp">
              <Button variant="gradient" size="lg" color="cyan"  onClick={() => handleTypeSelection("provider")}>
                Join Us
              </Button>
            </Link>
            <Link to="/Registration">
              <Button variant="gradient" size="lg" color="cyan" onClick={() => handleTypeSelection("user")}>
                Sign Up
              </Button>
            </Link>
            </Typography>
            </>
          )}
        
      </Collapse>
    </Navbar>
  );
}
