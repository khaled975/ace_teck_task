import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../api/customAxios";

// GET DATA FORM API
export const getProducts = createAsyncThunk(
  "products/getProducts",
  (arrgs, thunkApi) => {
    try {
      const data = customAxios();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: { products: null, isLoading: false },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data.slice(1, 12);
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
