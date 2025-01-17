import IndustrialCard from "./IndustrialCard";

type IndustrialGridType = {
  data: {
    img: string;
    title: string;
    detail: string;
  }[];
  clr: string;
};

export default function IndustrialGrid({ data, clr }: IndustrialGridType) {
  const bgBlueColors = ["#D5D9E3", "#ABB2C8", "#828CAC", "#586591", "#2E3F75"];
  const bgGreenColors = ["#D0DFD6", "#A2BEAD", "#739E83", "#457D5A", "#165D31"];
  const isBlue = clr === "blue";
  const colors = isBlue ? bgBlueColors : bgGreenColors;
  const lightTextColor = isBlue ? "#D5D9E3" : "#D0DFD6";
  const darkTextColor = isBlue ? "#25325E" : "#092514";
  const bgImgClr = isBlue ? "#25325E" : "#124A27";
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 mb-7">
      {data.map((item, index) => {
        const bgColor = colors[index % colors.length];
        const textColor =
          bgColor === colors[colors.length - 1] ||
          bgColor === colors[colors.length - 2]
            ? lightTextColor
            : darkTextColor;
        return (
          <IndustrialCard
            item={item}
            key={index}
            bgImgClr={bgImgClr}
            bgClr={bgColor}
            textColor={textColor}
          />
        );
      })}
    </div>
  );
}
