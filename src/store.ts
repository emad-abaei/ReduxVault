import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer
});

export default store;
