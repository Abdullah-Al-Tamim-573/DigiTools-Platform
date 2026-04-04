import { use, useState } from "react";
// import cardImg from '../../../assets/products/social-media.png'
import Product from "./product";

const Products = ({ productCardDatasPromise }) => {
  let productCardDatas = use(productCardDatasPromise);
    const [showAddToCardTextInProductCardBtn, setShowAddToCardTextInProductCardBtn] = useState('')


  return (
    <>
      <section className="grid gap-5  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productCardDatas.map((product, i) => (
          <Product key={i} product={product} setShowAddToCardTextInProductCardBtn={setShowAddToCardTextInProductCardBtn} showAddToCardTextInProductCardBtn={showAddToCardTextInProductCardBtn}></Product>
        ))}
      </section>
    </>
  );
};

export default Products;
