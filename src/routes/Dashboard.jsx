import React from "react";
import Sunny from "../../public/icon-sunny.webp";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-between bg-container ml-20 rounded-2xl p-8 mb-6">
      <div>
        <h1 className="font-semibold text-2xl">Berlin, Germany</h1>
        <p className="text-white/70">Tuesday, Aug 5, 2025</p>
      </div>
      <div className="flex justify-center items-center gap-8">
        <img src={Sunny} alt="sol" className="w-20 h-20" />
        <span className="text-7xl">68º</span>
      </div>
    </div>
  );
};

export default Dashboard;
