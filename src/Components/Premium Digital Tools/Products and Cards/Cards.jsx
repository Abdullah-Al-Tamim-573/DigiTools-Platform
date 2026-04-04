import { ShoppingCart } from "lucide-react";
import Card from "./Card";

const Cards = ({ productCardData, setProductCardData }) => {
  // console.log(productCardData)
  return (
    <>
      <section className="border p-5 rounded-xl my-4">
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
          <section>
            {productCardData.map((cardData) => (
              <Card cardData={cardData}></Card>
            ))}
          </section>
        )}
      </section>

      {/* adding product price count and proccess to checout section */}
      
      <section className="my-10 p-3 border">
          <div className="flex justify-between items-center p-3">
               <p className="!text-[#627382]">Total</p>
               <p className="font-bold text-xl">$78</p>
               
          </div>
          <button onClick={() => setProductCardData([])} className="btn btn-primary !text-[#fff] w-full rounded-4xl">Proceed to Checkout</button>
      </section>
    </>
  );
};

export default Cards;
