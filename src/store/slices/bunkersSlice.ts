import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BunkerInfo } from "../../types/types";
import { bunkersData } from "../../mocks/bunkerData";


interface BunkersState {
  bunkersData: BunkerInfo | null;
}

const initialState: BunkersState = {
  bunkersData: null,
};

const generateBunkerData = (): BunkerInfo => {
  const randomIndex = Math.floor(Math.random() * bunkersData.length);
  return bunkersData[randomIndex];
};

const bunkersSlice = createSlice({
  name: "bunkers",
  initialState,
  reducers: {
    setBunkersData: (state, action: PayloadAction<BunkerInfo>) => {
      state.bunkersData = action.payload;
    },
    generateBunkerInfo: (state) => {
      state.bunkersData = generateBunkerData();
    },
  },
});

export const { setBunkersData, generateBunkerInfo } = bunkersSlice.actions;
export default bunkersSlice.reducer;
