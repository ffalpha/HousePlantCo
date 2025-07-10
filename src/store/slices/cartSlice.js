import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (!existing) state.items.push({ ...action.payload, quantity: 1 });
    },
    increment(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrement(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addItem, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;