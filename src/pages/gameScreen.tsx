import GameInfo from "../components/game/gameInfo";
import PlayerCardList from "../components/game/playerCardList";
import GameMenu from "../components/game/gameMenu/gameMenu";
import { getRandomElement } from "../utils";
import { Apocalypses, BunkersData, CardsInfo } from "../types/types";
import Header from "../components/common/header";
import { NUM_OF_CARDS } from "../const";
import Footer from "../components/common/footer";

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
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-grow bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-200 p-6 dark:bg-slate-800">
          <GameInfo
            apocalypse={getRandomElement(apocalypses)}
            bunker={getRandomElement(bunkersData)}
          />
          <PlayerCardList cardsInfo={cardsInfo} numOfCards={NUM_OF_CARDS} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { GameScreen };
