import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameScreen } from "../../pages/gameScreen";
import { apocalypses } from "../../mocks/apocalypseData";
import { bunkersData } from "../../mocks/bunkerData";
import { playerCards } from "../../mocks/cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/game"
          element={
            <GameScreen
              apocalypses={apocalypses}
              bunkersData={bunkersData}
              cardsInfo={playerCards}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
