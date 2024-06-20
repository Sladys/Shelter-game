import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardsInfo } from '../../types/types';

interface CardsState {
  cardsInfo: CardsInfo | null;
}

const initialState: CardsState = {
  cardsInfo: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsInfo: (state, action: PayloadAction<CardsInfo>) => {
      state.cardsInfo = action.payload;
    },
  },
});

export const { setCardsInfo } = cardsSlice.actions;
export default cardsSlice.reducer;
