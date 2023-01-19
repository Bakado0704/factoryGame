import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { ImageSourcePropType } from "react-native";

const ProductRedux = createSlice({
  name: "ProductRedux",
  initialState,
  reducers: {
    changeNextProduct: (state, action: PayloadAction<{before: ImageSourcePropType}[]>) => {
      state.nextProduct = action.payload;
    },
    changeCenterProduct: (state, action: PayloadAction<{before: ImageSourcePropType}[]>) => {
      state.centerProduct = action.payload;
    },
    changeFailureProduct: (state, action: PayloadAction<{before: ImageSourcePropType}[]>) => {
      state.failureProduct = action.payload;
    }
  },
});

export const changeNextProduct = ProductRedux.actions.changeNextProduct;
export const changeCenterProduct = ProductRedux.actions.changeCenterProduct;
export const changeFailureProduct = ProductRedux.actions.changeFailureProduct;
export default ProductRedux.reducer;