// store.ts
import { combineReducers } from "redux";
import UsersModule from "./modules/users";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  users: UsersModule.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
