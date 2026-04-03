import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import StatusBar from "./Components/StatusBar/StatusBar";

function App() {
  return (
    <>
        
        <section className="lg:max-w-[80%] mx-auto">
                  <Navbar></Navbar>
                  <Banner></Banner>
        </section>

        <section className="linier-Blue py-5">
                   <StatusBar></StatusBar>
        </section>
        <br /> <br />
    
    </>
  );
}

export default App;
