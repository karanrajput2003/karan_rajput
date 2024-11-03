import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import SocialMedia from "./Footer";
function Mypage() {
  return (
    <>
      <Navbar fluid className="bg-black text-white">
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-gray-100">
            Karan Rajput
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" className="text-gray-100">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/skills" className="text-gray-100">
            Skills
          </Navbar.Link>
          <Navbar.Link as={Link} to="/projects" className="text-gray-100">
            Projects
          </Navbar.Link>
          <Navbar.Link as={Link} to="/education" className="text-gray-100">
            Education
          </Navbar.Link>
          <Navbar.Link as={Link} to="/achievements" className="text-gray-100">
            Achievements
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Mypage;
