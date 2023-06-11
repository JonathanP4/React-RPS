import classes from "./RulesButton.module.css";
function RulesButton(props: { clickEvent: () => void }) {
  return (
    <button
      className={classes["btn-rules"]}
      onClick={props.clickEvent}
      aria-label="rules"
    >
      RULES
    </button>
  );
}

export default RulesButton;
