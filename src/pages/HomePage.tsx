import { Link } from "react-router-dom";
import Stats from "../components/Stats";

export default function HomePage() {
  const companyDetails = [
    {
      image: "Industrial-Services",
      title: "Industrial Services",
      description: "Comprehensive Industrial Solutions",
    },
    {
      image: "Industrial-Products",
      title: "Industrial Products",
      description: "Your One-Stop Shop for Industrial Supplies",
    },
    {
      image: "Materials-Supplies-Division",
      title: "Materials Supplies Division",
      description: "Tailored solutions for your specific requirements.",
    },
  ];
  const companyLogos = [
    "aramco-logo",
    "zeeco-logo",
    "aramco-logo",
    "zeeco-logo",
    "aramco-logo",
    "zeeco-logo",
  ];

  const companyLogoEl = companyLogos.map((item, index) => (
    <div
      className="w-60 h-60 flex justify-center items-center shadow-xl p-8"
      key={index}
    >
      <img src={`/homePage/${item}.webp`} alt={item} loading="lazy"/>
    </div>
  ));
  return (
    <div>
      {/* hero section  */}

      <div className="relative w-full">
        <div className="backgroundImg w-full absolute -z-50"></div>
      </div>
      <section className="md:pt-36 pt-32 lg:pt-44 text-white min-h-[500px] 2xl:h-[37.5rem]">
        <div>
          <h1>
            Your Trusted Partner for Industrial Supplies and Services
          </h1>
          <div className="w-fit">
            <div className="gradient-line"></div>
            <p className="xl:text-xl">
              Delivering Excellence{" "}
              <span className="font-extrabold italic">Since 2010</span>
            </p>
          </div>
        </div>
        <div className="pt-10 flex gap-2 flex-col xs:flex-row">
          <Link
            to=""
            className="bg-MarianBlue hover:bg-MarianShade1 gradient-border"
          >
            Get a Free Quote
          </Link>
          <Link
            to=""
            className="gradient-border backdrop-blur-md bg-MarianShade1 bg-opacity-20 hover:bg-opacity-40"
          >
            Browse Services
          </Link>
        </div>
      </section>

      {/* company overview */}

      <section className="flex xl:justify-between justify-center flex-grow flex-wrap xl:gap-10 py-16 gap-8">
        {companyDetails.map((item, index) => {
          return (
            <Link
              to={`/Products-Services/#${item.image}`}
              key={index}
              className="companyDetailCard group max-w-[18rem] sm:max-w-[19.5rem] 2xl:max-w-[25rem] min-h-[17rem] p-6 bg-no-repeat bg-center bg-cover overflow-hidden flex items-end transition-all duration-1000"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(9, 13, 23, 0), rgba(49, 71, 125, 0.66)), url('/homePage/${item.image}.webp')`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = "110%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = "100%";
              }}
            >
              <div className="relative ease-in-out transform translate-y-[83%] group-hover:translate-y-0 transition-transform duration-1000">
                <h2 className="group-hover:translate-y-0 group-hover:text-base mb-5 w-[20ch] group-hover:mb-0 transition-all duration-1000 ease-in-out font-bold text-base sm:text-xl  text-white uppercase">
                  {item.title}
                </h2>
                <div className="w-fit opacity-1">
                  <div className="gradient-line"></div>
                  <p className="text-MarianTint4 text-xl font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* company stats  */}

      <section className="bg-MarianShade2 py-16">
        <div>
          <img
            className="absolute right-5 sm:right-9 lg:right-33 2xl:right-52"
            src="/homePage/World-Map.svg"
            alt="world map vector"
          />
        </div>
        <div className="relative z-10">
          <h2>Stats</h2>
          <div className="w-fit">
            <div className="gradient-line"></div>
            <p className="text-MarianTint4 font-medium text-xl">
              A Track Record of Excellence
            </p>
          </div>
          <Stats />
        </div>
      </section>

      {/* other company who worked with gulf source  */}

      <section className="py-16 w-full overflow-x-hidden">
        <h2>Companies Who Put Trust In Us</h2>
        <div className="w-fit mb-10">
          <div className="gradient-line"></div>
          <p className="text-xl">
            Serving the Best, Trusted by the Best
          </p>
        </div>

        {/* logo carousel */}

        <div className="flex flex-nowrap slide gap-6 w-full">
          <div
            className="shrink-0 gap-6 flex flex-nowrap animate-slide"
          >
            {companyLogoEl}
          </div>
          <div
            className="shrink-0 gap-6 flex flex-nowrap animate-slide"
          >
            {companyLogoEl}
          </div>
        </div>
      </section>

      {/* vision & mission  */}

      <section
        className="py-16 bg-no-repeat bg-center bg-cover bg-SaudiFlagShade4 flex flex-wrap gap-12 md:gap-0"
        style={{
          backgroundImage: "url('/homePage/vision-bg.webp')",
        }}
      >
        <div className="md:w-1/2">
          <div className="w-fit">
            <h2>Our Vision & Mission</h2>
            <div className="gradient-line m-0"></div>
          </div>
          <p className="font-medium text-MarianTint4 text-2xl capitalize my-12 max-w-[25ch]">
            To be the leading provider of innovative industrial solutions
          </p>
          <Link
            to=""
            className="gradient-border backdrop-blur-md bg-MarianShade1 bg-opacity-20 hover:bg-opacity-40 text-white"
          >
            Read More About Us
          </Link>
        </div>
        <div className="md:w-1/2 md:p-8">
          <div className="relative">
            <img
              src="/homePage/quote.svg"
              alt="quote symbol"
              className="positon absolute -top-4 md:-left-8 mix-blend-plus-lighter"
            />
            <p className="text-white font-semibold text-base leading-[175%] mb-5">
              Our vision is to be the industry leader, setting the benchmark for
              excellence in industrial supply. We strive to be the go-to partner
              for businesses seeking top-quality products, exceptional service,
              and unparalleled expertise. By staying ahead of market trends and
              embracing innovation, we aim to continuously expand our offerings
              and exceed customer expectations.
            </p>
            <img
              src="/homePage/quote.svg"
              alt="quote symbol"
              className="positon absolute rotate-180 bottom-0 right-0 mix-blend-plus-lighter"
            />
          </div>
          <div className="text-SaudiFlagTint2">
            <p className="font-black text-xl uppercase">Aftab Hussain</p>
            <p className="font-semibold text-13">Director Gulf Source</p>
          </div>
        </div>
      </section>
    </div>
  );
}
