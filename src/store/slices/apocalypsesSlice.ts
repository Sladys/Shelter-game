import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApocalypseInfo } from "../../types/types";
import { apocalypses } from "../../mocks/apocalypseData";

interface ApocalypsesState {
  apocalypse: ApocalypseInfo | null;
}

const initialState: ApocalypsesState = {
  apocalypse: null,
};

const generateApocalypseData = (): ApocalypseInfo => {
  const randomIndex = Math.floor(Math.random() * apocalypses.length);
  return apocalypses[randomIndex];
};

const apocalypsesSlice = createSlice({
  name: "apocalypses",
  initialState,
  reducers: {
    setApocalypse: (state, action: PayloadAction<ApocalypseInfo>) => {
      state.apocalypse = action.payload;
    },
    generateApocalypseInfo: (state) => {
      state.apocalypse = generateApocalypseData();
    },
  },
});

export const { setApocalypse, generateApocalypseInfo } =
  apocalypsesSlice.actions;
export default apocalypsesSlice.reducer;
