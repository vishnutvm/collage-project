import React from "react";
import { useNavigate } from "react-router-dom";

const Category = (props) => {

    const {title , image} = props;
    const navigate = useNavigate()
  return (
    <div className="category">
      <h3 >{title}</h3>
      <img src={image} />
      <button className="--btn" onClick={()=> navigate("/shop")}>Shop Now</button>
    </div>
  );
};

export default Category;
