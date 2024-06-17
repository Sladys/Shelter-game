import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameScreen } from "../../pages/gameScreen/gameScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
