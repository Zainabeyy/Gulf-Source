import React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { number: 14, descr: "Years in Business" },
    { number: 100, descr: "Dedicated Professionals" },
    { number: 100, descr: "Satisfied Clients" },
    { number: 500, descr: "Successful Projects Completed" },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });
  const [isCountEnd, setCountEnd] = React.useState(false);

  return (
    <ul
      className="list-none flex flex-col gap-y-5 items-center xs:flex-row xs:flex-wrap xs:justify-evenly pt-20 z-20"
      ref={ref}
    >
      {stats.map((item, index) => (
        <li
          className="text-MarianTint4 xs:min-w-52 flex-1 text-bold font-Inter text-center xs:text-left"
          key={index}
        >
          <span className="text-MarianTint4 font-bold text-[4rem] block">
            {isInView ? (
              <>
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2}
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
      ))}
    </ul>
  );
}
