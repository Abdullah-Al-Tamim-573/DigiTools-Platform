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
            <div className="flex gap-2  flex-col md:flex-row md:items-center">
              <button className="btn linier-Blue  font-bold rounded-4xl !text-white text-[18px] py-[21px] px-6">
                Explore Products
              </button>

              <span className="border p-[2px] rounded-full linier-Blue ">
                   
                          <button className="font-bold  btn rounded-full w-full">
                                 <span className="logo linier-Blue flex gap-1 items-center"><Play size={20} color="#7d4bf8"/>Watch Demo</span>
                          </button>
                  
              </span>

              




             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
