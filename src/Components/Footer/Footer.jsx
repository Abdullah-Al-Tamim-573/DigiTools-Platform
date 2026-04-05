// import { FaFacebook } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="px-4 divide-y footer-parent lg:max-w-[80%] mx-auto mt-3 md:mt-12 lg:mt-17 text-white">
        <div className="container flex flex-col justify-between  py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 text-white">
          {/* logo */}
          <div className="lg:w-1/3 ">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <h2 className="text-xl md:text-3xl font-bold text-white">
                DigiTools
              </h2>
            </a>
            <p className="text-center md:text-left my-1 md:my-3 md:mr-6 text-white">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          {/* Product, Company, Resources and Social Media part */}
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 ">
            {/* Product part */}
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-medium text-[15px] text-white">
                Product
              </h3>
              <ul className="space-y-1 ">
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            {/* Company part */}
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 font-medium text-[15px] text-white">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources part */}
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 font-medium text-[15px] text-white">
                Resources
              </h3>
              <ul className="space-y-1">
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Community
                  </a>
                </li>
                <li>
                  <a className="text-white" rel="noopener noreferrer" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Media part */}
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 font-medium text-[15px] text-white">
                Social media
              </h3>
              <div className="flex justify-start space-x-3">
                <FaFacebook size={24} className="bg-white" />
                <FaSquareXTwitter size={24} className="bg-white" />
                <FaSquareInstagram size={24} className="bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-2 items-center flex-col md:flex-row">
          <p className="py-6 text-sm text-center dark:text-gray-600 text-white">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-5 mb-5 md:mb-0">
                <p className="!text-[#858890]">Privacy Policy</p>
                <p className="!text-[#858890]">Terms of Service</p>
                <p className="!text-[#858890]">Cookies</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
