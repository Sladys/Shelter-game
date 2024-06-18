import { CardInfo } from "../../../types/types";
import PropertySelect from "./propertySelect";

type UpdateAllOptionsProps = {
  property: keyof CardInfo | "";
  onSelectProperty: (property: keyof CardInfo) => void;
  onUpdateAll: () => void;
  onBack: () => void;
};

function UpdateAllOptions({
  property,
  onSelectProperty,
  onUpdateAll,
  onBack,
}: UpdateAllOptionsProps): JSX.Element {
  return (
    <ul>
      <li className="mb-2">
        <label>
          Характеристика для замены:
          <PropertySelect value={property} onChange={onSelectProperty} />
        </label>
      </li>
      <li className="mb-2">
        <button
          onClick={onUpdateAll}
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

export default UpdateAllOptions;