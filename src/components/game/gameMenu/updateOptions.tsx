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
    <ul>
      <li className="mb-2">
        <label>
          Номер игрока:
          <SelectOption
            numOfCards={numOfCards}
            value={selectedIndex1}
            onChange={onSelectIndex1}
          />
        </label>
      </li>
      <li className="mb-2">
        <label>
          Характеристика для замены:
          <PropertySelect value={property} onChange={onSelectProperty} />
        </label>
      </li>
      <li className="mb-2">
        <button
          onClick={onUpdate}
          className="rounded bg-gray-600 p-2 text-white"
        >
          Подтвердить
        </button>
      </li>
      <li className="mb-2">
        <button onClick={onBack} className="rounded bg-gray-600 p-2 text-white">
          Назад
        </button>
      </li>
    </ul>
  );
}

export default UpdateOptions;