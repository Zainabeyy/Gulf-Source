type DetailListProps = {
  product: {
    name:string;
    description?:string;
    [key: string]: string[] | string | undefined;
  }[];
};

export default function DetailList({ product }: DetailListProps) {
  
  if (!product || !Array.isArray(product)) {
    console.log("Product data in DetailList:", product);
    console.error("Invalid product data:", product);
    return <p>No product data available.</p>;
  }

  return (
    <>
      {product.map((item, index) => {
        const codedName = item.name.replace(/\s+/g, ""); 
        const services = item[codedName]; 

        
        if (!services || !Array.isArray(services)) {
          console.error(`Missing or invalid services for: ${item.name}`);
          return null;
        }

        return (
          <section key={index}>
            <div className="w-fit">
              <h2>{item.name}:</h2>
              <div className="gradient-line"></div>
            </div>
            {item.description !== undefined && <p>{item.description}</p>}
            <ul className="uppercase font-bold text-13 flex flex-col sm:flex-row sm:flex-wrap gap-y-4 my-10">
              {services.map((service, serviceIndex) => (
                <li key={serviceIndex} className="flex items-start w-full sm:w-1/2">
                  <img
                    src={codedName === "materials" ? "/Detail/arrow-icon.svg" : "/Detail/check-icon.svg"}
                    alt="check icon"
                    className={codedName === "materials" ? "pr-3 pt-3" : "pr-3 pt-1"}
                  />
                  <p>{service}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
