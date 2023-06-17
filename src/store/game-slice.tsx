import { createSlice } from "@reduxjs/toolkit";

import iconRock from "/images/icon-rock.svg";
import iconPaper from "/images/icon-paper.svg";
import iconScissors from "/images/icon-scissors.svg";

export interface GameState {
  game: {
    score: number;
    playerHand: { name: string; image: string };
    randomHand: { name: string; image: string };
    result: string;
  };
}

const gameSlice = createSlice({
  name: "game",

  initialState: {
    score: 0,
    playerHand: { name: "", image: "" },
    randomHand: { name: "", image: "" },
    result: "",
  },

  reducers: {
    getResult(state) {
      const randomHand = state.randomHand.name;
      const playerHand = state.playerHand.name;

      if (
        (playerHand === "rock" && randomHand === "scissors") ||
        (playerHand === "paper" && randomHand === "rock") ||
        (playerHand === "scissors" && randomHand === "paper")
      ) {
        state.score++;
        state.result = "YOU WIN";
      } else if (playerHand === randomHand) {
        state.result = "DRAW";
      } else {
        state.score > 0 && state.score--;
        state.result = "YOU LOSE";
      }
    },

    setPlayerHand(state, action) {
      switch (action.payload) {
        case "rock":
          state.playerHand = {
            name: "rock",
            image: iconRock,
          };
          break;
        case "paper":
          state.playerHand = {
            name: "paper",
            image: iconPaper,
          };
          break;
        default:
          state.playerHand = {
            name: "scissors",
            image: iconScissors,
          };
          break;
      }
    },

    setRandomHand(state) {
      const radInt = Math.trunc(Math.random() * 3);

      switch (radInt) {
        case 0:
          state.randomHand = {
            image: iconRock,
            name: "rock",
          };
          break;
        case 1:
          state.randomHand = {
            image: iconPaper,
            name: "paper",
          };
          break;
        default:
          state.randomHand = {
            image: iconScissors,
            name: "scissors",
          };
          break;
      }
    },
  },
});

export default gameSlice.reducer;
export const gameActions = gameSlice.actions;
