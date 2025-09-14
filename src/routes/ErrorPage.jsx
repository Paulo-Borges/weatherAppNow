import React from "react";
import Error from "../../public/icon-error.svg";
import Retry from "../../public/icon-retry.svg";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div className="max-w-[1440px] bg-Blue-700">
      <Navbar />
      <div className="flex flex-col justify-center items-center ">
        <img src={Error} alt="error" className="m-auto mb-4" />
        <h1 className="text-4xl mb-3">Something went wrong</h1>
        <p className="text-sm text-white/80">
          we couldn´t connect tothe server(API error). Please try
        </p>
        <p className="text-sm text-white/80 mb-3">again in a few moments</p>
        <button className="flex items-center gap-2 bg-Neutral-600 px-2 py-0.5 rounded cursor-pointer mb-8">
          <img src={Retry} alt="logo" className="w-3 h-3" />
          <span className="text-sm">Retry</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
