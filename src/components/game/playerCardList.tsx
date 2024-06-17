import PlayerCard from "./playerCard";

function PlayerCardList(): JSX.Element {
  return (
    <ul className="container mx-auto flex list-none flex-wrap">
      {Array.from({ length: 10 }, (_, id) => (
        <PlayerCard key={id} />
      ))}
    </ul>
  );
}

export default PlayerCardList;
