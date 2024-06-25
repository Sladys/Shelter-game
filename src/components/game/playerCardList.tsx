import { useEffect } from "react";
import { CardInfo, CardsInfo } from "../../types/types";
import PlayerCard from "./playerCard";
import GameMenu from "./gameMenu/gameMenu";
import {
  generateNewCardInfo,
  generateNewValueForKey,
  getRandomElement,
} from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updatePlayerCards } from "../../store/slices/playerCardsSlice";

type PlayerCardListProps = {
  cardsInfo: CardsInfo;
  numOfCards: number;
};

function PlayerCardList({
  cardsInfo,
  numOfCards,
}: PlayerCardListProps): JSX.Element {
  const playerCards = useSelector(
    (state: RootState) => state.playerCards.playerCards,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const initialPlayerCards = Array.from({ length: numOfCards }, () =>
      getRandomElement(cardsInfo),
    );
    dispatch(updatePlayerCards(initialPlayerCards));
  }, [dispatch, cardsInfo, numOfCards]);

  return (
    <>
      <ul className="container mx-auto flex list-none flex-wrap justify-around gap-5">
        {playerCards.map((card, index) => (
          <PlayerCard key={index} cardInfo={card} id={index} />
        ))}
      </ul>
    </>
  );
}

export default PlayerCardList;
