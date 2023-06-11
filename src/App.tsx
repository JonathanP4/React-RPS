import { useState } from "react";
import RulesModal from "./components/Rules/RulesModal";
import Score from "./components/Score/Score";
import PickHand from "./components/RPSPick/PickHand";
import RulesButton from "./components/Rules/RulesButton";
import Game from "./components/GamePage/Game";

export type Hands = "rock" | "paper" | "scissors";

let initState: Hands;

function App() {
  const [showRules, setShowRules] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [hand, setHand] = useState(initState);

  function clickHandler() {
    setShowRules((state) => !state);
  }

  function chooseHand(hand: Hands) {
    setHand(hand);
    setStartGame(true);
  }

  return (
    <>
      {showRules && <RulesModal clickEvent={clickHandler} />}
      <Score />
      {!startGame && <PickHand clickEvent={chooseHand} />}
      {startGame && <Game hand={hand} setState={setStartGame} />}
      <RulesButton clickEvent={clickHandler} />
    </>
  );
}

export default App;
