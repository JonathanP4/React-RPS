import PickHand from "./components/RPSPick/PickHand";
import RulesButton from "./components/Rules/RulesButton";
import Score from "./components/Score/Score";

function App() {
  return (
    <main>
      <Score />
      <PickHand />
      <RulesButton />
    </main>
  );
}

export default App;
