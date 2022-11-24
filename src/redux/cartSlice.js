import { createSlice } from '@reduxjs/toolkit';

const localStored = JSON.parse(localStorage.getItem('cart') || '[]');

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStored,
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
            return (state.cartItems[index] = {
              ...state.cartItems[index],
              quantity: state.cartItems[index].quantity + 1,
            });
          } else {
            return item;
          }
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    increaseCount: (state, actions) => {
      state.cartItems.map((item, index) => {
        if (item.uid === actions.payload) {
          return (state.cartItems[index] = {
            ...state.cartItems[index],
            quantity: state.cartItems[index].quantity + 1,
          });
        } else {
          return item;
        }
      });
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    decreaseCount: (state, actions) => {
      state.cartItems.map((item, index) => {
        if (item.uid === actions.payload) {
          if (state.cartItems[index].quantity === 1) {
            return (state.cartItems = state.cartItems.filter(
              (e) => e.uid !== actions.payload
            ));
          } else {
            return (state.cartItems[index] = {
              ...state.cartItems[index],
              quantity: state.cartItems[index].quantity - 1,
            });
          }
        } else {
          return item;
        }
      });
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    setCount: (state, actions) => {
      state.cartItems.map((item, index) => {
        if (item.uid === actions.payload.uid) {
          return (state.cartItems[index] = {
            ...state.cartItems[index],
            quantity: actions.payload.count,
          });
        } else {
          return item;
        }
      });
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeItem: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (e) => e.uid !== actions.payload
      );
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
  },
});

export const {
  clearCart,
  addItem,
  increaseCount,
  decreaseCount,
  setCount,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
