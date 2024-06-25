import { useDispatch, useSelector } from "react-redux";
import { ApocalypseInfo, BunkerInfo } from "../../types/types";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { generateBunkerInfo } from "../../store/slices/bunkersSlice";
import { generateApocalypseInfo } from "../../store/slices/apocalypsesSlice";

function GameInfo(): JSX.Element {
  const dispatch = useDispatch();
  const bunkerInfo: BunkerInfo | null = useSelector(
    (state: RootState) => state.bunkers.bunkersData,
  );
  const apocalypseInfo: ApocalypseInfo | null = useSelector(
    (state: RootState) => state.apocalypses.apocalypse,
  );

  useEffect(() => {
    dispatch(generateBunkerInfo());
    dispatch(generateApocalypseInfo());
  }, [dispatch]);

  return (
    <div className="grid w-full grid-cols-2 gap-4 rounded-lg border-2 border-indigo-500 bg-gray-100 p-4 dark:border-indigo-300 dark:bg-slate-700">
      {apocalypseInfo ? (
        <div>
          <h3 className="mb-2 text-xl font-semibold">
            Катастрофа: {apocalypseInfo.type}
          </h3>
          <p className="">{apocalypseInfo.description}</p>
          <p>
            <strong>Оставшееся население:</strong> {apocalypseInfo.population}
          </p>
          <p>
            <strong>Время в бункере:</strong> {apocalypseInfo.period}
          </p>
        </div>
      ) : (
        <p>Загрузка информации о катастрофе...</p>
      )}
      {bunkerInfo ? (
        <div>
          <h3 className="mb-2 text-xl font-semibold">Бункер</h3>
          <p>
            <strong>Описание Бункера:</strong> {bunkerInfo.description}
          </p>
          <p className="">
            <strong>Запасы еды:</strong> {bunkerInfo.food}
          </p>
          <p className="">
            <strong>Строение:</strong> {bunkerInfo.structure}
          </p>
          <p className="">
            <strong>Дополнительная информация:</strong> {bunkerInfo.additional}
          </p>
        </div>
      ) : (
        <p>Загрузка информации о бункере...</p>
      )}
    </div>
  );
}

export default GameInfo;
