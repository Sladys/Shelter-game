import { useSelector } from "react-redux";
import { ApocalypseInfo } from "../../types/types";
import { RootState } from "../../store/store";

function ApocalypseInfoComponent(): JSX.Element {
  const apocalypseInfo: ApocalypseInfo | null = useSelector(
    (state: RootState) => state.apocalypses.apocalypse,
  );

  return (
    <>
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
    </>
  );
}

export default ApocalypseInfoComponent;
