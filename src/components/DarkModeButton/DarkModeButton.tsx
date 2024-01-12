// import React from 'react';
import "./DarkModeButton.css";
import lightMoon from "../../assets/lightMoon.svg";
import darkMoon from "../../assets/darkMoon.svg";
import { ThemeProps } from "../Header/Header";

const DarkModeButton = ({ onClick, currentTheme }: ThemeProps) => {
  return (
    <div
      className="DarkModeButton"
      onClick={() => onClick(currentTheme ? "" : "dark")}
    >
      <img src={currentTheme ? darkMoon : lightMoon} alt="Moon picto" />
      <span className="darkModeSpan">Dark Mode</span>
    </div>
  );
};

export default DarkModeButton;
