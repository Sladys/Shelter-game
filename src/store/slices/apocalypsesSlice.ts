import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Apocalypses } from "../../types/types";

interface ApocalypsesState {
  apocalypses: Apocalypses | null;
}

const initialState: ApocalypsesState = {
  apocalypses: null,
};

const apocalypsesSlice = createSlice({
  name: "apocalypses",
  initialState,
  reducers: {
    setApocalypses: (state, action: PayloadAction<Apocalypses>) => {
      state.apocalypses = action.payload;
    },
  },
});

export const { setApocalypses } = apocalypsesSlice.actions;
export default apocalypsesSlice.reducer;
