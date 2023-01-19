import { ImageSourcePropType } from "react-native";

export type state = {
  nextProduct: { before: ImageSourcePropType }[];
  centerProduct: { before: ImageSourcePropType }[];
  failureProduct: { before: ImageSourcePropType }[];
};

const initialState: state = {
  nextProduct: [
    { before: require("../../assets/product/product1-normal-first.png") },
    { before: require("../../assets/product/product1-normal-second.png") },
    { before: require("../../assets/product/product1-normal-third.png") },
  ],

  centerProduct: [
    { before: require("../../assets/product/product1-normal-first.png") },
    { before: require("../../assets/product/product1-normal-second.png") },
    { before: require("../../assets/product/product1-normal-third.png") },
  ],

  failureProduct: [
    { before: require("../../assets/product/product1-normal-failure.png") },
  ]
};

export default initialState;
