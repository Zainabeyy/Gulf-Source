import { Link } from "react-router-dom";

export default function Vision() {
  const coreValueData = [
    {
      img: "14-years",
      title: "Extensive Industry Experience",
      description:
        "With over a decade of experience in the industrial supply & services sector, we have developed deep knowledge and expertise in meeting the unique demands of various industries. Our seasoned professionals understand the intricacies of different applications and can provide tailored solutions to meet your specific requirements.",
    },
    {
      img: "hand-with-stars",
      title: "Unparalleled Customer Service",
      description:
        "At Gulf Source, we prioritize customer satisfaction above all else. Our dedicated team is committed to providing exceptional service and support throughout your purchasing journey to installation and functionality at the job site. We value open communication, prompt responses, and personalized attention to ensure that your experience with us is smooth and hassle-free.",
    },
    {
      img: "star-badge",
      title: "Reliable and Dependable",
      description:
        "We take pride in our reputation for reliability and dependability. We understand the critical nature of your operations and strive to deliver products and aftersales services on time, every time. Our efficient, robust supply chain management systems and specialized operational construction teams ensure that you can rely on us for timely deliveries and aftersales services, reducing downtime and keeping your projects on track.",
    },
    {
      img: "squares",
      title: "Wide Range of Products & Services",
      description:
        "We offer an extensive selection of high-quality products and aftersales services, encompassing a diverse range of industrial categories. Whether you need customized, engineered, Aramco-approved products or aftersales services such as installation, testing, commissioning, and mechanical, E&I, and pipeline integration services, we have you covered. Our comprehensive inventory and specialized services crews ensure that you can find everything you need in one place, saving you time and effort.",
    },
    {
      img: "money-target",
      title: "Competitive Pricing",
      description:
        "We believe that top-quality industrial supplies and services should be accessible at competitive prices. We work diligently to offer cost-effective solutions without compromising on the quality of our products or services. Our pricing structure is designed to provide you with the best value for your investment, helping you optimize your operational costs.",
    },
    {
      img: "hand-shake",
      title: "Long-Term Partnerships ",
      description:
        "At Gulf Source, we aim to build long-lasting partnerships with our clients. We value the trust and confidence our customers place in us and consider their success as our own. By fostering collaborative relationships, we can better understand your evolving needs and provide proactive solutions to support your growth and development.",
    },
    {
      img: "check",
      title: "Commitment to Innovation ",
      description:
        "We are committed to staying at the forefront of the industry by embracing innovation and advancements in technology. By continually exploring new supply chain solutions and aftersales services, adopting the latest tools, techniques, and technological, environmentally friendly products or equipment, we strive to improve efficiency, enhance our offerings, and provide you with cutting-edge solutions.",
    },
  ];

  return (
    <div>
      <div className="relative w-full">
        <div
          className="w-full absolute min-h-96 bg-cover bg-no-repeat bg-center -z-50 bg-MarianShade2"
          style={{
            backgroundImage: "url('/vision/vision-bg-1.webp')",
          }}
        ></div>
      </div>
      <section className="md:pt-36 pt-32 lg:pt-44 text-white min-h-96">
        <div>
          <h1 className="gradient uppercase w-fit">who we are</h1>
          <div className="w-fit">
            <div className="gradient-line my-3"></div>
            <p className="text-base">
              Gulf Source Industrial Services (GSIS) has solidified its
              reputation as a global pioneer in the distribution of Industrial
              Supplies & Services since its inception in{" "}
              <span className="font-bold italic">2010</span>
            </p>
          </div>
        </div>
      </section>

      {/* vision and mission  */}

      <section className="relative mt-16 flex flex-col items-center mb-10 xl:mb-32">
        <div className="flex-center absolute w-full top-20 md:top-0 md:bottom-0 left-0">
          <img
            src="/vision/vision.svg"
            alt="vision"
            className="xl:w-4/5 object-contain w-full"
          />
        </div>
        <img src="/vision/party-leader-icon.svg" alt="vision icon" />
        <h2 className="gradient font-bold text-4xl w-fit mx-0 pt-3">Vision</h2>
        <p className="leading-[175%] mt-6 mb-14 xl:w-4/5">
          Gulf Source aims to be recognized as the industry leader, setting the
          benchmark for excellence in industrial supply. We aspire to be the
          go-to partner for businesses seeking top quality products, exceptional
          service, and unparalleled expertise. By staying ahead of market
          trends, embracing technological advancements, and fostering a culture
          of innovation, we aim to continuously expand our offerings and exceed
          customer expectations. Through sustainable practices and a commitment
          to social responsibility, we strive to make a positive impact on our
          industry, communities, and the environment.
        </p>
      </section>
      <section className="relative mt-16 flex flex-col items-center mb-10 xl:mb-14">
        <div className="flex-center absolute w-full top-20 md:top-0 md:bottom-0 left-0 ">
          <img
            src="/vision/mission.svg"
            alt="mission"
            className="xl:w-4/5 object-contain w-full"
          />
        </div>
        <img src="/vision/target-icon.svg" alt="target icon" />
        <h2 className="gradient font-bold text-4xl w-fit mx-0 pt-3">MiSsion</h2>
        <p className="leading-[175%] mt-6 mb-14 xl:w-4/5">
          Gulf Source is committed to being the premier provider of high-quality
          industrial supplies, offering comprehensive solutions to meet the
          diverse needs of our customers. We strive to deliver exceptional
          products, reliable service, and innovative solutions that enhance the
          efficiency and success of businesses across industries. Through our
          unwavering commitment to customer satisfaction, continuous
          improvement, and ethical business practices, we aim to build long-term
          relationships based on trust and mutual growth.
        </p>
      </section>

      {/* core values */}

      <section className="bg-MarianShade2 py-16">
        <h2>core values</h2>
        <div className="w-fit">
          <div className="gradient-line"></div>
          <p className="text-MarianTint4 text-xl font-medium">
            Why choose only us?
          </p>
        </div>
        <ul className="flex flex-wrap gap-5 justify-center mt-10 relative">
          {coreValueData.map((item, index) => {
            return (
              <li
                key={index}
                className="group relative hover:bg-MarianShade3 hover:py-6 bg-white flex-shrink-0 xl:w-[17rem] w-60 h-[21.875rem] px-6 py-10 overflow-hidden transition-all duration-500 transition-timing"
              >
                <div className="relative">
                  <div className="relative">
                  <img
                    src={`/vision/${item.img}.svg`}
                    alt={item.img}
                    className="group-hover:w-10 w-[6.875rem] mr-3 transition-all duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={`/vision/${item.img}-light.svg`}
                    alt={item.img}
                    className="group-hover:w-10 w-[6.875rem] mr-3 transition-all duration-500 absolute top-0 left-0 object-contain opacity-0 group-hover:opacity-100"
                  />
                  </div>
                  <h2
                    className={`absolute left-0 group-hover:-translate-y-10 group-hover:translate-x-14 ${
                      item.title.length < 20 ? "group-hover:-translate-y-8" : ""
                    } my-6 group-hover:my-0 text-base group-hover:text-13 max-w-[20ch] font-bold blueGreenGradient group-hover:from-PrimaryGradientClr1 group-hover:to-PrimaryGradientClr2 transition-all duration-500`}
                  >
                    {item.title}
                  </h2>
                </div>
                <div className="relative object-contain top-4 bg-MarianBlue h-[1px] w-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <p className="line-clamp-3 group-hover:line-clamp-none text-13 group-hover:text-[0.625rem] mt-[5.5rem] group-hover:mt-8 xl:group-hover:text-xs group-hover:text-MarianTint4 leading-[175%] text-ellipsis">
                  {item.description}
                </p>
              </li>
            );
          })}
          <img src="/vision/arrow.svg" alt="arrow" className="absolute bottom-52 right-20 rotate-6 hidden md:block"/>
        </ul>
      </section>


      <section className="flex flex-col items-center py-16">
        <img src="/vision/quote.svg" alt="quote icon" loading="lazy"/>
        <p className="blueGreenGradient text-4xl font-bold w-fit text-center my-6">We don’t just build products, we build trust and relationships that last generations.</p>
        <div className="pt-10 pb-4 flex gap-2 flex-col xs:flex-row">
          <Link
            to="/contact-us"
            className="bg-MarianBlue hover:bg-MarianShade1 gradient-border text-white flex-center"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/Products-Services"
            className="gradient-border backdrop-blur-md bg-MarianShade1 bg-opacity-20 hover:bg-opacity-40 flex-center"
          >
            Browse Services
          </Link>
        </div>
      </section>
    </div>
  );
}
