import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      user: 'userLogged',
      updatedAt: Date.now().toLocaleString(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const itemInCart = state.value.items.find(
        (itemInCart) => itemInCart.id === item.id && itemInCart.size === item.size
      )
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.value.items.push({ ...item, quantity: 1 });
      }

      state.value.total = state.value.items.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.value.items = state.value.items.filter(
        (itemInCart) => !(itemInCart.id === item.id && itemInCart.size === item.size)
      );

      state.value.total = state.value.items.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.quantity,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const { id, size } = action.payload;
      const item = state.value.items.find((item) => item.id === id && item.size === size);
      if (item) {
        item.quantity += 1;
      }

      state.value.total = state.value.items.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.quantity,
        0
      );
    },
    decreaseQuantity: (state, action) => {
      const { id, size } = action.payload;
      const item = state.value.items.find((item) => item.id === id && item.size === size);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.value.items = state.value.items.filter((item) => !(item.id === id && item.size === size));
      }

      state.value.total = state.value.items.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.quantity,
        0
      );
    },
  },
});


export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer