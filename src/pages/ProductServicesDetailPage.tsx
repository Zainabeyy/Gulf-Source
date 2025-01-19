import { Link, useParams } from "react-router-dom";
import data from "../ProductServiceDetail.json";
import React from "react";
import DetailList from "../components/DetailList";

type DataFindType = {
  id: number;
  img: string;
  title: string;
  detail: string;
  manufacturerrs?:string[];
  ListData?:any[]
  WhatYouGet?: Array<{
    title: string;
    detail: string;
  }>;
};


export default function ProductsServicesDetailPage() {
  const params = useParams<{ id: string }>();
  const [productService, setProductService] =
    React.useState<DataFindType | null>(null);

  React.useEffect(() => {
    const dataFind = data.find((item) => {
      return item.title.replace(/\s+/g, "") === params.id;
    });
    if (dataFind) {
      setProductService(dataFind);
    }
  }, [params.id]);

  if (!productService) {
    return <section>Product or service not found.</section>;
  }

  return (
    <div className="text-MarianShade1 leading-[175%]">
      <div className="pt-28 sm:pt-36">
        <section>
          <h1 className="gradient">{productService.title}</h1>
          <div className="mt-16 mb-12 gap-14">
            <img
              src={`/Detail/${productService.img}.webp`}
              alt={productService.title}
              className="float-left mr-14 mb-12"
              loading="lazy"
            />
            <div>
              <p className="font-base mb-10">{productService.detail}</p>
              <Link
                to=""
                className="bg-MarianBlue hover:bg-MarianShade1 gradient-border text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
        {productService.manufacturerrs && (
          <section>
            <div className="w-fit">
              <h2>Manufacturerrs:</h2>
              <div className="gradient-line"></div>
            </div>
            <ul className="font-medium text-13 flex flex-col sm:flex-row  flex-wrap gap-y-4 gap-x-9 mt-10 mb-20">
              {productService.manufacturerrs.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={`/Detail/${item}.svg`}
                      alt="check icon"
                      loading="lazy"
                      className="pr-3 pt-1"
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        {productService.ListData && <DetailList product={productService.ListData}/>}
        {productService.WhatYouGet && (
          <section>
            <div className="w-fit">
              <h2>What you get:</h2>
              <div className="gradient-line"></div>
            </div>
            <ul className="font-medium text-13 flex flex-col sm:flex-row  flex-wrap gap-y-4 mt-10 mb-20">
              {productService.WhatYouGet.map((item, index) => {
                return (
                  <li key={index} className="flex items-start w-full sm:w-1/2">
                    <img
                      src="/Detail/check-icon.svg"
                      alt="check icon"
                      className="pr-3 pt-1"
                    />
                    <p>
                      <span className="uppercase font-bold">
                        {item.title}:{" "}
                      </span>
                      {item.detail}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
