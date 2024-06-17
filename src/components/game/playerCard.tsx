import { Fragment } from "react";

function PlayerCard(): JSX.Element {
  return (
    <Fragment>
      <li className="m-6 w-2/12 bg-gray-100">
        <div className="flex p-2">
          <span className="inline-block h-20 w-20 bg-red-200">avatar</span>
          <span className="ml-8 inline-block">nick</span>
        </div>
        <ul className="list-none p-2">
          <li>Специальность</li>
          <li>Пол, возраст</li>
          <li>Хобби</li>
          <li>Багаж</li>
          <li>Фобия</li>
          <li>Состояние здоровья</li>
          <li>Доп. информация</li>
        </ul>
        <ul className="list-none border-t-2 border-indigo-900 p-2">
          <li>Доп Возможность №1</li>
          <li>Доп Возможность №2</li>
        </ul>
      </li>
    </Fragment>
  );
}

export default PlayerCard;
