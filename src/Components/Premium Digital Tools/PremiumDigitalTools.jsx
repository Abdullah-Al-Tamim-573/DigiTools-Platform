import { use } from "react";


const PremiumDigitalTools = ({productCardDatasPromise}) => {

  let productCardData = use(productCardDatasPromise)
  console.log(productCardData)
  
  return (
    <>
      <section className="flex flex-col gap-3 md:gap-5 items-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="!text-[#627382]">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className="px-1 py-1 rounded-full btn-outline inline-block border">
          <button className="btn bg-amber-400 rounded-full font-bold text-[17px] linier-Blue !text-white">Products</button>
          <button className="btn  rounded-full">Cart (2)</button>
        </div>
      </section>
      <br /> <br />
    </>
  );
};

export default PremiumDigitalTools;
