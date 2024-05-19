import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { LucideFlame, LucideFlashlight } from "lucide-react";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex  text-[#011632] flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {['/', '/services', '/about', '/contact'].map((path, index) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
          key={index}
        >
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? 'flex items-center text-blue-600' : 'flex items-center'
            }
          >
            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="lg:bg-[#E6F6FE] mx-auto px-4 py-2 lg:w-[85%] lg:px-8 lg:mt-3 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-[#011632]">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium flex items-center justify-center"
        >
    <p className="text-lg font-semibold">  Dental</p>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <NavLink to="/login">
            <Button variant="text" size="sm" className="hidden lg:inline-block">Login</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button size="sm" className="hidden lg:inline-block bg-[#1376F8]">Sign up</Button>
          </NavLink>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1 justify-center">
            
              <Button fullWidth variant="text" size="sm"><NavLink to="/login">Login </NavLink></Button>
           
           
              <Button fullWidth size="sm" className="bg-[#1376F8] "> <NavLink to="/signup">Sign up </NavLink></Button>
           
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
