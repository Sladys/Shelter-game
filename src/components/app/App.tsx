import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerCardList from "../game/playerCardList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PlayerCardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
