import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameScreen } from "../../pages/gameScreen";
import { apocalypses } from "../../mocks/apocalypseData";
import { bunkersData } from "../../mocks/bunkerData";
import { playerCards } from "../../mocks/cards";
import Auth from "../../pages/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
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
