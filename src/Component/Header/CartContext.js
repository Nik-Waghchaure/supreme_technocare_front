import React, { createContext, useContext, useReducer } from "react";

// Create the cart context
const CartContext = createContext();

// Create a reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":let newcart = []
      for (var i = 0; i < state.cart.length; i++) {
        if ( i !== action.payload.id) {
          newcart.push(state.cart[i]);
        }
      }
      return {
        cart: newcart,
      };
      default:
      return state;
  }
};

// Create a CartProvider component to wrap your app
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to access the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}