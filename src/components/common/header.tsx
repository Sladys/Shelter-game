import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import GameMenu from "../game/gameMenu/gameMenu";

function Header(): JSX.Element {
  const inGame = useSelector((state: RootState) => state.game.inGame);

  return (
    <header className="container sticky top-0 z-30 mx-auto my-3 rounded border-2 border-indigo-400 bg-indigo-200 p-3 shadow-lg dark:border-indigo-700 dark:bg-indigo-900">
      {!inGame ? (
        <div className="flex justify-end">
          <GameMenu />
        </div>
      ) : (
        <>!inGame</>
      )}
    </header>
  );
}

export default Header;
