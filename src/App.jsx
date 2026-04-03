

import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import PremiumDigitalTools from "./Components/Premium Digital Tools/PremiumDigitalTools";
import StatusBar from "./Components/StatusBar/StatusBar";




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
              
                    <PremiumDigitalTools></PremiumDigitalTools>
              
        </section>
    
    </>
  );
}

export default App;
