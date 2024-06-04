import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  cart: [],
  productCount: 0,
  heartCount: 0,
  total: 0,
  isLoading: true,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      state.isLoading = false
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cart = state.cart.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      const cartItem = state.cart.find((item) => item.id == payload)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cart.find((item) => item.id == payload)
      if (cartItem.amount !== 1) {
        cartItem.amount = cartItem.amount - 1
      }
    },
    addToCart: (state, action) => {
      const cartItem = action.payload
      if (!state.cart.some((item) => item.id === cartItem.id)) {
        state.cart.push({ id: cartItem.id, item: cartItem, amount: 1 })
      }
    },
    calculateTotal: (state) => {
      let total = 0
      state.cart.forEach((cartItem) => {
        total += cartItem.amount * cartItem.item.price
      })
      state.total = total
    },
  },
})

export const {
  setProducts,
  removeItem,
  increase,
  decrease,
  addToCart,
  calculateTotal,
} = productSlice.actions

export default productSlice.reducer
