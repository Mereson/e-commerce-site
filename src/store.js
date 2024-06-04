import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/product/productSlice"
import { productsApi } from "./features/product/productsApi"
import {
  loadState,
  sessionStorageMiddleware,
} from "./features/product/sSMiddleware"

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    product: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      sessionStorageMiddleware
    ),
  preloadedState,
})
