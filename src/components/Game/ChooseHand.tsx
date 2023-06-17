import RPSHand from "./RPSHand";
import classes from "./ChooseHand.module.css";

import { useDispatch } from "react-redux";

import iconRock from "/images/icon-rock.svg";
import iconPaper from "/images/icon-paper.svg";
import iconScissors from "/images/icon-scissors.svg";
import { gameActions } from "../../store/game-slice";

interface Props {
  clickEvent: () => void;
}

function ChooseHand({ clickEvent }: Props) {
  const dispatch = useDispatch();

  function gameStart(hand: string) {
    clickEvent();
    dispatch(gameActions.setPlayerHand(hand));
  }

  return (
    <div className={classes.container}>
      <div className={classes.choose}>
        <div className={classes.connector}></div>
        <div className={classes.connector}></div>
        <div className={classes.connector}></div>

        <RPSHand
          className={`${classes.paper} ${classes.hand}`}
          img={iconPaper}
          name="paper"
          clickEvent={gameStart}
        />
        <RPSHand
          className={`${classes.scissors} ${classes.hand}`}
          img={iconScissors}
          name="scissors"
          clickEvent={gameStart}
        />
        <RPSHand
          className={`${classes.rock} ${classes.hand}`}
          img={iconRock}
          name="rock"
          clickEvent={gameStart}
        />
      </div>
    </div>
  );
}

export default ChooseHand;
