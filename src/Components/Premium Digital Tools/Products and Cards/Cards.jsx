import { ShoppingCart } from "lucide-react";


const Cards = ({productCardData}) => {
  return (
    <>
      <section className="border p-5 rounded-xl my-4">
        <h3 className="text-2xl font-bold">Your Cart</h3> 


        {/* adding card section */}
        <section className="flex justify-center">
                      
                      {/* empty card part*/}
                     <div className="flex flex-col gap-3 items-center py-17 ">
                            <ShoppingCart size={35}/>
                            <p>Your card is empty</p>
                     </div>
        </section> 

      </section>
    </>
  );
};

export default Cards;
