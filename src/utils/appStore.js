import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
    // this reducer is responsible to modify this appStore & this reducer is combination of different store.
    reducer: {
        cart: cartReducer,
        //If we have userReducer then we have to put userReducer also.
    },
});

export default appStore;