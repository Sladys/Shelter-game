import { CardInfo } from "../../../../types/types";
import Button from "../../../ui/button";
import PropertySelect from "../propertySelect";

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
    <ul className="flex flex-col gap-2">
      <li>
        <label>
          Характеристика для замены:
          <PropertySelect value={property} onChange={onSelectProperty} />
        </label>
      </li>
      <li className="mt-3 flex justify-between">
        <Button children="Подтвердить" onClick={onUpdateAll} />
        <Button children="Назад" onClick={onBack} />
      </li>
    </ul>
  );
}

export default UpdateAllOptions;