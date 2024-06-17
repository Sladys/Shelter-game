import GameInfo from "../../components/game/gameInfo";
import { bunkerData } from "../../mocks/bunkerData";
import { generateApocalypses } from "../../mocks/apocalypseData";
import GameMenu from "../../components/game/gameMenu";
import PlayerCardList from "../../components/game/playerCardList";
import { getRandomElement } from "../../utils";

function GameScreen(): JSX.Element {
  return (
    <main className="container mx-auto flex h-screen flex-col items-center">
      <GameInfo apocalypse={getRandomElement(generateApocalypses)} bunker={bunkerData} />
      <GameMenu />
      <PlayerCardList />
    </main>
  );
}

export { GameScreen };
