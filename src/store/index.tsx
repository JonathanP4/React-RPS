import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    game: gameSlice,
    ui: uiSlice,
  },
});

export default store;
