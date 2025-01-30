import { useRef } from "react";
import { useContainerDimensions } from "./useContainerDimensions";

type IndustrialType = {
  item: {
    img: string;
    title: string;
    detail: string;
  };
  bgImgClr: string;
  bgClr: string;
  textColor:string;
};
export default function IndustrialCard({ item, bgImgClr, bgClr,textColor }: IndustrialType) {
  const componentRef = useRef<HTMLDivElement>(null);
    const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef} style={{backgroundColor:bgClr,color:textColor}} className="group text-13 px-6 relative w-full industrial-card">
      <div className="shadow-div w-6 h-56 bg-gradient-to-br from-[#0005] via-transparent to-transparent absolute left-0"></div>
      <div className="relative">
        <div
        style={{backgroundColor:bgImgClr}}
          className={`flex justify-center items-center w-full ${
            (width < 213 && item.title.length > 40)
              ? "h-[6.438rem] p-7 group-hover:h-20"
              : "h-[8.438rem] group-hover:h-[5.6rem]"
          } ${
            (width < 213 && item.detail.length > 94)
              ? "p-7 group-hover:h-[4.5rem]"
              : "group-hover:h-[5.6rem]"
          } absolute -top-1 transition-all duration-700 p-8 group-hover:p-5 box-border`}
        >
          <img
            src={`/Products-Services/${item.img}.svg`}
            alt={item.title}
            className="group-hover:w-14 w-24 transition-all duration-700 object-contain h-full"
          />
        </div>
        <div className="overflow-y-hidden h-56 w-full">
          <div
            className={`transition-all duration-700 ${
              (width < 213 && item.title.length > 40) ? "h-[6.438rem] group-hover:h-20" : "h-[8.188rem] group-hover:h-[5.438rem]"
            }  ${
              (width < 213 && item.detail.length > 94)
              ? "p-7 group-hover:h-[4.2rem]"
              : "group-hover:h-[5.6rem]"
          } `}
          ></div>
          <div className=" overflow-hidden">
            <h3 className="font-semibold uppercase my-3">{item.title}</h3>
            <p className="transform translate-y-20 group-hover:translate-y-0 transition-all duration-700">
              {item.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
