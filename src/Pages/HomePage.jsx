import React from "react";
import DiscountSection from "../Components/Discounts";

import Slider from "../Components/Slider";
import NewArrivals from "../Components/NewArrival";
import PopularToys from "../Components/Popular";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto pt-15">

        {/* slider section */}
   <Slider></Slider>

     {/* popular section */}
    <PopularToys></PopularToys>

     {/* New Arrival section */}
     <NewArrivals></NewArrivals>

     {/* Discount section */}
     <DiscountSection></DiscountSection>
      
    </div>
  );
};

export default HomePage;
