import classes from "./Button.module.css";
import { ReactNode } from "react";

function Button(props: {
  className: string;
  children: ReactNode;
  clickEvent?: () => void;
}) {
  return (
    <div
      onClick={props.clickEvent}
      className={`${classes.button} ${props.className || ""}`}
    >
      <div className={classes["button__image-wrapper"]}>{props.children}</div>
    </div>
  );
}

export default Button;
