import GameInfo from "../../components/game/gameInfo";
import PlayerCardList from "../../components/game/playerCardList";
import GameMenu from "../../components/game/gameMenu/gameMenu";
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
  const numOfCards = 5; /// количество карточек, должно поступать при начале игры

  return (
    <main className="container mx-auto flex h-screen flex-col items-center">
      <GameInfo
        apocalypse={getRandomElement(apocalypses)}
        bunker={getRandomElement(bunkersData)}
      />
      <PlayerCardList cardsInfo={cardsInfo} numOfCards={numOfCards} />
    </main>
  );
}

export { GameScreen };
