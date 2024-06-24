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
    <ul className="flex flex-col gap-3">
      <li>
        <Button onClick={onUpdateClick} className="w-full">
          Обновить характеристику игрока
        </Button>
      </li>
      <li>
        <Button onClick={onSwapClick} className="w-full">
          Поменять характеристики игроков
        </Button>
      </li>
      <li>
        <Button onClick={onUpdateAllClick} className="w-full">
          Поменять характеристики игроков
        </Button>
      </li>
    </ul>
  );
}

export default MainOptions;
