import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import productReducer from "../redux/features/product/productSlice";
import filterReducer from "../redux/features/product/filterSlice";
import categoryReducer from "../redux/features/categoryAndBrand/categoryAndBrandSlice";
import cartReducer from "../redux/features/product/cartSlice";
import checkoutReducer from "../redux/features/product/checkoutSlice";
import couponReducer from "../redux/features/coupon/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    coupon: couponReducer,
  },
});
