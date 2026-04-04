import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import PremiumDigitalTools from "./Components/Premium Digital Tools/PremiumDigitalTools";
import StatusBar from "./Components/StatusBar/StatusBar";
import { toast } from "react-toastify";

function App() {
  let [productCardData, setProductCardData] = useState([]);

  let handleProductCardData = (cardObj) => {

    let matchesData = productCardData.filter(cardData => cardData.id === cardObj.id)

     if (matchesData.length === 0) {
    setProductCardData([...productCardData, cardObj]);
  }   
  }

  const handleRemoveCardData = (cardObj) => {
          let removeItems = productCardData.filter(item => item.id !== cardObj.id)
          setProductCardData(removeItems)
          toast.success('Delete Product SuccessFully')
  }


  return (
    <>
      <section className="lg:max-w-[80%] mx-auto">
        <Navbar productCardData={productCardData}></Navbar>
        <Banner></Banner>
      </section>

      <section className="linier-Blue py-5">
        <StatusBar></StatusBar>
      </section>

      <section className="lg:max-w-[80%] mx-auto mt-3 md:mt-12 lg:mt-17">
        <PremiumDigitalTools
        handleRemoveCardData={handleRemoveCardData}
          setProductCardData={setProductCardData}
          productCardData={productCardData}
          handleProductCardData={handleProductCardData}
          
        ></PremiumDigitalTools>
      </section>
      
    </>
  );
}

export default App;
