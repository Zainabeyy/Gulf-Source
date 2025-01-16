import { Link } from "react-router-dom";

export default function ProductsServices() {
  const InsideLinkBar=[{
    img:'grommet-icons_services',
    title:'Industrial Products',
  },
  {
    img:'material-symbols_valve',
    title:'Industrial Services',
  },
  {
    img:'tabler_package',
    title:'Materials Supplies Division',
  }];
  const InsideLinkBarEl=InsideLinkBar.map((item,index)=>{
    return(
      <li className="hover-gradient hover:font-bold group" key={index}>
              <img
                src={`/Products-Services/${item.img}.svg`}
                alt="material symbol valve icon"
                className="inline mr-2"
              />
              <Link to="#">{item.title}</Link>
              <div className="gradient-line my-0 2xl:my-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </li>
    )
  })
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
      <section className="py-24">
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
      </section>
      
    </div>
  );
}
