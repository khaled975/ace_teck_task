import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], isLoading: false },

  reducers: {
    
    // ADD PRODUCT TO CART
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload];
      // SHOW NOTIFICATION
      toast.success("Product added to your cart ✔");
    },

    // DELETE PRODUCT FORM THE CART
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      toast.success("Product deleted successfully 😢");
    },
  },
});

export default cartSlice.reducer;
export const { addItem, deleteItem } = cartSlice.actions;
