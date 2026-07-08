import React from 'react'
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
  <nav  className="navbar navbar-expand-lg ">
    <div className="container">

        <a className="navbar-brand" href="#">
           <img src={logo} alt="Logo" />
        </a>

        <div className="collapse navbar-collapse justify-content-center">

            <ul className="navbar-nav nav-box">

                <li className="nav-item">
                    <a className="nav-link " href="#">HOME</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">PHOTOS & VIDEOS</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">CATEGORIES</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">USERS</a>
                </li>

            </ul>

        </div>

        <button className="sign-btn">
           👤 Sign In / Up
        </button>

    </div>
  </nav>
  )
}

export default Navbar