import React from "react";

const Slider = () => {
  return (
    <div className="w-1/2 mx-auto">
      <div className="carousel  h-[350px] rounded-full">
        <div id="item1" className="carousel-item w-full">
          
          <img
            src="https://i.ibb.co.com/TxdQjz5t/Wooden-Train-Set.jpg"
            className="w-full "
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/ybKpm1J/Mini-Drone-Toy.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/x8SrnXGc/Lego-Classic-Bricks.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/vvBwY73v/lego-robo.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
