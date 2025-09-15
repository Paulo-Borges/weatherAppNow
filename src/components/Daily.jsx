import React from "react";
import Snow from "../../public/icon-snow.webp";

const Daily = () => {
  return (
    <div>
      <h1 className="ml-20">Daily forecast</h1>
      <div className="flex ml-20 gap-4 ">
        <div className=" bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
        <div className="bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
        <div className="bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
        <div className="bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
        <div className="bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
        <div className="bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
        <div className="bg-Neutral-600 rounded-2xl w-17">
          <p>Tue</p>
          <img src={Snow} alt="chuva" className="w-10 h-10" />
          <div className="flex">
            <span>68º</span>
            <span>57º</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
