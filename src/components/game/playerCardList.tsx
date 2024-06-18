import { useState } from "react";
import { CardInfo, CardsInfo } from "../../types/types";
import PlayerCard from "./playerCard";
import GameMenu from "./gameMenu/gameMenu";
import {
  generateNewCardInfo,
  generateNewValueForKey,
  getRandomElement,
} from "../../utils";

type PlayerCardListProps = {
  cardsInfo: CardsInfo;
  numOfCards: number;
};

function PlayerCardList({
  cardsInfo,
  numOfCards,
}: PlayerCardListProps): JSX.Element {
  const [playerCards, setPlayerCards] = useState<CardsInfo>(
    Array.from({ length: numOfCards }, () => getRandomElement(cardsInfo)),
  );

  const updateCardProperty = (index: number, key: keyof CardInfo) => {
    setPlayerCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, ...generateNewCardInfo(key) } : card,
      ),
    );
  };

  const swapCardProperty = (
    index1: number,
    index2: number,
    property: keyof CardInfo,
  ) => {
    setPlayerCards((prevCards) => {
      const newCards = [...prevCards];
      const temp = newCards[index1][property];
      newCards[index1][property] = newCards[index2][property];
      newCards[index2][property] = temp;
      return newCards;
    });
  };

  const updateAllCardsProperty = (key: keyof CardInfo) => {
    setPlayerCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        [key]: generateNewValueForKey(key),
      })),
    );
  };

  return (
    <>
      <ul className="container mx-auto flex list-none flex-wrap justify-between">
        {playerCards.map((card, index) => (
          <PlayerCard key={index} cardInfo={card} />
        ))}
      </ul>
      <GameMenu
        updateCardProperty={updateCardProperty}
        swapCardProperty={swapCardProperty}
        updateAllCardsProperty={updateAllCardsProperty}
        numOfCards={numOfCards}
      />
    </>
  );
}

export default PlayerCardList;
