import { CardInfo } from "../../../types/types";
import PropertySelect from "./propertySelect";
import SelectOption from "./selectOption";

type UpdateOptionsProps = {
  numOfCards: number;
  selectedIndex1: number | null;
  property: keyof CardInfo | "";
  onSelectIndex1: (index: number) => void;
  onSelectProperty: (property: keyof CardInfo | "") => void;
  onUpdate: () => void;
  onBack: () => void;
};

function UpdateOptions({
  numOfCards,
  selectedIndex1,
  property,
  onSelectIndex1,
  onSelectProperty,
  onUpdate,
  onBack,
}: UpdateOptionsProps): JSX.Element {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <label className="flex w-full justify-between">
          Номер игрока для замены:
          <SelectOption
            numOfCards={numOfCards}
            value={selectedIndex1}
            onChange={onSelectIndex1}
          />
        </label>
      </li>
      <li>
        <label>
          Характеристика для замены:
          <PropertySelect value={property} onChange={onSelectProperty} />
        </label>
      </li>
      <li className="mt-3 flex justify-between">
        <button
          onClick={onUpdate}
          className="rounded bg-gray-600 p-2 text-white"
        >
          Подтвердить
        </button>
        <button onClick={onBack} className="rounded bg-gray-600 p-2 text-white">
          Назад
        </button>
      </li>
    </ul>
  );
}

export default UpdateOptions;
