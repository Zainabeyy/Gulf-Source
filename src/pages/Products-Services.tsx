import { Link } from "react-router-dom";
import IndustrialCard from "../components/IndustrialCard";
import data from "../data.json";

export default function ProductsServices() {
  const InsideLinkBar = [
    {
      img: "grommet-icons_services",
      title: "Industrial Products",
    },
    {
      img: "material-symbols_valve",
      title: "Industrial Services",
    },
    {
      img: "tabler_package",
      title: "Materials Supplies Division",
    },
  ];
  const InsideLinkBarEl = InsideLinkBar.map((item, index) => {
    return (
      <li className="hover-gradient hover:font-bold group" key={index}>
        <img
          src={`/Products-Services/${item.img}.svg`}
          alt={item.title}
          className="inline mr-2"
        />
        <Link to="#">{item.title}</Link>
        <div className="gradient-line my-0 2xl:my-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </li>
    );
  });
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
      <section className="w-full hidden sm:block">
        <div className="relative">
          <ul className="uppercase font-semibold text-MarianShade1 text-13 flex justify-evenly px-20 py-3 shadow-lg border-2 absolute -top-1/2 left-0 bg-white w-full transform -translate-y-1/2">
            {InsideLinkBarEl}
          </ul>
        </div>
      </section>

      <section className="pt-24">
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
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7">
            {data.IndustrialServices.blue.map((item, index) => {
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
          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7">
            {data.IndustrialServices.green.map((item, index) => {
              const bgColor = bgGreenColors[index % bgGreenColors.length];
              const textColor =
                bgColor === bgGreenColors[bgGreenColors.length - 1] ||
                bgColor === bgGreenColors[bgGreenColors.length - 2]
                  ? "#D0DFD6"
                  : "#092514";
              return (
                <IndustrialCard
                  item={item}
                  key={index}
                  bgImgClr="#124A27"
                  bgClr={bgColor}
                  textColor={textColor}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="w-fit">
          <h2 className="gradient font-extrabold text-3xl">
          Industrial Products
          </h2>
          <div className="gradient-line"></div>
        </div>
        <p className="text-MarianShade1 leading-[175%]">
        We offer a diverse range of high-quality industrial products, including valves, fittings, piping, and instrumentation.
        </p>
        <div className="mt-14">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-y-7 mb-7">
            {data.IndustrialProducts.blue.map((item, index) => {
              const slicedBgBlueColors = bgBlueColors.slice(1);
              const bgColor = slicedBgBlueColors[index % slicedBgBlueColors.length];
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
          <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-y-7 mb-7">
            {data.IndustrialProducts.green.map((item, index) => {
              const slicedBgGreenColors = bgGreenColors.slice(1);
              const bgColor = slicedBgGreenColors[index % slicedBgGreenColors.length];
              const textColor =
                bgColor === bgGreenColors[bgGreenColors.length - 1] ||
                bgColor === bgGreenColors[bgGreenColors.length - 2]
                  ? "#D0DFD6"
                  : "#092514";
              return (
                <IndustrialCard
                  item={item}
                  key={index}
                  bgImgClr="#124A27"
                  bgClr={bgColor}
                  textColor={textColor}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="w-fit">
          <h2 className="gradient font-extrabold text-3xl">
          Material Supplies Division
          </h2>
          <div className="gradient-line"></div>
        </div>
        <p className="text-MarianShade1 leading-[175%]">
        Our Materials Supplies Division provides comprehensive solutions, including custom packaging, sourcing, and traceability.
        </p>
        <div className="my-14">
        <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7">
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
    </div>
  );
}
