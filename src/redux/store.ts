import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import bookReducer from "./features/book/bookSlice";
import userReducer from "./features/user/userSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    book: bookReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// function userReducer(state: unknown, action: AnyAction): unknown {
//   throw new Error("Function not implemented.");
// }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
