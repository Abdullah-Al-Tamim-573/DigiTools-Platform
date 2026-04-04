import { useState } from "react";
import "../../../App.css";

const Product = ({ product, showAddToCardTextInProductCardBtn, setShowAddToCardTextInProductCardBtn}) => {


   const handleAddToCard = (id, name) => {
      setShowAddToCardTextInProductCardBtn(name);
      
   }
       console.log(showAddToCardTextInProductCardBtn)
  let { id, name, description, price, icon, alt, tag, features } = product;

  return (
    <>
      <div className="card w-[85%] justify-items-center mx-auto md:w-75 lg:w-96 bg-base-100 shadow-sm relative border ">
        <div className="card-body">
          
           
                 <span className={`badge badge-xs  absolute top-3  right-3 
                 ${tag==='Best Seller'? '!text-[#BB4D00] bg-[#fef3c6]': tag==='Popular'? '!text-[#6b2bf8] bg-[#e1e7ff]': '!text-[#0A883E] bg-[#dbfce7]'}
                   text-[14px] font-medium px-4 py-3 rounded-4xl`}>
                    {tag}
               </span>
                
          <span className="border p-2 rounded-full w-fit">
            <img src={icon} alt={alt} />
          </span>
          <div className="flex flex-col gap-2 mt-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{description}</p>
            <span className="text-xl">${price}/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feture, i) => {
              return (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feture}</span>
                </li>
              );
            })}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
          </ul>
          <div className="mt-6">
            <button onClick={() => handleAddToCard(id, name)} className={`btn !text-white  btn-block 
              ${showAddToCardTextInProductCardBtn === name? 'bg-[green]': 'linier-Blue'}
              rounded-4xl`}>
              {
                 showAddToCardTextInProductCardBtn === name? 'Add To Card': 'Buy Now'
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
