import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Facets.css";
import Analytics from "../Analytics/Analytics";
import AssetCreation from "../AssetCreation/AssetCreation";
import Distribution from "../Distribution/Distribution";
const Facets = () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <h1 className="font-bold text-green-700 text-center text-xl mt-20 mb-6 lg:mt-20 lg:mb-10 lg:text-4xl">
        The 3 Facets To Appreciation
      </h1>
      <div className="facets max-w-screen-xl mx-auto">
        <Swiper navigation={true} pagination={true}>
          <SwiperSlide>
            <Analytics />
          </SwiperSlide>
          <SwiperSlide>
            <AssetCreation />
          </SwiperSlide>
          <SwiperSlide>
            <Distribution />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Facets;
