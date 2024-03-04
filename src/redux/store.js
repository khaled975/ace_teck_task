import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        products:productsSlice,
        cart:cartSlice
    },
    // TO SOLVE PROBLEM OF A non-serializable value
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),

})


export default store