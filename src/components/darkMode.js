import "../index.css";
import React from "react";
import { Switch } from "antd";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const darkDefault =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (darkDefault) {
  setDark();
}

const toggleDarkMode = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    setLight();
  } else {
    setDark();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <Switch onChange={toggleDarkMode} defaultChecked={darkDefault} />
      <div className="slider round"></div>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
