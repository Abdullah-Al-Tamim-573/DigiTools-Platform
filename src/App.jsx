import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
        
        <section className="lg:max-w-[80%] mx-auto">
                  <Navbar></Navbar>
                  <Banner></Banner>
        </section>
    
    </>
  );
}

export default App;
