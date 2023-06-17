import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  ui: {
    startGame: boolean;
  };
}

const uiSlice = createSlice({
  name: "ui",
  initialState: { startGame: false },
  reducers: {
    toggleGameStart(state) {
      state.startGame = !state.startGame;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
