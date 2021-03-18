import React from "react";
import { Link } from "react-router-dom";

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
const Navbar = () => {
  return (
    <header>
      <a href="/" className="logo">
        <span>L</span>ogo
      </a>
      <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}></div>
      <ul className="navigation" id="navigation">
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-post" onClick={toggleMenu}>
            Create Post
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
