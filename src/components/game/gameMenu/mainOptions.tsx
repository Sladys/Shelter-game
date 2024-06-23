import Button from "../../ui/button";

type MainOptionsProps = {
  onUpdateClick: () => void;
  onSwapClick: () => void;
  onUpdateAllClick: () => void;
};

function MainOptions({
  onUpdateClick,
  onSwapClick,
  onUpdateAllClick,
}: MainOptionsProps): JSX.Element {
  return (
    <ul>
      <li className="mb-2">
        <Button
          children="Обновить характеристику игрока"
          onClick={onUpdateClick}
          className="w-full"
        />
      </li>
      <li className="mb-2">
        <Button
          children="Поменять характеристики игроков"
          onClick={onUpdateClick}
          className="w-full"
        />
      </li>
      <li className="mb-2">
        <Button
          children="Поменять характеристики игроков"
          onClick={onUpdateAllClick}
          className="w-full"
        />
      </li>
    </ul>
  );
}

export default MainOptions;
