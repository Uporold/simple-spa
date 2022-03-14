import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./user/user";
import appReducer from "./app/app";

export const store = configureStore({
  reducer: {
    users: userReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export type AppThunk<R = void> = ThunkAction<R, RootState, unknown, AnyAction>;

export const useStoreDispatch = () => useDispatch<AppDispatch>();
