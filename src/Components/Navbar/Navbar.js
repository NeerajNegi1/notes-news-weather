import React from 'react'
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css'

const linkStyleNavbar = {
    textDecoration: "none",
    color: "black",
    fontSize: "1rem"
}

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <Link style={linkStyleNavbar} to="/">
                    <li>
                        Create Notes
                    </li>
                </Link>
                <Link style={linkStyleNavbar} to="/wheather/">
                    <li>
                        Wheather
                    </li>
                </Link>
                <Link style={linkStyleNavbar} to="/news/">
                    <li>
                        News
                    </li>
                </Link>
                <Link style={linkStyleNavbar} to="/about-me/">
                    <li>
                        About Me
                    </li>
                </Link>
                <Link style={linkStyleNavbar} to="/privacy-policy/">
                    <li>
                        Privacy Policy
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
