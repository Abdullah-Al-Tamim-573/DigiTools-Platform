import { Suspense, useState } from "react";
import Products from "./Products and Cards/Products";
import Cards from "./Products and Cards/Cards";


let productCardDatasPromise = fetch('/ProductCards.json').then(res => res.json());


const PremiumDigitalTools = ({handleProductCardData, productCardData }) => {

  let [toggleProductAndCardSection, setToggleProductAndCardSection] = useState('Products')
  
  return (
    <>
      <section className="flex flex-col gap-3 md:gap-5 items-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="!text-[#627382] text-center">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className="px-1 py-1 rounded-full btn-outline inline-block border">

          <button onClick={() => setToggleProductAndCardSection('Products')} className={`btn  rounded-full ${toggleProductAndCardSection === 'Products' && 'font-bold text-[17px] linier-Blue !text-white'}`}>Products</button>

          <button onClick={() => setToggleProductAndCardSection('Cart')} 
          className={`btn rounded-full ${toggleProductAndCardSection === 'Cart' && 'font-bold text-[17px] linier-Blue !text-white'}`}>Cart (2)</button>

          
        </div>
      </section>
      <br /> <br />
      {/* products container */}
      <section>
               <Suspense fallback={<h3>Products data loading............</h3>}>
               {
                  toggleProductAndCardSection === 'Products'? <Products productCardDatasPromise={productCardDatasPromise} handleProductCardData={handleProductCardData}></Products> : 
                  <Cards productCardData={productCardData}></Cards>
               }
                                  
               </Suspense>
               
      </section>
    </>
  );
};

export default PremiumDigitalTools;
