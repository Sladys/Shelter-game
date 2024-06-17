import GameInfo from "../../components/game/gameInfo";
import GameMenu from "../../components/game/gameMenu";
import PlayerCardList from "../../components/game/playerCardList";
import { getRandomElement } from "../../utils";
import { Apocalypses, BunkersData, CardsInfo } from "../../types/types";

type GameScreenProps = {
  apocalypses: Apocalypses;
  bunkersData: BunkersData;
  cardsInfo: CardsInfo;
};

function GameScreen({
  cardsInfo,
  apocalypses,
  bunkersData,
}: GameScreenProps): JSX.Element {
  return (
    <main className="container mx-auto flex h-screen flex-col items-center">
      <GameInfo
        apocalypse={getRandomElement(apocalypses)}
        bunker={getRandomElement(bunkersData)}
      />
      <GameMenu />
      <PlayerCardList cardsInfo={cardsInfo} />
    </main>
  );
}

export { GameScreen };
