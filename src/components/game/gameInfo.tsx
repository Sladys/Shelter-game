import React from "react";

interface GameInfoProps {
  bunker: {
    description: string;
    food: string;
    structure: string;
    additional: string;
  };
  apocalypse: {
    type: string;
    description: string;
    population: string;
    period: string;
  };
}

const GameInfo: React.FC<GameInfoProps> = ({ apocalypse, bunker }) => {
  return (
    <div className="grid grid-cols-2 rounded-lg bg-gray-100 p-4 gap-4">
      <div>
        <h3 className="mb-2 text-xl font-semibold">Катастрофа:  {apocalypse.type}</h3>

        <p className="text-gray-700">{apocalypse.description}</p>
        <p className="mb-1 text-gray-700">
          <strong>Оставшееся население:</strong> {apocalypse.population}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Время в бункере:</strong> {apocalypse.period}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-semibold">Бункер</h3>
        <p className="mb-1 text-gray-700">
          <strong>Описание Бункера:</strong> {bunker.description}
        </p>
        <p className="text-gray-700">
          <strong>Запасы еды:</strong> {bunker.food}
        </p>
        <p className="text-gray-700">
          <strong>Строение:</strong> {bunker.structure}
        </p>
        <p className="text-gray-700">
          <strong>Дополнительная информация:</strong> {bunker.additional}
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
