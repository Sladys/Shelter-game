import GameInfo from "../../components/game/gameInfo";
import { apocalypseData, bunkerData } from "../../mocks/bunkerData";
import GameMenu from "../../components/game/gameMenu";
import PlayerCardList from "../../components/game/playerCardList";

function GameScreen(): JSX.Element {
  return (
      <main className="container mx-auto flex h-screen items-center flex-col">
        <GameInfo apocalypse={apocalypseData} bunker={bunkerData} />
        <GameMenu />
        <PlayerCardList />
      </main>
  );
}

export { GameScreen };
