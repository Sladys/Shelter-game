import GameInfo from "../components/game/gameInfo";
import PlayerCardList from "../components/game/playerCardList";
import { CardsInfo } from "../types/types";
import Header from "../components/common/header";
import { NUM_OF_CARDS } from "../constants/constants";
import Footer from "../components/common/footer";

type GameScreenProps = {
  cardsInfo: CardsInfo;
};

function GameScreen({ cardsInfo }: GameScreenProps): JSX.Element {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-200 p-6 dark:bg-slate-800">
          <GameInfo />
          <PlayerCardList cardsInfo={cardsInfo} numOfCards={NUM_OF_CARDS} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { GameScreen };
