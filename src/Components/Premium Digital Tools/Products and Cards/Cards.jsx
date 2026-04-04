import { ShoppingCart } from "lucide-react";
import Card from "./Card";
import { toast } from "react-toastify";

const Cards = ({ productCardData, setProductCardData, handleRemoveCardData }) => {
  const total = productCardData.reduce((pre, curr) => {
          return pre + curr.price
  }, 0) 
  return (
    <>
      <section className="shadow-2xl p-5 rounded-xl my-4">
        <h3 className="text-2xl font-bold">Your Cart</h3>

        {/* adding card section */}
        {productCardData.length === 0 ? (
          <section className="flex justify-center">
            {/* empty card part */}
            <div className="flex flex-col gap-3 items-center py-17 ">
              <ShoppingCart size={35} />
              <p>Your card is empty</p>
            </div>
          </section>
        ) : (
          // card data component
          <section className="my-5">
            {productCardData.map((cardData) => (
              <Card handleRemoveCardData={handleRemoveCardData} cardData={cardData}></Card>
            ))}
          </section>
        )}


       
      
      <section className="my-8 p-3 ">
          <div className="flex justify-between items-center p-3">
               <p className="!text-[#627382]">Total</p>
               <p className="font-bold text-xl">${total}</p>
               
          </div>
          <button onClick={() => {
            setProductCardData([])
            toast.success('Checkout Successfully')
          }} className="btn btn-primary !text-[#fff] w-full rounded-4xl">Proceed to Checkout</button>
      </section>
      </section>

      
    </>
  );
};

export default Cards;
