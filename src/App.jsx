import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import PremiumDigitalTools from "./Components/Premium Digital Tools/PremiumDigitalTools";
import StatusBar from "./Components/StatusBar/StatusBar";
import { toast } from "react-toastify";
import GetStarted from "./Components/Get Started in 3 Steps/GetStarted";
import SimpleTransparentPricing from "./Components/Simple Transparent Pricing/SimpleTransparentPricing";

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
      <section className="lg:max-w-[80%] mx-auto mt-15 md:mt-12 lg:mt-25 flex gap-4 flex-col text-center my-5">
             <GetStarted></GetStarted>
      </section>

      <section className="lg:max-w-[80%] mx-auto mt-15 md:mt-12 lg:mt-25  flex flex-col gap-4">
              <SimpleTransparentPricing></SimpleTransparentPricing>
      </section>
      
    </>
  );
}

export default App;
