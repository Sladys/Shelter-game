import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameScreen } from "../../pages/gameScreen/gameScreen";
import { Apocalypses, BunkersData, CardsInfo } from "../../types/types";

type AppProps = {
  apocalypses: Apocalypses;
  bunkersData: BunkersData;
  cardsInfo: CardsInfo;
};

function App({ cardsInfo, apocalypses, bunkersData }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/game"
          element={
            <GameScreen
              apocalypses={apocalypses}
              bunkersData={bunkersData}
              cardsInfo={cardsInfo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
