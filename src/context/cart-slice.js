import { createSlice, configureStore } from "@reduxjs/toolkit";

const localStorageItems = JSON.parse(localStorage.getItem("Cart Items")) || [];
const localStorageAmount =
  JSON.parse(localStorage.getItem("Total Amount")) || 0;
const localStoragePrice = JSON.parse(localStorage.getItem("Total Price")) || 0;

const initialValues = {
  items: localStorageItems,
  totalAmount: localStorageAmount,
  totalPrice: localStoragePrice,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialValues,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount++;
      state.buttonIsShown = true;
      state.totalPrice = state.totalPrice + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount--;
      state.totalPrice = state.totalPrice - existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
