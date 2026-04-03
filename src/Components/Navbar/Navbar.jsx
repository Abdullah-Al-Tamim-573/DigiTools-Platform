import { useState } from 'react';
import '../../../src/App.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                {/* <button className="btn hidden md:inline-flex rounded-4xl"></button> */}
                <a className="font-semibold">LogIn</a>
              </li>
              <li>
                <a className="font-semibold">Products</a>
              </li>
              <li>
                <a className="font-semibold">Features</a>
              </li>
              <li>
                <a className="font-semibold">Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a className="font-semibold">FAQ</a>
              </li>
              
            </ul>
          </div>
          <h2 className="text-xl md:text-3xl font-bold logo linier-Blue">DigiTools</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <li>
              <a className="font-semibold">Products</a>
            </li>
            <li>
              <a className="font-semibold">Features</a>
            </li>
            <li>
              <a className="font-semibold">Pricing</a>
            </li>
            <li>
              <a className="font-semibold">Testimonials</a>
            </li>
            <li>
              <a className="font-semibold">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />{" "}
          </svg>
          <button onClick={() => setToggle(false)} className={`btn  rounded-4xl   ${toggle || ' linier-Blue shadow-lg !text-white'}`}>Get Started</button>
          <button onClick={() => setToggle(true)} className={`btn hidden md:inline-flex rounded-4xl    ${toggle && ' !text-white linier-Blue'}`}>LogIn</button>
          



        </div>
      </nav>
    </>
  );
};

export default Navbar;
