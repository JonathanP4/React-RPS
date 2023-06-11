import classes from "./Score.module.css";
function Score() {
  return (
    <div className={classes["rps-header"]}>
      <h1 className={classes.title}>ROCK PAPER SCISSORS</h1>
      <div className={classes.score}>
        <span>SCORE</span>
        <p>12</p>
      </div>
    </div>
  );
}

export default Score;
