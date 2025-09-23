import { configureStore } from '@reduxjs/toolkit'
import shippingBoxReducer from './slices/shippingboxSlice'

export const store = configureStore({
  reducer: {
    shippingList: shippingBoxReducer,
  }
})