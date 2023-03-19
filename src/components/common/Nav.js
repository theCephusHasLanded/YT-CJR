// import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchForm from "../video/SearchForm";
// import youLogo from '../assets/you.png';
import yt from "../../assets/purpleyt.png"
const Nav = () => {  
  return (
   
    <nav id='menu'>
      <div>
      <img className="logo" src={yt} alt="logo" />
        <NavLink to="/">
          <h3>HOME</h3>
        </NavLink>
        <NavLink to="about">
          <h3>ABOUT</h3>
        </NavLink>
        <NavLink to="video">
        </NavLink>
      </div>
      <SearchForm />  
    </nav>
  );
};

export default Nav;
