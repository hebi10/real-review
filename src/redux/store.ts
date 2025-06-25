import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import reviewReducer from "./reviewSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    review: reviewReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
