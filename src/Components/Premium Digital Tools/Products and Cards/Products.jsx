import { use } from "react";


const Products = ({productCardDatasPromise}) => {
    let productCardDatas = use(productCardDatasPromise);
    console.log(productCardDatas)
    return (
        <>
            
        </>
    );
};

export default Products;