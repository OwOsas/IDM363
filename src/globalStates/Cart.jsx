import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItemNumber: 0,
  cartItems: [{}],
});

export const CartContextProvider = ({ children }) => {
  const setUser = () => {
    // this will be how we update the user state
  };

  const initialState = {
    cartItemNumber: 0,
    cartItems: [{}],
  };

  const [state, setState] = useState(initialState);

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export default CartContext;
