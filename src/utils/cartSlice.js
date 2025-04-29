import { createSlice } from "@reduxjs/toolkit";
import { version } from "react";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // items: ['burger','pizza']
        items: []
    },
    reducers:{ // It has multiple reducers
        // Dispatch(Action) and function is reducer fn() it takes two parameter 1st is state and 2nd is action it will modify the state by action
        
        // come like this {payload:'cart Item'} and when you write action.payload it will give you cart item.
        addItem: (state, action) => {
            // mutating state over here but in older redux is probihited
            state.items.push(action.payload);

            // In older version of redux we did earlier bcz redux told don't mutate state.
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
        }, 
    },

});

// Exporting Actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// Exporting Reducers
export default cartSlice.reducer;