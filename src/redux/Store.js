import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import tabReducer from "./slices/tabSlice";
import { TeamReducer } from "./slices/teamSlice";
import { DepartmentReducer } from "./slices/departmentSlice";

const rootReducer = combineReducers({
  tab: tabReducer,
  teams: TeamReducer,
  department: DepartmentReducer,
});

const persistConfig = {
  key: "app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: () => [thunk],
});

export const persistor = persistStore(Store);
export default Store;
