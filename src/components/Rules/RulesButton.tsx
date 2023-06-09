import classes from "./RulesButton.module.css";
function RulesButton() {
  return (
    <div className={classes["btn-rules"]}>
      <button aria-label="rules">Rules</button>
    </div>
  );
}

export default RulesButton;
