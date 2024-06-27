import { useSelector } from "react-redux";
import { BunkerInfo } from "../../types/types";
import { RootState } from "../../store/store";

function BunkerInfoComponent(): JSX.Element {
  const bunkerInfo: BunkerInfo | null = useSelector(
    (state: RootState) => state.bunkers.bunkersData,
  );

  return (
    <>
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
    </>
  );
}

export default BunkerInfoComponent;
