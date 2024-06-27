import { configureStore } from "@reduxjs/toolkit";
import apocalypsesReducer from "./slices/apocalypsesSlice";
import bunkersReducer from "./slices/bunkersSlice";
import gameReducer from "./slices/gameSlice";
import gameMenuReducer from "./slices/gameMenuSlice";
import playerCardsReducer from "./slices/playerCardsSlice";

const store = configureStore({
  reducer: {
    apocalypses: apocalypsesReducer,
    bunkers: bunkersReducer,
    game: gameReducer,
    gameMenu: gameMenuReducer,
    playerCards: playerCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
