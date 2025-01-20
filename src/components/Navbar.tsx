import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [burgerClass, setBurgerClass] = useState("bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isOpened, setOpen] = useState(false);
  function updateMenu() {
    if (!isOpened) {
      setBurgerClass("bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("bar unclicked");
      setMenuClass("menu hidden");
    }
    setOpen(!isOpened);
  }
  return (
    <header className="px-4 md:px-7 md:py-3 lg:px-33 2xl:px-52 md:flex md:justify-between md:align-middle w-full z-30 bgBlur fixed top-0">
      <nav className="flex justify-between  md:bg-transparent p-4">
        <Link to='/'><img src="/Logo.svg" alt="logo" /></Link>
        <button className="hamburger-nav md:hidden" onClick={updateMenu} aria-label={isOpened ? "Close navigation menu" : "Open navigation menu"}>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </button>
      </nav>

      <ul className={menuClass}>
        <li className="navItem">
          <NavLink to="Products-Services" className={({isActive})=>isActive ? "navLink gradient" : "navLink"}>
            Products & Services
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="vision" className={({isActive})=>isActive ? "navLink gradient" : "navLink"}>
            Vision
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="certifications" className={({isActive})=>isActive ? "navLink gradient" : "navLink"}>
            Certifications
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="contact-us" className={({isActive})=>isActive ? "navLink gradient" : "navLink"}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
