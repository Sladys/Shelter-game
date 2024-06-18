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
        <button
          onClick={onUpdateClick}
          className="w-full rounded bg-gray-600 p-2 text-white"
        >
          Обновить характеристику игрока
        </button>
      </li>
      <li className="mb-2">
        <button
          onClick={onSwapClick}
          className="w-full rounded bg-gray-600 p-2 text-white"
        >
          Поменять характеристики игроков
        </button>
      </li>
      <li className="mb-2">
        <button
          onClick={onUpdateAllClick}
          className="w-full rounded bg-gray-600 p-2 text-white"
        >
          Обновить характеристику для всех
        </button>
      </li>
    </ul>
  );
}

export default MainOptions;
