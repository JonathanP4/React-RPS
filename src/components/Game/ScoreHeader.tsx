import { useSelector } from "react-redux";
import classes from "./ScoreHeader.module.css";

function ScoreHeader() {
  const score = useSelector(
    (state: { game: { score: number } }) => state.game.score
  );

  return (
    <div className={classes.header}>
      <div className={classes.heading}>
        <h1>ROCK PAPER SCISSORS</h1>
      </div>
      <div className={classes.score}>
        <span>SCORE</span>
        <h2>{score}</h2>
      </div>
    </div>
  );
}

export default ScoreHeader;
