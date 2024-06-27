import { useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import PlayerCard from "./playerCard";
import { CardsInfo } from "../../types/types";
import {
  initializePlayerCards,
  updateCardState,
} from "../../store/slices/playerCardsSlice";
import { NUM_OF_CARDS } from "../../constants/constants";

type PlayerCardListProps = {
  cardsInfo: CardsInfo;
};

function PlayerCardList({ cardsInfo }: PlayerCardListProps): JSX.Element {
  const dispatch = useDispatch();
  const playerCards = useSelector(
    (state: RootState) => state.playerCards.playerCards,
  );
  const numOfCards = NUM_OF_CARDS;

  useEffect(() => {
    dispatch(initializePlayerCards({ cardsInfo, numOfCards }));
  }, [dispatch, cardsInfo]);

  const toggleCardVisibility = (cardId: number, elementIndex: number) => {
    dispatch(updateCardState({ cardId, elementIndex, show: false }));
  };

  return (
    <>
      <ul className="container mx-auto flex list-none flex-wrap justify-between gap-5">
        {playerCards.map((card, index) => (
          <PlayerCard
            key={index}
            cardInfo={card}
            id={index}
            toggleVisibility={toggleCardVisibility}
          />
        ))}
      </ul>
    </>
  );
}

export default PlayerCardList;
