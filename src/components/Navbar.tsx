import { useState } from "react";
import { Link } from "react-router-dom";

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
    <header className="px-4 md:px-7 md:py-3 lg:px-33 md:flex md:justify-between md:align-middle w-full absolute z-30 bgBlur">
      <nav className="flex justify-between  md:bg-transparent p-4">
        <Link to='/'><img src="/Logo.svg" alt="logo" /></Link>
        <button className="hamburger-nav md:hidden" onClick={updateMenu}>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </button>
      </nav>

      <ul className={menuClass}>
        <li className="navItem">
          <Link to="#" className="navLink">
            Products & Services
          </Link>
        </li>
        <li className="navItem">
          <Link to="#" className="navLink">
            Vision
          </Link>
        </li>
        <li className="navItem">
          <Link to="#" className="navLink">
            Certifications
          </Link>
        </li>
        <li className="navItem">
          <Link to="#" className="navLink">
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
}
