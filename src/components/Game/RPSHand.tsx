import classes from "./RPSHand.module.css";

interface Props {
  className: string;
  img: string;
  name: string;
  clickEvent?: (str: string) => void;
}

function RPSHand({ className, img, name, clickEvent }: Props) {
  function clickHandler() {
    if (!clickEvent) return;
    clickEvent(name);
  }

  return (
    <div
      onClick={clickHandler}
      className={`${classes.hand} ${className || ""}`}
    >
      <div className={classes["hand__inner-div"]}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default RPSHand;
