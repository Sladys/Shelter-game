import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./slices/cardsSlice";
import apocalypsesReducer from "./slices/apocalypsesSlice";
import bunkersReducer from "./slices/bunkersSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    apocalypses: apocalypsesReducer,
    bunkers: bunkersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
