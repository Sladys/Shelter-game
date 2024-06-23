import Select from "../../ui/select";
import { BarsArrowDownIcon } from "@heroicons/react/24/outline";

type SelectOptionProps = {
  numOfCards: number;
  value: number | null;
  onChange: (value: number) => void;
};


function SelectOption({
  numOfCards,
  value,
  onChange,
}: SelectOptionProps): JSX.Element {
  const options = Array.from({ length: numOfCards }, (_, index) => ({
    value: index.toString(),
    label: (index + 1).toString(),
  }));

  return (
    <Select
      options={options}
      value={value !== null ? value.toString() : ""}
      onChange={(value) => onChange(Number(value))}
      widthClass="w-16"
    >
      <BarsArrowDownIcon className="h-6 w-6" />
    </Select>
  );
}

export default SelectOption;
