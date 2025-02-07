import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [burgerClass, setBurgerClass] = useState("bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isOpened, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLHeadElement | null>(null);

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

  // function so that user can close the menu by touching outside

  useEffect(() => {
    if (!isOpened) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setBurgerClass("bar unclicked");
        setMenuClass("menu hidden");
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);

  return (
    <header className="w-full z-30 fixed top-0" ref={menuRef}>
      <div className="relative bgBlur md:flex md:justify-between md:align-middle px-4 md:px-7  lg:px-33 2xl:px-52">
        <nav className="flex justify-between  md:bg-transparent p-4">
          <Link to="/" className="flex items-center justify-center">
            <img src="/Logo.svg" alt="logo" />
          </Link>
          <button
            className="hamburger-nav md:hidden"
            onClick={updateMenu}
            aria-label={
              isOpened ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span className={burgerClass}></span>
            <span className={burgerClass}></span>
            <span className={burgerClass}></span>
          </button>
        </nav>

        <ul className={menuClass}>
          <li className="navItem" onMouseEnter={() => setDropdownOpen(true)}>
            <NavLink
              to="Products-Services"
              className={({ isActive }) =>
                isActive ? "navLink gradient" : "navLink"
              }
            >
              Products & Services
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              onMouseEnter={() => {
                setDropdownOpen(false);
              }}
              to="vision"
              className={({ isActive }) =>
                isActive ? "navLink gradient" : "navLink"
              }
            >
              Vision
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="certifications"
              className={({ isActive }) =>
                isActive ? "navLink gradient" : "navLink"
              }
            >
              Certifications
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="contact-us"
              className={({ isActive }) =>
                isActive ? "navLink gradient" : "navLink"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
        layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height:'auto' }}
          exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 bgBlur z-40 top-[5.017rem] 2xl:top-[88px] w-full py-6 px-9 lg:px-33 2xl:px-52"
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <DropDownMenu />
        </motion.div>
      )}
    </AnimatePresence>

      
    </header>
  );
}
