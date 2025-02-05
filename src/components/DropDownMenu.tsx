import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function DropDownMenu() {
  const [sectionName, setSectName] = React.useState("");

  const InsideLinkBar = [
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
  return (
    <div className="flex text-white gap-x-10">
      <ul className="flex flex-col items-start gap-y-4 min-w-[258px]">
        {InsideLinkBar.map((item, index) => {
          const productServiceId = item.title.replace(/\s+/g, "");
          return (
            <li
              onMouseEnter={() => setSectName(productServiceId)}
              className={`hover:font-bold group product-service-nav-item uppercase w-fit ${
                sectionName === productServiceId ? "font-bold" : ""
              }`}
              key={index}
            >
              <a href={`/Products-Services#${item.sectionId}`}>
                <div className="flex flex-wrap items-center">
                  <div className="relative">
                    <img
                      src={`/Nav/${item.img}-gradient.svg`}
                      alt={item.img}
                      className={`inline mr-2 absolute opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                        sectionName === productServiceId ? "opacity-100" : ""
                      }`}
                    />
                    <img
                      src={`/Nav/${item.img}-white.svg`}
                      alt={item.img}
                      className={`inline mr-2 transition-all duration-500 group-hover:opacity-0 ${
                        sectionName === productServiceId ? "opacity-0" : ""
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
            </li>
          );
        })}
      </ul>
      <div className="w-[1px] opacity-10 bg-MarianTint4"></div>
      <div>
        {InsideLinkBar.map((item) => {
          const sectId = item.title.replace(/\s+/g, "");
          if (sectId === sectionName) {
            return (
              <div key={item.sectionId} className="flex-1">
                <AnimatePresence>
                  <motion.ul
                    initial={{ opacity: 0, translateX: -10 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid grid-cols-3 xl:grid-cols-4  gap-2 items-center"
                  >
                    {item.content.map((service, index) => {
                      const productServiceId = encodeURIComponent(
                        service.replace(/\s+/g, "")
                      );
                      return (
                        <React.Fragment key={index}>
                          {sectId === "MaterialsSuppliesDivision" ? (
                            <li className="text-[0.7rem] lg:text-13 font-semibold text-MarianTint4 pl-3 flex items-center min-w-56 h-16 hover:bg-MarianTint4/10 hover:text-white transition-all duration-500">
                              <div className="max-w-[19ch]">{service}</div>
                            </li>
                          ) : (
                            <Link
                              to={`/Products-Services/${productServiceId}`}
                              className="text-[0.7rem] lg:text-13 font-semibold text-MarianTint4 pl-3 flex items-center min-w-56 h-16 hover:bg-MarianTint4/10 hover:text-white transition-all duration-500"
                            >
                              <div className="max-w-[19ch]">{service}</div>
                            </Link>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </motion.ul>
                </AnimatePresence>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
