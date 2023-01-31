import { createSlice } from "@reduxjs/toolkit";
import products from "../../products.json";

const data = products;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data.products,
    budget: 100000000000,
  },
  reducers: {
    updateCount: (state, action) => {
      const { count, id } = action.payload;

      const product = state.items.find((product) => id === product.id);
      product.count = count;

      let price = 0;
      state.items.map((item) => (price += Number(item.count) * Number(item.productPrice)));

      state.budget = 100000000000 - Number(price);
    },
  },
});

export const { updateCount } = productsSlice.actions;
export default productsSlice.reducer;
