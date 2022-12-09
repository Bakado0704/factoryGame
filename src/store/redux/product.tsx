import { createSlice } from "@reduxjs/toolkit";
import { BackgroundType } from "../../types/background";

const changeProductSlice = createSlice({
  name: "changeProduct",
  initialState: {
    product: {
      default: [
        { before: require("../../assets/product/product1-normal-first.png") },
        { before: require("../../assets/product/product1-normal-second.png") },
        { before: require("../../assets/product/product1-normal-third.png") },
      ],
      bonus: [
        { before: require("../../assets/product/product1-gold-first.png") },
        { before: require("../../assets/product/product1-gold-second.png") },
        { before: require("../../assets/product/product1-gold-third.png") },
      ],
      style: {width: 200, height: 80},
    },
  },
  reducers: {
    changeProduct: (state, action) => {
      state.product = action.payload.product;
    },
  }
});

export const changeProduct = changeProductSlice.actions.changeProduct;
export default changeProductSlice.reducer;
