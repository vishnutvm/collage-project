import React, { useState } from "react";
import Card from "../../card/Card";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { toast } from "react-toastify";
import {
  createCategory,
  getCategories,
} from "../../../redux/features/categoryAndBrand/categoryAndBrandSlice";

const CreateCategory = ({ reloadCategory }) => {
  const [name, setName] = useState("");

  const { isLoading } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const saveCat = async (e) => {
    e.preventDefault();
    if (name.length < 3) {
      return toast.error("Category name must be at least 3 characters");
    }
    const formData = {
      name,
    };
    try {
      await dispatch(createCategory(formData));
      await dispatch(getCategories());
      setName("");
      reloadCategory();
      toast.success("Category created successfully");
    } catch (error) {
      toast.error(
        error.message || "An error occurred while creating the category"
      );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="--underline"></div>
      <br />
      <div className="--mb2">
        <h3>Create Category</h3>
        <p>
          Use the form to <b>create a category</b>.
        </p>
        <Card cardClass={"card"}>
          <br />
          <form onSubmit={saveCat}>
            <label>Category Name:</label>
            <input
              type="text"
              placeholder="Category name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <div className="--my">
              <button type="submit" className="--btn --btn-primary">
                Save Category
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default CreateCategory;
