// LIBRARIES
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const REDUCERS = {
  auth: authReducer,
  user: userReducer,
};

const rootReducer = combineReducers(REDUCERS);

const store = configureStore({
  reducer: REDUCERS,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
