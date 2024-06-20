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

  const buttonContent = <BarsArrowDownIcon className="h-6 w-6" />;

  return (

    <Select
      options={options}
      value={value !== null ? value.toString() : ""}
      onChange={(value) => onChange(Number(value))}
      buttonContent={buttonContent}
      widthClass="w-16"
    />
  );
}

export default SelectOption;
