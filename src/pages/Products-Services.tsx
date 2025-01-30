import IndustrialCard from "../components/IndustrialCard";
import data from "../ProductServiceData.json";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function ProductsServices() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      navigate(
        {
          pathname: location.pathname,
          search: location.search,
        },
        { replace: true }
      );
    }
  }, [location, navigate]);

  const InsideLinkBar = [
    {
      img: "grommet-icons_services",
      hoverImg: "grommet-icons-gradient",
      sectionId: "Industrial-Services",
      title: "Industrial Services",
    },
    {
      img: "material-symbols_valve",
      hoverImg: "material-valve-gradient",
      sectionId: "Industrial-Products",
      title: "Industrial Products",
    },
    {
      img: "tabler_package",
      hoverImg: "tabler_package-gradient",
      sectionId: "Materials-Supplies-Division",
      title: "Materials Supplies Division",
    },
    {
      img: "aftersales",
      hoverImg: "aftersales-gradient",
      sectionId: "AfterSales-Industrial-Services",
      title: "Aftersales",
    },
  ];
  const bgBlueColors = ["#D5D9E3", "#ABB2C8", "#828CAC", "#586591", "#2E3F75"];
  const bgGreenColors = ["#D0DFD6", "#A2BEAD", "#739E83", "#457D5A", "#165D31"];

  return (
    <div>
      <div className="relative w-full">
        <div
          className="w-full absolute min-h-[25rem] 2xl:h-[27rem] -z-50"
          style={{
            backgroundImage:
              "url('/Products-Services/product-services-page-hero-bg.webp')",
          }}
        ></div>
      </div>
      <section className="md:pt-36 pt-32 lg:pt-44 text-white min-h-[25rem] 2xl:h-[27rem]">
        <h1>Your One-Stop Shop for Industrial Solutions</h1>
        <div className="w-fit">
          <div className="gradient-line"></div>
          <p className="font-medium xl:bg-MarianShade4 xl:bg-opacity-35  xl:shadow-2xl">
            Explore our comprehensive range of products and services.
          </p>
        </div>
      </section>

      {/* inside navbar  */}

      <section className="w-full hidden md:block">
        <div className="relative">
          <ul className="uppercase font-semibold text-MarianShade1 text-13 flex justify-evenly px-20 py-3 shadow-lg  absolute -top-1/2 left-0 bg-white w-full transform -translate-y-1/2">
            {InsideLinkBar.map((item, index) => {
              return (
                <li
                  className="hover:font-bold group product-service-nav-item"
                  key={index}
                >
                  <a href={`#${item.sectionId}`}>
                    <div className="flex flex-wrap items-center">
                      <div className="relative">
                        <img
                          src={`/Products-Services/Nav/${item.hoverImg}.svg`}
                          alt={item.img}
                          className="inline mr-2 absolute  opacity-0 transition-all duration-500 group-hover:opacity-100"
                        />
                        <img
                          src={`/Products-Services/Nav/${item.img}.svg`}
                          alt={item.img}
                          className="inline mr-2 transition-all duration-500 group-hover:opacity-0"
                        />
                      </div>
                      <p className="title">{item.title}</p>
                    </div>
                    <div
                      style={{ margin: "0rem" }}
                      className="gradient-line opacity-0 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600 group-hover:opacity-100"
                    ></div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Industrial Services section  */}

      <section className="pt-28" id="Industrial-Services">
        <div className="w-fit">
          <h2 className="gradient font-extrabold text-3xl">
            Industrial Services
          </h2>
          <div className="gradient-line"></div>
        </div>
        <p className="text-MarianShade1 leading-[175%]">
          GULF SOURCE offers a variety of industrial services for Mechanical,
          Pipeline, Plant Operations and turnaround. Our technological and
          environmental friendly equipment's as well as highly trained
          professionals ensure the projects are completed on time in the safest
          possible way. Our goal for our customers is to have as little
          down-time.
        </p>
        <div className="mt-14">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7 industrial-card">
            {data.IndustrialServices.blue.map((item, index) => {
              const bgColor = bgBlueColors[index % bgBlueColors.length];

              const textColor =
                bgColor === bgBlueColors[bgBlueColors.length - 1] ||
                bgColor === bgBlueColors[bgBlueColors.length - 2]
                  ? "#D5D9E3"
                  : "#25325E";
              const productServiceId = encodeURIComponent(
                item.title.replace(/\s+/g, "")
              );
              return (
                <Link to={`/Products-Services/${productServiceId}`} key={index}>
                  <IndustrialCard
                    item={item}
                    bgImgClr="#25325E"
                    bgClr={bgColor}
                    textColor={textColor}
                  />
                </Link>
              );
            })}
          </div>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7">
            {data.IndustrialServices.green.map((item, index) => {
              const bgColor = bgGreenColors[index % bgGreenColors.length];
              const textColor =
                bgColor === bgGreenColors[bgGreenColors.length - 1] ||
                bgColor === bgGreenColors[bgGreenColors.length - 2]
                  ? "#D0DFD6"
                  : "#092514";
              const productServiceId = encodeURIComponent(
                item.title.replace(/\s+/g, "")
              );
              return (
                <Link to={`/Products-Services/${productServiceId}`} key={index}>
                  <IndustrialCard
                    item={item}
                    bgImgClr="#124A27"
                    bgClr={bgColor}
                    textColor={textColor}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industrial Products section  */}

      <section className="pt-28" id="Industrial-Products">
        <div className="w-fit">
          <h2 className="gradient font-extrabold text-3xl">
            Industrial Products
          </h2>
          <div className="gradient-line"></div>
        </div>
        <p className="text-MarianShade1 leading-[175%]">
          We offer a diverse range of high-quality industrial products,
          including valves, fittings, piping, and instrumentation.
        </p>
        <div className="mt-14">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-y-7 mb-7">
            {data.IndustrialProducts.blue.map((item, index) => {
              const slicedBgBlueColors = bgBlueColors.slice(1);
              const bgColor =
                slicedBgBlueColors[index % slicedBgBlueColors.length];
              const textColor =
                bgColor === bgBlueColors[bgBlueColors.length - 1] ||
                bgColor === bgBlueColors[bgBlueColors.length - 2]
                  ? "#D5D9E3"
                  : "#25325E";
              const productServiceId = encodeURIComponent(
                item.title.replace(/\s+/g, "")
              );
              return (
                <Link to={`/Products-Services/${productServiceId}`} key={index}>
                  <IndustrialCard
                    item={item}
                    bgImgClr="#25325E"
                    bgClr={bgColor}
                    textColor={textColor}
                  />
                </Link>
              );
            })}
          </div>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-y-7">
            {data.IndustrialProducts.green.map((item, index) => {
              const slicedBgGreenColors = bgGreenColors.slice(1);
              const bgColor =
                slicedBgGreenColors[index % slicedBgGreenColors.length];

              const textColor =
                bgColor === bgGreenColors[bgGreenColors.length - 1] ||
                bgColor === bgGreenColors[bgGreenColors.length - 2]
                  ? "#D0DFD6"
                  : "#092514";
              const productServiceId = encodeURIComponent(
                item.title.replace(/\s+/g, "")
              );
              return (
                <Link to={`/Products-Services/${productServiceId}`} key={index}>
                  <IndustrialCard
                    item={item}
                    bgImgClr="#124A27"
                    bgClr={bgColor}
                    textColor={textColor}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material Supplies Division section  */}

      <section className="pt-28" id="Materials-Supplies-Division">
        <div className="w-fit">
          <h2 className="gradient font-extrabold text-3xl">
            Material Supplies Division
          </h2>
          <div className="gradient-line"></div>
        </div>
        <p className="text-MarianShade1 leading-[175%]">
          Our Materials Supplies Division provides comprehensive solutions,
          including custom packaging, sourcing, and traceability.
        </p>
        <div className="mt-14">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7">
            {data.MaterialSuppliesDivision.blue.map((item, index) => {
              const bgColor = bgBlueColors[index % bgBlueColors.length];
              const textColor =
                bgColor === bgBlueColors[bgBlueColors.length - 1] ||
                bgColor === bgBlueColors[bgBlueColors.length - 2]
                  ? "#D5D9E3"
                  : "#25325E";
              return (
                <IndustrialCard
                  item={item}
                  key={index}
                  bgImgClr="#25325E"
                  bgClr={bgColor}
                  textColor={textColor}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* AfterSales Industrial Services section  */}

      <section className="pt-28 mb-16" id="AfterSales-Industrial-Services">
        <div className="w-fit">
          <h2 className="gradient font-extrabold text-3xl">
            AfterSales Industrial Services
          </h2>
          <div className="gradient-line"></div>
        </div>
        <p className="text-MarianShade1 leading-[175%]">
          Gulf Source offers a comprehensive range of aftersales services to
          ensure the optimal performance and longevity of your industrial
          equipment. Our expert technicians provide installation, maintenance,
          repair, and troubleshooting services, ensuring your operations run
          smoothly and efficiently.
        </p>
        <div className="mt-14">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7 industrial-card">
            {data.IndustrialServices.blue.map((item, index) => {
              const bgColor = bgBlueColors[index % bgBlueColors.length];

              const textColor =
                bgColor === bgBlueColors[bgBlueColors.length - 1] ||
                bgColor === bgBlueColors[bgBlueColors.length - 2]
                  ? "#D5D9E3"
                  : "#25325E";
              const productServiceId = encodeURIComponent(
                item.title.replace(/\s+/g, "")
              );
              return (
                <Link to={`/Products-Services/${productServiceId}`} key={index}>
                  <IndustrialCard
                    item={item}
                    bgImgClr="#25325E"
                    bgClr={bgColor}
                    textColor={textColor}
                  />
                </Link>
              );
            })}
          </div>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7">
            {data.IndustrialServices.green.map((item, index) => {
              const bgColor = bgGreenColors[index % bgGreenColors.length];
              const textColor =
                bgColor === bgGreenColors[bgGreenColors.length - 1] ||
                bgColor === bgGreenColors[bgGreenColors.length - 2]
                  ? "#D0DFD6"
                  : "#092514";
              const productServiceId = encodeURIComponent(
                item.title.replace(/\s+/g, "")
              );
              return (
                <Link to={`/Products-Services/${productServiceId}`} key={index}>
                  <IndustrialCard
                    item={item}
                    bgImgClr="#124A27"
                    bgClr={bgColor}
                    textColor={textColor}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
