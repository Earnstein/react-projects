import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};

const toDecimal = (number) => {
  return (Math.round(number * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.items.find((p) => p._id === item._id);

      if (existItem) {
        state.items = state.items.map((p) =>
          p._id === existItem._id ? item : p
        );
      } else {
        state.items = [...state.items, item];
      }

      // Recalculate prices based on state.items
      state.itemsPrice = toDecimal(
        state.items.reduce(
          (increment, item) => increment + item.price * item.qty,
          0
        )
      );
      state.shippingPrice = toDecimal(state.itemsPrice > 100 ? 0 : 10);
      state.taxPrice = toDecimal(Number((0.2 * state.itemsPrice).toFixed(2)));
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);
    },
  },
});

export default cartSlice.reducer;
export { cartSlice };
export const { addToCart } = cartSlice.actions;
