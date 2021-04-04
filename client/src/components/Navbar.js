import React from "react";
import "./Navbar.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="logo">
        <YouTubeIcon color="secondary" fontSize="large" className="yo" />
        YOU20
      </h1>
    </div>
  );
};

export default Navbar;
