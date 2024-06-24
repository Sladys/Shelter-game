import { Apocalypse, BunkerData } from "../../types/types";

type GameInfoProps = {
  apocalypse: Apocalypse;
  bunker: BunkerData;
};

function GameInfo({ apocalypse, bunker }: GameInfoProps): JSX.Element {
  return (
    <div className="grid w-full grid-cols-2 gap-4 rounded-lg border-2 border-indigo-500 bg-gray-100 p-4 dark:border-indigo-300 dark:bg-slate-700">
      <div>
        <h3 className="mb-2 text-xl font-semibold">
          Катастрофа: {apocalypse.type}
        </h3>
        <p className="">{apocalypse.description}</p>
        <p>
          <strong>Оставшееся население:</strong> {apocalypse.population}
        </p>
        <p>
          <strong>Время в бункере:</strong> {apocalypse.period}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-semibold">Бункер</h3>
        <p>
          <strong>Описание Бункера:</strong> {bunker.description}
        </p>
        <p className="">
          <strong>Запасы еды:</strong> {bunker.food}
        </p>
        <p className="">
          <strong>Строение:</strong> {bunker.structure}
        </p>
        <p className="">
          <strong>Дополнительная информация:</strong> {bunker.additional}
        </p>
      </div>
    </div>
  );
}

export default GameInfo;
