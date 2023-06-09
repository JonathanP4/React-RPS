import Button from "../Button/Button";
import classes from "./PickHand.module.css";
import rockIcon from "/images/icon-rock.svg";
import paperIcon from "/images/icon-paper.svg";
import scissorsIcon from "/images/icon-scissors.svg";

function PickHand() {
  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["inner-container"]}>
        <div className={classes.connector}></div>
        <div className={classes.connector}></div>
        <div className={classes.connector}></div>

        <Button className={classes.paper}>
          <img src={paperIcon} alt="icon-paper" />
        </Button>
        <Button className={classes.scissors}>
          <img src={scissorsIcon} alt="icon-scissors" />
        </Button>
        <Button className={classes.rock}>
          <img src={rockIcon} alt="icon-rock" />
        </Button>
      </div>
    </div>
  );
}

export default PickHand;
