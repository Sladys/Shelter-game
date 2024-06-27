import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardInfo } from "../../types/types";
import { EyeSlashIcon } from "@heroicons/react/16/solid";
import { RootState } from "../../store/store";
import {
  selectCardState,
  updateCardState,
} from "../../store/slices/playerCardsSlice";

type PlayerCardProps = {
  cardInfo: CardInfo;
  id: number;
  toggleVisibility?: (cardId: number, elementIndex: number) => void;
};

function PlayerCard({
  cardInfo,
  id,
  toggleVisibility,
}: PlayerCardProps): JSX.Element {
  const dispatch = useDispatch();
  const show =
    useSelector((state: RootState) => selectCardState(state, id)) || [];
  const name = [
    "Специальность",
    "Пол, возраст",
    "Хобби",
    "Багаж",
    "Фобия",
    "Состояние здоровья",
    "Доп. информация",
    "Спец Возможность №1",
    "Спец Возможность №2",
  ];

  const openCardChar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const index = Number(e.currentTarget.id);
    e.currentTarget.classList.add("hidden");
    if (toggleVisibility) {
      toggleVisibility(id, index);
    } else {
      dispatch(
        updateCardState({ cardId: id, elementIndex: index, show: false }),
      );
    }
  };

  return (
    <Fragment>
      <li
        id={String(id)}
        className="relative w-[350px] rounded-lg border-2 border-indigo-500 bg-gray-100 p-2 dark:border-indigo-300 dark:bg-slate-700"
      >
        <div className="flex items-center justify-between p-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500 bg-indigo-100 font-bold dark:border-indigo-100 dark:bg-indigo-500">
            {id + 1}
          </div>
          <span className="text-2xl font-semibold">nickname</span>{" "}
          <span className="h-20 w-20 rounded-full bg-indigo-300"></span>
        </div>
        <ul className="list-none p-2">
          {Array.from({ length: 9 }, (_, i) => (
            <Fragment key={i}>
              <li
                id={`${i}`}
                key={i}
                value={Object.keys(cardInfo)[i]}
                className="relative inline-block"
              >
                {show[i] ? name[i] : Object.values(cardInfo)[i]}{" "}
                {show[i] && toggleVisibility && (
                  <button
                    id={`${i}`}
                    onClick={openCardChar}
                    className="absolute right-[-30px] top-[1px]"
                  >
                    <EyeSlashIcon className="h-6 w-6" />
                  </button>
                )}
              </li>
              <br />
            </Fragment>
          ))}
        </ul>
      </li>
    </Fragment>
  );
}

export default PlayerCard;
