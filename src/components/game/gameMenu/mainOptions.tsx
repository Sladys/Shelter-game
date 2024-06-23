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
        <Button onClick={onUpdateClick} className="w-full">
          Обновить характеристику игрока
        </Button>
      </li>
      <li className="mb-2">
        <Button onClick={onUpdateClick} className="w-full">
          Поменять характеристики игроков
        </Button>
      </li>
      <li className="mb-2">
        <Button onClick={onUpdateAllClick} className="w-full">
          Поменять характеристики игроков
        </Button>
      </li>
    </ul>
  );
}

export default MainOptions;
