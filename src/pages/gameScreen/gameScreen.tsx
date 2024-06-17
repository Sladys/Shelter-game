import GameInfo from "../../components/game/gameInfo";
import { apocalypseData, bunkerData } from "../../mocks/bunkerData";
import GameMenu from "../../components/game/gameMenu";

function GameScreen(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex h-screen items-center justify-center">
        <GameInfo apocalypse={apocalypseData} bunker={bunkerData} />
        <GameMenu />
      </main>
    </div>
  );
}

export { GameScreen };
