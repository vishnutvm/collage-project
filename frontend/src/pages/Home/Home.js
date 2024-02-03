import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import HomeInfoBox from "../../components/Home/HomeInfoBox";
import PageHeading from "../../components/Home/PageHeading";
import { productData } from "../../components/Carousel/data";
import CarousalItem from "../../components/Carousel/CarousalItem";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import ProductCategory from "../../components/Home/ProductCategory";

const Home = () => {
  const Products = productData.map((item) => (
    <div key={item.id}>
      <CarousalItem
        url = {item.imageurl}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    </div>
  ));

  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Products"} btnText={"Shop Now >>>"} />
          <ProductCarousel products={Products} />
        </div>
      </section>
      <section className="--bt-grey">
        <div className="container">
          <h3>Categories</h3>
          <ProductCategory />
        </div>
      </section>
    </>
  );
};

export default Home;
