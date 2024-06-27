import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import GameMenu from "../game/gameMenu/gameMenu";
import Toggle from "../ui/toggle";
import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/16/solid";
import BunkerInfoComponent from "../game/bunkerInfoComponent";
import ApocalypseInfoComponent from "../game/apocalypseInfoComponent";

function Header(): JSX.Element {
  const inGame = useSelector((state: RootState) => state.game.inGame);

  return (
    <header className="container sticky top-0 z-30 mx-auto my-3 rounded border-2 border-indigo-400 bg-indigo-200 p-3 shadow-lg dark:border-indigo-700 dark:bg-indigo-900">
      {!inGame ? (
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex justify-center gap-16">
            <Toggle
              onValue={<BarsArrowUpIcon className="h-8 w-8" />}
              offValue={<BarsArrowDownIcon className="h-8 w-8" />}
              popup
              popupContent={<ApocalypseInfoComponent />}
              popupClassName="right-0"
            />
            <Toggle
              onValue={<BarsArrowUpIcon className="h-8 w-8" />}
              offValue={<BarsArrowDownIcon className="h-8 w-8" />}
              popup
              popupContent={<BunkerInfoComponent />}
              popupClassName="left-0"
            />
          </div>
          <GameMenu />
        </div>
      ) : (
        <>!inGame</>
      )}
    </header>
  );
}

export default Header;
