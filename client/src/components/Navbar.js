import React from "react";
import { Link } from "react-router-dom";
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
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  LanguageIcon

} from "@heroicons/react/24/outline";

const colors = {
 
  cyan: "bg-cyan-50 text-cyan-500",
};

const navListMenuItems = [
  {
    color: "cyan",
    icon: LanguageIcon,
    title: "English"  },
 
  {
    color: "cyan",
    icon: LanguageIcon,
    title: "Arabic"  }
 
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, color }, key) => (
      <a href="#" key={key}>
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
          
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment >
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
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/">
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
        <Link to="/Cultures">
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
        <Link to="/Blogs">
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
            Blogs
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
    </List>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <Link to="/Profile">
              <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
                <UserCircleIcon className="h-[18px] w-[18px]" />
                Profile
              </ListItem>
            </Link>
          </Typography>
          <Link to='/Registration'><Button variant="gradient" size="lg" color="cyan">
            Sign Up
          </Button></Link>
        </div>
        <IconButton
          variant="text"
          color="cyan"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
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
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link to="/Profile">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              <UserCircleIcon className="h-[18px] w-[18px]" />
            </Button>
          </Link>
          <Button variant="gradient" size="lg" fullWidth >
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
