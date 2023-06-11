import Button from "../Button/Button";
import classes from "./PickHand.module.css";
import rockIcon from "/images/icon-rock.svg";
import paperIcon from "/images/icon-paper.svg";
import scissorsIcon from "/images/icon-scissors.svg";

function PickHand(props: {
  clickEvent: (str: "rock" | "paper" | "scissors") => void;
}) {
  const rock = () => props.clickEvent("rock");
  const paper = () => props.clickEvent("paper");
  const scissors = () => props.clickEvent("scissors");

  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["inner-container"]}>
        <div className={classes.connector}></div>
        <div className={classes.connector}></div>
        <div className={classes.connector}></div>

        <Button
          clickEvent={paper}
          className={`${classes.button} ${classes.paper}`}
        >
          <img src={paperIcon} alt="icon-paper" />
        </Button>

        <Button
          clickEvent={scissors}
          className={`${classes.button} ${classes.scissors}`}
        >
          <img src={scissorsIcon} alt="icon-scissors" />
        </Button>

        <Button
          clickEvent={rock}
          className={`${classes.button} ${classes.rock}`}
        >
          <img src={rockIcon} alt="icon-rock" />
        </Button>
      </div>
    </div>
  );
}

export default PickHand;
