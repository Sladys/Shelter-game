import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameScreen } from "../../pages/gameScreen";
import { playerCards } from "../../mocks/cards";
import Auth from "../../pages/auth";
import Button from "../ui/button";
import { useTheme } from "../../context/themeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`scrollbar-thin scrollbar-track-violet-200 scrollbar-thumb-indigo-500 ${theme === "dark" ? "dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-950" : ""} h-screen min-h-screen min-w-full overflow-y-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
    >
      <Button onClick={toggleTheme} className="fixed left-4 top-4">
        Toggle
      </Button>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/game"
            element={<GameScreen cardsInfo={playerCards} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
