import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const stats = [
    {
      number: 14,
      descr: "Years in Business",
    },
    {
      number: 100,
      descr: "Dedicated Professionals",
    },
    {
      number: 100,
      descr: "Satisfied Clients",
    },
    {
      number: 500,
      descr: "successful projects completed",
    },
  ];
  const companyLogos = ["aramco-logo", "zeeco-logo"];
  const [startCounting, setStartCounting] = React.useState(false);
  const [isCountEnd, setCountEnd] = React.useState(false);
  return (
    <div>
      {/* hero section  */}

      <div className="relative w-full">
        <div className="backgroundImg w-full absolute -z-50"></div>
      </div>
      <section className="md:pt-36 pt-32 lg:pt-44 text-white min-h-[500px] 2xl:h-[37.5rem]">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl min-w-[15ch] sm:w-[27ch] leading-tight">
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
          <button
            type="button"
            className="bg-MarianBlue hover:bg-MarianShade1 gradient-border"
          >
            Get a Free Quote
          </button>
          <button
            type="button"
            className="gradient-border backdrop-blur-md bg-MarianShade1 bg-opacity-20 hover:bg-opacity-40"
          >
            Browse Services
          </button>
        </div>
      </section>

      {/* company overview */}

      <section className="flex xl:justify-between justify-center flex-grow flex-wrap xl:gap-10 py-16 gap-8">
        {companyDetails.map((item, index) => {
          return (
            <Link
              to=""
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

      <section
        className="bg-MarianShade2 py-16"
        onMouseEnter={() => setStartCounting(true)}
      >
        <div>
          <img
            className="absolute right-5 sm:right-9 lg:right-33 2xl:right-52"
            src="/homePage/World-Map.svg"
            alt="world map vector"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-SaudiFlagTint2 uppercase font-bold text-base">
            Stats
          </h2>
          <div className="w-fit">
            <div className="gradient-line"></div>
            <p className="text-MarianTint4 font-medium text-xl">
              A Track Record of Excellence
            </p>
          </div>
          <ul className="list-none flex flex-wrap justify-evenly pt-20 z-20">
            {stats.map((item, index) => {
              return (
                <li
                  className="text-MarianTint4 min-w-72 flex-1 text-bold font-Inter"
                  key={index}
                >
                  <span className="text-MarianTint4 font-bold text-[4rem] block ">
                    {startCounting ? (
                      <>
                        <CountUp
                          start={0}
                          end={item.number}
                          duration={2}
                          delay={0}
                          onEnd={() => setCountEnd(true)}
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isCountEnd ? 1 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {isCountEnd ? "+" : ""}
                        </motion.span>
                      </>
                    ) : (
                      "0"
                    )}
                  </span>
                  {item.descr}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* other company who worked with gulf source  */}

      <section className="py-16">
        <h2 className="text-SaudiFlagTint2 font-bold text-base uppercase">
          Companies Who Put Trust In Us
        </h2>
        <div className="w-fit mb-10">
          <div className="gradient-line"></div>
          <p className="text-xl text-MarianShade1">
            Serving the Best, Trusted by the Best
          </p>
        </div>
        <div>
          {companyLogos.map((item, index) => {
            return (
              <div
                className="w-60 h-60 flex justify-center items-center shadow-2xl p-8"
                key={index}
              >
                <img src={`/homePage/${item}.webp`} alt={item} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
