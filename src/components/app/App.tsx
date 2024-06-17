import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerCardList from "../game/playerCardList";
import { GameScreen } from "../../pages/gameScreen/gameScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PlayerCardList />} />
      </Routes>
      <Routes>
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
