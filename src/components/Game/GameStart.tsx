import classes from "./GameStart.module.css";
import RPSHand from "./RPSHand";

import { useEffect } from "react";
import { GameState, gameActions } from "../../store/game-slice";
import { useDispatch, useSelector } from "react-redux";
import { UiState } from "../../store/ui-slice";

interface Props {
  clickEvent: () => void;
}

function GameStart({ clickEvent }: Props) {
  const gameStart = useSelector((state: UiState) => state.ui.startGame);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.setRandomHand());

    const timer = setTimeout(() => {
      dispatch(gameActions.getResult());
    }, 2000);
    return () => clearTimeout(timer);
  }, [gameStart, dispatch]);

  const playerHand = useSelector((state: GameState) => state.game.playerHand);
  const randomHand = useSelector((state: GameState) => state.game.randomHand);
  const result = useSelector((state: GameState) => state.game.result);

  return (
    <div className={classes.container}>
      <div className={classes["hand-div"]}>
        <h1>YOU PICKED</h1>
        <RPSHand
          name={playerHand.name}
          className={`${classes[playerHand.name]} ${classes.hand}`}
          img={playerHand.image}
        />
      </div>

      <div className={classes["game-result-container"]}>
        <h1>{result}</h1>
        <button aria-label="new game" onClick={clickEvent}>
          PLAY AGAIN
        </button>
      </div>

      <div className={classes["hand-div"]}>
        <h1>THE HOUSE PICKED</h1>
        <div className={classes.placeholder}></div>

        <RPSHand
          name={randomHand.name}
          className={`${classes[randomHand.name]} ${classes.hand} ${
            classes["random-hand"]
          }`}
          img={randomHand.image}
        />
      </div>
    </div>
  );
}

export default GameStart;
