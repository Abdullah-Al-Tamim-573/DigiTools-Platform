
import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import PremiumDigitalTools from "./Components/Premium Digital Tools/PremiumDigitalTools";
import StatusBar from "./Components/StatusBar/StatusBar";

let productCardDatasPromise = fetch('/ProductCards.json').then(res => res.json());


function App() {

  

  return (
    <>
        
        <section className="lg:max-w-[80%] mx-auto">
                  <Navbar ></Navbar>
                  <Banner></Banner>
        </section>

        <section className="linier-Blue py-5">
                   <StatusBar></StatusBar>
        </section>
        
        <section className="lg:max-w-[80%] mx-auto mt-3 md:mt-12 lg:mt-17">
              <Suspense fallback={<h3>Loading Product Datas...........</h3>}>
                    <PremiumDigitalTools productCardDatasPromise={productCardDatasPromise}></PremiumDigitalTools>
              </Suspense>
        </section>
    
    </>
  );
}

export default App;
