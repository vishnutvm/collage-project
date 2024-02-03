import React from "react";
import "./ProductCategory.scss";
import { useNavigate } from "react-router-dom";
import Category from "./Category";

const ProductCategory = () => {
  const categories = [
    {
      id: 1,
      title: "Gadgets",
      image: "https://i.ibb.co/5GVkd3m/c1.jpg",
    },
    {
      id: 2,
      title: "Womens Fashion",
      image: "https://i.ibb.co/nQKLjrW/c2.jpg",
    },
    {
      id: 3,
      title: "Sport Sneakers",
      image: "https://i.ibb.co/fNkBYgr/c3.jpg",
    },
  ];

  return <div className="categories">
    {categories.map((cat)=>(
        <div key ={cat.id}>
            <Category title = {cat.title} image = {cat.image} />
        </div>
    ))}
  </div>;
};

export default ProductCategory;
