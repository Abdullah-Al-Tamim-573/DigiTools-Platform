import React from "react";
import "../../App.css";
import userImage from "../../assets/user.png";
import chooseProductsImg from '../../assets/package.png'
import startCreatingImg from '../../assets/rocket.png'

const GetStarted = () => {
  return (
    <>
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
        Get Started in 3 Steps
      </h2>
      <p className="!text-[#627382] mb-3">
        Start using premium digital tools in minutes, not hours.
      </p>
      
      <div className="box grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* 1st box */}
        <div className="card w-87 md:w-96 bg-base-100 card-xl shadow-sm relative border">
          <span className="!text-[#fff] linier-Blue flex justify-center items-center w-10  p-2 rounded-full absolute top-5 right-3">
            01
          </span>
          <div className="card-body pt-20">
            <div className="border p-4 rounded-full w-fit mx-auto">
              <img className="w-fit" src={userImage} alt="user image" />
            </div>
            <h4 className="text-[18px] md:text-xl lg:text-2xl font-bold">
              Create Account
            </h4>
            <p className="!text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        {/* 2nd box */}
        <div className="card  w-87 md:w-96 bg-base-100 card-xl shadow-sm relative border">
          <span className="!text-[#fff] linier-Blue flex justify-center items-center w-10  p-2 rounded-full absolute top-5 right-3">
            02
          </span>
          <div className="card-body pt-20">
            <div className="border p-4 rounded-full w-fit mx-auto">
              <img className="w-fit" src={chooseProductsImg} alt="Choose Products img" />
            </div>
            <h4 className="text-[18px] md:text-xl lg:text-2xl font-bold">
              Choose Products
            </h4>
            <p className="!text-[#627382]">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
        </div>
        {/* 3rd box */}
        <div className="card  w-87 md:w-96 bg-base-100 card-xl shadow-sm relative border">
          <span className="!text-[#fff] linier-Blue flex justify-center items-center w-10  p-2 rounded-full absolute top-5 right-3">
            03
          </span>
          <div className="card-body pt-20">
            <div className="border p-4 rounded-full w-fit mx-auto">
              <img className="w-fit" src={startCreatingImg} alt="Start Creating Img" />
            </div>
            <h4 className="text-[18px] md:text-xl lg:text-2xl font-bold">
              Start Creating
            </h4>
            <p className="!text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
