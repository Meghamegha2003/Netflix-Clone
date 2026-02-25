import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile_img.png";
import belIcon from "../../assets/bell_icon.svg";
import searchIcon from "../../assets/search_icon.svg";
import caretIcon from "../../assets/caret_icon.svg";

const NavBar = () => {
  const navRef = useRef()
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
         navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className="navBar">
      <div className="left_navbar">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Populer</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="right_navbar">
        <img src={searchIcon} alt="" className="icons" />
        <p>Childrens</p>
        <img src={belIcon} alt="" className="icons" />
        <div className="navbarProfile">
          <img src={profile} alt="" className="profile" />
          <img src={caretIcon} alt="" className="icons" />
          <div className="dropdown">
            <p>
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
