import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BunkersData } from "../../types/types";

interface BunkersState {
  bunkersData: BunkersData | null;
}

const initialState: BunkersState = {
  bunkersData: null,
};

const bunkersSlice = createSlice({
  name: "bunkers",
  initialState,
  reducers: {
    setBunkersData: (state, action: PayloadAction<BunkersData>) => {
      state.bunkersData = action.payload;
    },
  },
});

export const { setBunkersData } = bunkersSlice.actions;
export default bunkersSlice.reducer;
