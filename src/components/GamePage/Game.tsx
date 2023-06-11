import classes from "./Game.module.css";

import rockIcon from "/images/icon-rock.svg";
import paperIcon from "/images/icon-paper.svg";
import scissorsIcon from "/images/icon-scissors.svg";

import Button from "../Button/Button";
import { Hands } from "../../App";
import { useEffect, useState } from "react";

function Game(props: {
  hand: Hands;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [msg, setMsg] = useState("");
  const [showGame, setShowGame] = useState(false);
  const [randomClass, setRandomClass] = useState("");
  const [randomImg, setRandomImg] = useState("");

  function getPlayerHand() {
    switch (props.hand) {
      case "rock":
        return { playerClass: classes.rock, playerImg: rockIcon };
      case "paper":
        return { playerClass: classes.paper, playerImg: paperIcon };
      case "scissors":
        return { playerClass: classes.scissors, playerImg: scissorsIcon };
      default:
        return { playerClass: classes.rock, playerImg: rockIcon };
    }
  }

  function getRandomNum() {
    return Math.trunc(Math.random() * 3);
  }

  function getRandomHand(radInt: number) {
    switch (radInt) {
      case 0:
        return { randomClass: classes.rock, randomImg: rockIcon };
      case 1:
        return { randomClass: classes.paper, randomImg: paperIcon };
      default:
        return { randomClass: classes.scissors, randomImg: scissorsIcon };
    }
  }

  function getResult(radInt: number) {
    const dict = ["rock", "paper", "scissors"];
    const randomHand = dict[radInt];
    const playerHand = props.hand;

    if (playerHand === randomHand) {
      return "TIE";
    }
    if (
      (playerHand === "rock" && randomHand === "scissors") ||
      (playerHand === "paper" && randomHand === "rock") ||
      (playerHand === "scissors" && randomHand === "paper")
    ) {
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  }

  useEffect(() => {
    function gameFn() {
      const radInt = getRandomNum();
      const { randomClass, randomImg } = getRandomHand(radInt);
      const res = getResult(radInt);

      setRandomClass(randomClass);
      setRandomImg(randomImg);
      setMsg(res);
      setShowGame(true);
    }
    setTimeout(gameFn, 1000);
  }, []);

  const { playerClass, playerImg } = getPlayerHand();

  function hideGame() {
    props.setState(false);
  }

  return (
    <div className={classes["hands-container"]}>
      <div className={classes["hands-container__div"]}>
        <h2>YOU PICKED</h2>
        <Button className={playerClass}>
          <img src={playerImg} alt={`icon-${props.hand}`} />
        </Button>
      </div>
      <div className={classes["game-result"]}>
        {msg && (
          <>
            <h1>{msg}</h1>
            <button onClick={hideGame}>PLAY AGAIN</button>
          </>
        )}
      </div>
      <div className={classes["hands-container__div"]}>
        <h2>THE HOUSE PICKED</h2>
        {!showGame && <div className={classes.placeholder}></div>}

        {showGame && (
          <Button className={randomClass}>
            <img
              src={randomImg}
              alt={`icon-${randomClass
                .match(/rock|paper|scissors/gi)
                ?.join("")}`}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Game;
