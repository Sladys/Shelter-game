import { CardsInfo } from "../../types/types";
import { getRandomElement } from "../../utils";
import PlayerCard from "./playerCard";

type PlayerCardListProps = {
  cardsInfo: CardsInfo;
};

function PlayerCardList({cardsInfo} : PlayerCardListProps): JSX.Element {
  return (
    <ul className="container mx-auto flex list-none flex-wrap justify-between">
      {Array.from({ length: 10 }, (_, id) => (
        <PlayerCard key={id} cardInfo={getRandomElement(cardsInfo)} />
      ))}
    </ul>
  );
}

export default PlayerCardList;
