import { useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import PlayerCard from "./playerCard";
import { CardsInfo } from "../../types/types";
import { initializePlayerCards } from "../../store/slices/playerCardsSlice";

type PlayerCardListProps = {
  cardsInfo: CardsInfo;
  numOfCards: number;
};

function PlayerCardList({
  cardsInfo,
  numOfCards,
}: PlayerCardListProps): JSX.Element {
  const dispatch = useDispatch();
  const playerCards = useSelector(
    (state: RootState) => state.playerCards.playerCards,
  );

  useEffect(() => {
    dispatch(initializePlayerCards({ cardsInfo, numOfCards }));
  }, [dispatch, cardsInfo, numOfCards]);

  return (
    <>
      <ul className="container mx-auto flex list-none flex-wrap justify-between gap-5">
        {playerCards.map((card, index) => (
          <PlayerCard key={index} cardInfo={card} id={index} />
        ))}
      </ul>
    </>
  );
}

export default PlayerCardList;
