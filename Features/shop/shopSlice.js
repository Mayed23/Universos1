import { createSlice } from '@reduxjs/toolkit'
import products from '../../Data/products.json'
import categories from '../../Data/categories.json'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products,
    categories,
    categorySeleted: '',
    productIdSelected: '',
    productsFilteredByCategory: [],
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySeleted = action.payload
      state.productsFilteredByCategory = state.products.filter(
        product => product.seanso === action.payload
      )
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    },
  },
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer