import { createSlice } from "@reduxjs/toolkit";

const gameMenuSlice = createSlice({
  name: "gameMenu",
  initialState: {
    showMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleMenu } = gameMenuSlice.actions;
export default gameMenuSlice.reducer;
