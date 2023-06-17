import { useState } from "react";
import classes from "./RulesButton.module.css";
import { createPortal } from "react-dom";
import RulesModal from "../Modal/RulesModal";

function RulesButton() {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      {showRules &&
        createPortal(
          <RulesModal clickEvent={() => setShowRules((state) => !state)} />,
          document.getElementById("modal") as HTMLDivElement
        )}
      <button
        onClick={() => setShowRules((state) => !state)}
        className={classes.button}
        aria-label="display rules"
      >
        RULES
      </button>
    </>
  );
}

export default RulesButton;
