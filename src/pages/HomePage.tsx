export default function HomePage() {
  return (
    <div>
      <div className="relative w-full">
        <div className="backgroundImg w-full absolute -z-50"></div>
      </div>
      <section className="px-9 lg:px-33 md:pt-36 pt-32 lg:pt-44 text-white">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl min-w-[18ch] sm:w-[27ch] leading-tight">
            Your Trusted Partner for Industrial Supplies and Services
          </h1>
          <div className="w-fit">
            <div className="gradient-line my-2 2xl:my-4"></div>
            <p className="xl:text-xl">
              Delivering Excellence{" "}
              <span className="font-extrabold italic">Since 2010</span>
            </p>
          </div>
        </div>
        <div className="pt-10 flex gap-2 flex-col xs:flex-row">
        <button type="button" className="gradientButton"><div className="bg-MarianBlue ">Get a Free Quote</div></button>
        <button type="button" className="gradientButton xs:ml-4"><div className="bg-MarianShade1 bg-opacity-20 h-full w-full">Browse Services</div></button>
        </div>
      </section>
    </div>
  );
}
