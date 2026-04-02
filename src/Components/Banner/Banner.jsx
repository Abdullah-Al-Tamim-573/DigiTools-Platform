import { Play } from "lucide-react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="hero  my-5 md:my-15 lg:my-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-30  gap-4">
          <img
            src={bannerImg}
            className="mx-w-[80%] lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[70px] font-bold leading-12 md:leading-15 lg:leading-20">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 !text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex gap-2 items-center">
              <button className="btn linier-Blue  font-bold rounded-4xl !text-white text-[18px] py-[21px] px-6">
                Explore Products
              </button>
              
                <button className="font-bold linier-Blue logo btn-gradient-border"><Play size={20}/> Watch Demo</button>
                   
              {/* <span className="btn  py-5 px-5 rounded-4xl linier-Blue">
                    <span className="flex items-center gap-1 bg-white py-5 px-10 rounded-4xl">
                            <Play size={20}/>
                <button className="font-bold linier-Blue logo"> Watch Demo</button>
                    </span>
              </span> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
