import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
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
        <Button onClick={onUpdateAll}>Подтвердить</Button>
        <Button onClick={onBack}>
          <ArrowUturnLeftIcon className="h-6 w-6" />
        </Button>
      </li>
    </ul>
  );
}

export default UpdateAllOptions;
