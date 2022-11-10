import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, actions) => {
      console.log(actions);
      if (
        state.cartItems.find((item) => item.uid === actions.payload) == null
      ) {
        state.cartItems = [
          ...state.cartItems,
          { uid: actions.payload, quantity: 1 },
        ];
      } else {
        state.cartItems.map((item, index) => {
          if (item.uid === actions.payload) {
            state.cartItems[index] = {
              ...state.cartItems[index],
              quantity: state.cartItems[index].quantity + 1,
            };
            
          } else {
            return item;
          }
        });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
