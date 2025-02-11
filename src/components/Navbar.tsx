import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const InsideLinkBarData = [
    {
      img: "grommet-icons",
      sectionId: "Industrial-Services",
      title: "Industrial Services",
      content: [
        "Plant Maintenance & Turn Around",
        "Mechanical & Pipeline Integration",
        "Pipeline De-pressurizing",
        "Valves & Actuator Services",
        "Industrial Engineered Material Supplies",
        "Fabrication Of Spare Parts Customized Fabrication Services",
        "Automation & Dcs Integration",
        "Engineered Equipments & Skids Supplies",
        "Hydraulic & Industrial Services / Hoses",
        "Telecom ,osp & Foc Integration",
      ],
    },
    {
      img: "material-valve",
      sectionId: "Industrial-Products",
      title: "Industrial Products",
      content: [
        "Valves",
        "Piping",
        "fitting and flanges",
        "Structural Steel",
        "Instrumentation & Telecommunication",
        "Electrical",
      ],
    },
    {
      img: "tabler_package",
      sectionId: "Materials-Supplies-Division",
      title: "Materials Supplies Division",
      content: [
        "Custom Packaging and labeling",
        "Consignment Stock",
        "Sourcing",
        "Traceability",
        "Usage Forecasting",
      ],
    },
    {
      img: "aftersales",
      sectionId: "AfterSales-Industrial-Services",
      title: "Aftersales",
      content: [
        "Plant Maintenance & Turn Around",
        "Mechanical & Pipeline Integration",
        "Pipeline De-pressurizing",
        "Valves & Actuator Services",
        "Industrial Engineered Material Supplies",
        "Fabrication Of Spare Parts Customized Fabrication Services",
        "Automation & Dcs Integration",
        "Engineered Equipments & Skids Supplies",
        "Hydraulic & Industrial Services / Hoses",
        "Telecom ,osp & Foc Integration",
      ],
    },
  ];
  const [sectionName, setSectName] = useState("");
  const [isinsideLinkOpen, setInsideLinkOpen] = useState(false);
  const [isOpened, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLHeadElement | null>(null);

  function updateMenu() {
    setOpen(!isOpened);
  }

  function closeMenu() {
    setOpen(false);
    setSectName("");
    setInsideLinkOpen(false);
  }

  // function so that user can close the menu by touching outside

  useEffect(() => {
    if (!isOpened) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);

  return (
    <header className={"w-full bgBlur z-30 fixed top-0"} ref={menuRef}>
      <div className="md:flex md:justify-between md:align-middle px-4 md:px-7 lg:px-33 2xl:px-52">
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
            <span
              className={`bar ${isOpened ? "clicked" : "unclicked"}`}
            ></span>
            <span
              className={`bar ${isOpened ? "clicked" : "unclicked"}`}
            ></span>
            <span
              className={`bar ${isOpened ? "clicked" : "unclicked"}`}
            ></span>
          </button>
        </nav>
        <ul
          className={`menu transition-all overflow-hidden duration-500 ${
            isOpened
              ? "opacity-100 max-h-[464px] py-6"
              : "opacity-0 max-h-0 py-0"
          }`}
        >
          {/* products & Services  */}

          <li className="navItem" onMouseEnter={() => setDropdownOpen(true)}>
            <div className="flex items-center">
              <NavLink
                to="Products-Services"
                className={({ isActive }) =>
                  isActive ? "navLink gradient" : "navLink"
                }
                onClick={() => {
                  closeMenu();
                  setDropdownOpen(false);
                }}
              >
                Products & Services
              </NavLink>
              <button
                className={`md:hidden ml-2 transition-all ${
                  isinsideLinkOpen ? "-rotate-180" : "rotate-0"
                }`}
                onClick={() => setInsideLinkOpen((prev) => !prev)}
              >
                <img src="/Nav/arrow-drop-down.svg" alt="drop down icon" />
              </button>
            </div>

            {/* drop down nav for small screens  */}

            <AnimatePresence>
              {isinsideLinkOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, padding: 0 }}
                  animate={{ height: "216px", opacity: 1, padding: "24px 8px" }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    padding: 0,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className="md:hidden overflow-hidden"
                  onClick={() => setOpen(false)}
                >
                  {InsideLinkBarData.map((item, index) => {
                    const productServiceId = item.title.replace(/\s+/g, "");
                    return (
                      <a
                        href={`/Products-Services#${item.sectionId}`}
                        key={index}
                        onClick={() => setSectName(productServiceId)}
                      >
                        <div className="flex flex-wrap items-center my-4">
                          <div className="relative">
                            <img
                              src={`/Nav/${item.img}-gradient.svg`}
                              alt={item.img}
                              className={`inline mr-2 w-6 absolute opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                                sectionName === productServiceId
                                  ? "opacity-100"
                                  : ""
                              }`}
                            />
                            <img
                              src={`/Nav/${item.img}-white.svg`}
                              alt={item.img}
                              className={`inline w-6 mr-2 transition-all duration-500 group-hover:opacity-0 ${
                                sectionName === productServiceId
                                  ? "opacity-0"
                                  : ""
                              }`}
                            />
                          </div>
                          <p
                            className={`title text-[0.7rem] lg:text-13 ${
                              sectionName === productServiceId ? "gradient" : ""
                            }`}
                          >
                            {item.title}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
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
              onClick={closeMenu}
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
              onClick={closeMenu}
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
              onClick={closeMenu}
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
            initial={{ opacity: 0, paddingTop: 0, paddingBottom: 0, height: 0 }}
            animate={{
              opacity: 1,
              paddingTop: "2.25rem",
              paddingBottom: "2.25rem",
              height: "auto",
            }}
            exit={{
              opacity: 0,
              paddingTop: 0,
              paddingBottom: 0,
              height: 0,
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative left-0 z-40 w-full py-6 px-9 lg:px-33 2xl:px-52 hidden md:block"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DropDownMenu data={InsideLinkBarData} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
