import SelectOption from "../selectOption";
import PropertySelect from "../propertySelect";
import { CardInfo } from "../../../../types/types";
import Button from "../../../ui/button";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

type SwapOptionsProps = {
  numOfCards: number;
  selectedIndex1: number | null;
  selectedIndex2: number | null;
  property: keyof CardInfo | "";
  onSelectIndex1: (index: number) => void;
  onSelectIndex2: (index: number) => void;
  onSelectProperty: (property: keyof CardInfo) => void;
  onSwap: () => void;
  onBack: () => void;
};

function SwapOptions({
  numOfCards,
  selectedIndex1,
  selectedIndex2,
  property,
  onSelectIndex1,
  onSelectIndex2,
  onSelectProperty,
  onSwap,
  onBack,
}: SwapOptionsProps): JSX.Element {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <label className="flex w-full justify-between">
          Номер первого игрока:
          <SelectOption
            numOfCards={numOfCards}
            value={selectedIndex1}
            onChange={onSelectIndex1}
          />
        </label>
      </li>
      <li>
        <label className="flex w-full justify-between">
          Номер второго игрока:
          <SelectOption
            numOfCards={numOfCards}
            value={selectedIndex2}
            onChange={onSelectIndex2}
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
        <Button onClick={onSwap}>Подтвердить</Button>

        <Button onClick={onBack}>
          <ArrowUturnLeftIcon className="h-6 w-6" />
        </Button>
      </li>
    </ul>
  );
}

export default SwapOptions;
