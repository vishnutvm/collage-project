import React from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./data";
import CarousalItem from "./CarousalItem";


const ProductCarousel = ({products}) => {

  return (
    <div>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        customTransition="all .5"
        transitionDuration={500}
      >
        {products}
        </Carousel>
    </div>
  );
};

export default ProductCarousel;
