import { Fragment } from "react";

function PlayerCard(): JSX.Element {
  return (
    <Fragment>
      <li className="m-6 w-2/12 bg-green-300">
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
