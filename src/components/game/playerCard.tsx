import { Fragment, useState, useEffect } from "react";
import { CardInfo } from "../../types/types";
import { createArrShowName } from "../../utils";

type PlayerCardProps = {
  cardInfo: CardInfo;
  id: number;
};

function PlayerCard({ cardInfo, id }: PlayerCardProps): JSX.Element {
  const [playerCard, setPlayerCard] = useState(cardInfo);
  const [name, setName] = useState([
    "Специальность",
    "Пол, возраст",
    "Хобби",
    "Багаж",
    "Фобия",
    "Состояние здоровья",
    "Доп. информация",
    "Спец Возможность №1",
    "Спец Возможность №2",
  ]);
  const [show, setShow] = useState(createArrShowName());

  const openCardChar = (e: any) => {
    setPlayerCard((prevItem) => {
      e.target.classList.add('hidden');
      setShow((prevArray) => {
        const newArray = [...prevArray];
        newArray[e.target.id] = false;
        return newArray;
      });
      return prevItem;
    });
  };

  useEffect(() => {
    setPlayerCard(cardInfo);

    return () => {};
  }, [cardInfo]);

  return (
    <Fragment>
      <li id={String(id)} className="m-6 w-[320px] bg-gray-100">
        <div className="flex p-2">
          <span className="inline-block h-20 w-20 bg-red-200">avatar</span>
          <span className="ml-8 inline-block">nick</span>
        </div>
        <ul className="list-none p-2">
          {Array.from({ length: 9 }, (_, i) => (
            <Fragment key={i}>
              <li
                id={`${i}`}
                key={i}
                value={Object.keys(playerCard)[i]}
                className="relative inline-block"
              >
                {show[i] ? name[i] : Object.values(playerCard)[i]}
                <img
                  src="images/yey-svgrepo-com.svg"
                  alt="123"
                  className="absolute right-[-30px] top-[1px] w-6"
                  id={`${i}`}
                  onClick={openCardChar}
                />
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
