import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardInfo, CardsInfo } from "../../types/types";
import {
  generateNewCardInfo,
  generateNewValueForKey,
  getRandomElement,
} from "../../utils";

interface PlayerCardsState {
  playerCards: CardInfo[];
}

const initialState: PlayerCardsState = {
  playerCards: [],
};

export const playerCardsSlice = createSlice({
  name: "playerCards",
  initialState,
  reducers: {
    updatePlayerCards: (state, action: PayloadAction<CardInfo[]>) => {
      state.playerCards = action.payload;
    },
    updateCardProperty: (
      state,
      action: PayloadAction<{ index: number; key: keyof CardInfo }>,
    ) => {
      const { index, key } = action.payload;

      state.playerCards = state.playerCards.map((card, i) =>
        i === index ? { ...card, ...generateNewCardInfo(key) } : card,
      );
    },
    swapCardProperty: (
      state,
      action: PayloadAction<{
        index1: number;
        index2: number;
        property: keyof CardInfo;
      }>,
    ) => {
      const { index1, index2, property } = action.payload;

      const temp = state.playerCards[index1][property];
      state.playerCards[index1][property] = state.playerCards[index2][property];
      state.playerCards[index2][property] = temp;
    },
    updateAllCardsProperty: (state, action: PayloadAction<keyof CardInfo>) => {
      const key = action.payload;

      state.playerCards = state.playerCards.map((card) => ({
        ...card,
        [key]: generateNewValueForKey(key),
      }));
    },
    initializePlayerCards: (
      state,
      action: PayloadAction<{ cardsInfo: CardsInfo; numOfCards: number }>,
    ) => {
      const { cardsInfo, numOfCards } = action.payload;
      state.playerCards = Array.from({ length: numOfCards }, () =>
        getRandomElement(cardsInfo),
      );
    },
  },
});

export const {
  updatePlayerCards,
  updateCardProperty,
  swapCardProperty,
  updateAllCardsProperty,
  initializePlayerCards,
} = playerCardsSlice.actions;

export const selectPlayerCards = (state: RootState) =>
  state.playerCards.playerCards;

export default playerCardsSlice.reducer;
