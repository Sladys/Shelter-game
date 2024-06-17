import { Fragment } from "react";
import { CardInfo } from "../../types/types";

type PlayerCardProps = {
  cardInfo: CardInfo;
};

function PlayerCard({ cardInfo }: PlayerCardProps): JSX.Element {
  return (
    <Fragment>
      <li className="m-6 w-[320px] bg-gray-100">
        <div className="flex p-2">
          <span className="inline-block h-20 w-20 bg-red-200">avatar</span>
          <span className="ml-8 inline-block">nick</span>
        </div>
        <ul className="list-none p-2">
          <li>
            Специальность: <span className="ml-2">{cardInfo.profession}</span>
          </li>
          <li>
            Пол, возраст: <span className="ml-2">{cardInfo.bio}</span>
          </li>
          <li>
            Хобби: <span className="ml-2">{cardInfo.hobby}</span>
          </li>
          <li>
            Багаж: <span className="ml-2">{cardInfo.inventory}</span>
          </li>
          <li>
            Фобия: <span className="ml-2">{cardInfo.phobia}</span>
          </li>
          <li>
            Состояние здоровья: <span className="ml-2">{cardInfo.health}</span>
          </li>
          <li>
            Доп. информация:<span className="ml-2">{cardInfo.additional}</span>
          </li>
        </ul>
        <ul className="list-none border-t-2 border-indigo-900 p-2">
          <li>
            Спец Возможность №1: <span className="ml-2">{cardInfo.actionFirst}</span>
          </li>
          <li>
            Спец Возможность №2: <span className="ml-2">{cardInfo.actionSecond}</span>
          </li>
        </ul>
      </li>
    </Fragment>
  );
}

export default PlayerCard;
