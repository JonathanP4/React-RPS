import RulesButton from "./components/Buttons/RulesButton";
import ChooseHand from "./components/Game/ChooseHand";
import GameStart from "./components/Game/GameStart";
import ScoreHeader from "./components/Game/ScoreHeader";
import { useDispatch, useSelector } from "react-redux";
import { UiState, uiActions } from "./store/ui-slice";

function App() {
  const gameStart = useSelector((state: UiState) => state.ui.startGame);
  const dispatch = useDispatch();

  function toggleStart() {
    dispatch(uiActions.toggleGameStart());
  }

  return (
    <>
      <header>
        <ScoreHeader />
      </header>
      {!gameStart && <ChooseHand clickEvent={toggleStart} />}
      {gameStart && <GameStart clickEvent={toggleStart} />}
      <RulesButton />
    </>
  );
}

export default App;
