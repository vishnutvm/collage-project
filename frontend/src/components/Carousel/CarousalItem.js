import React from "react";
// import styles from "./Carousel.module.scss";
import "./Carousel.scss"
import { Link } from "react-router-dom";
import { shortenText } from "../../utils/utils";

const CarousalItem = ({ url,name,price,description }) => {
  return (
    <div className="carousalItem">
      <Link to="/product-details">
        <img className="productImage" src={url} alt="product" />
        <p className="price">{`€ ${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className="--mb">{shortenText(description, 26)}</p>
      </Link>
      <button className="--btn --btn-primary">Add to cart</button>
    </div>
  );
};

export default CarousalItem;
