import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardInfo } from "../../types/types";
import { generateNewCardInfo, generateNewValueForKey } from "../../utils";

type PlayerCardsState = {
  playerCards: CardInfo[];
  cardStates: { [key: number]: boolean[] };
};

const initialState: PlayerCardsState = {
  playerCards: [],
  cardStates: {},
};

export const playerCardsSlice = createSlice({
  name: "playerCards",
  initialState,
  reducers: {
    initializePlayerCards: (
      state,
      action: PayloadAction<{ cardsInfo: CardInfo[]; numOfCards: number }>,
    ) => {
      state.playerCards = action.payload.cardsInfo.slice(
        0,
        action.payload.numOfCards,
      );
      state.cardStates = {};
      state.playerCards.forEach((_, index) => {
        state.cardStates[index] = Array(9).fill(true);
      });
    },
    updateCardState: (
      state,
      action: PayloadAction<{
        cardId: number;
        elementIndex: number;
        show: boolean;
      }>,
    ) => {
      if (state.cardStates[action.payload.cardId]) {
        state.cardStates[action.payload.cardId][action.payload.elementIndex] =
          action.payload.show;
      }
    },
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
  },
});

export const {
  updatePlayerCards,
  updateCardProperty,
  swapCardProperty,
  updateAllCardsProperty,
  updateCardState,
  initializePlayerCards,
} = playerCardsSlice.actions;

export default playerCardsSlice.reducer;

export const selectPlayerCards = (state: RootState) =>
  state.playerCards.playerCards;

export const selectCardState = (state: RootState, cardId: number) =>
  state.playerCards.cardStates[cardId];
