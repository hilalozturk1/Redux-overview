import { createSlice } from "@reduxjs/toolkit";
import products from "../../products.json";

const data = products.products;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    budget: 100000000000,
  },
  reducers: {},
});

export default productsSlice.reducer;
