import { useDispatch } from "react-redux";
import { generateApocalypseInfo } from "../../../store/slices/apocalypsesSlice";
import { generateBunkerInfo } from "../../../store/slices/bunkersSlice";
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
  const dispatch = useDispatch();

  const handleUpdateBunkerInfo = () => dispatch(generateBunkerInfo());
  const handleUpdateApocalypseInfo = () => dispatch(generateApocalypseInfo());

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
          Обновить характеристики всем
        </Button>
      </li>
      <li>
        <Button onClick={handleUpdateBunkerInfo} className="w-full">
          Изменить бункер
        </Button>
      </li>
      <li>
        <Button onClick={handleUpdateApocalypseInfo} className="w-full">
          Изменить катастрофу
        </Button>
      </li>
    </ul>
  );
}

export default MainOptions;
