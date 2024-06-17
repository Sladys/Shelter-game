import GameInfo from "../../components/game/gameInfo";
import { apocalypseData, bunkerData } from "../../mocks/bunkerData";
import GameMenu from "../../components/game/gameMenu";
import PlayerCardList from "../../components/game/playerCardList";

function GameScreen(): JSX.Element {
  return (
    <main className="container mx-auto flex h-screen flex-col items-center">
      <GameInfo apocalypse={apocalypseData} bunker={bunkerData} />
      <GameMenu />
      <PlayerCardList />
    </main>
  );
}

export { GameScreen };
