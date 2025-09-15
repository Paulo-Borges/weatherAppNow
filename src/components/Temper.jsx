import React from "react";

const Temper = () => {
  return (
    <div className="flex pl-20 mb-6 gap-8">
      <div className="bg-Neutral-600 pr-24 pl-6 py-2 rounded-xl">
        <p className="text-sm text-white/80 mb-3">Feels Like</p>
        <h1 className="text-2xl">64º</h1>
      </div>
      <div className="bg-Neutral-600 pr-24 pl-6 py-2 rounded-xl">
        <p className="text-sm text-white/80 mb-3">Humidity</p>
        <h1 className="text-2xl">46%</h1>
      </div>
      <div className="bg-Neutral-600 pr-24 pl-6 py-2 rounded-xl">
        <p className="text-sm text-white/80 mb-3">Wind</p>
        <h1 className="text-2xl">9 mph</h1>
      </div>
      <div className="bg-Neutral-600 pr-24 pl-6 py-2 rounded-xl">
        <p className="text-sm text-white/80 mb-3">Precipitation</p>
        <h1 className="text-2xl">0 in</h1>
      </div>
    </div>
  );
};

export default Temper;
