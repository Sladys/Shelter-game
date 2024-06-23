import { CardInfo } from "../../../types/types";
import Select from "../../ui/select";

type PropertySelectProps = {
  value: keyof CardInfo | "";
  onChange: (value: keyof CardInfo) => void;
};

const options = [
  { value: "profession", label: "Специальность" },
  { value: "bio", label: "Пол, возраст" },
  { value: "hobby", label: "Хобби" },
  { value: "inventory", label: "Багаж" },
  { value: "phobia", label: "Фобия" },
  { value: "health", label: "Состояние здоровья" },
  { value: "additional", label: "Доп. информация" },
  { value: "actionFirst", label: "Спец. Возможность №1" },
  { value: "actionSecond", label: "Спец. Возможность №2" },
];

const buttonContent = "Выбрать характеристику";

function PropertySelect({ value, onChange }: PropertySelectProps): JSX.Element {
  return (
    <Select
      options={options}
      value={value !== "" ? value : ""}
      onChange={(val) => onChange(val as keyof CardInfo)}
      buttonContent={buttonContent}
      widthClass="w-full"
    />
  );
}

export default PropertySelect;