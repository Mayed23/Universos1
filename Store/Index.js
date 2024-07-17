import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice.js'
import cartReducer from '../Features/cart/cartSlice'
import shopReducer from '../Features/shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../Services/ShopServices.js'
import { authApi } from '../Services/AuthService'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
   getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
})

setupListeners(store.dispatch)