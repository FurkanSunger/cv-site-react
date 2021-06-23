import React from 'react'
import { FaEnvelope, FaHome, FaSuitcase, FaUser } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { NavbarElements, NavbarItem, NavbarLink } from './Navbar.element';

const Navbar = () => {
    return (
        <div className="navBar col-lg-1 col-sm-2 col-2 dark-bg p-0 text-center">
            <NavbarElements>
                <NavbarItem>
                    <NavbarLink to="/">
                        <FaHome />
                        <span>
                            Home
                        </span>
                    </NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/about">
                        <FaUser />
                        <span>
                            About Me
                        </span>
                    </NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/resume">
                        <MdSchool />
                        <span>
                            Resume
                        </span>
                    </NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/portfolio">
                        <FaSuitcase />
                        <span>
                            Portfolio
                        </span>
                    </NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/contact">
                        <FaEnvelope />
                        <span>
                            Contact
                        </span>
                    </NavbarLink>
                </NavbarItem>
            </NavbarElements>
        </div>
    )
}

export default Navbar
