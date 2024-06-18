import { CardInfo } from "../../../types/types";

type PropertySelectProps = {
  value: keyof CardInfo | "";
  onChange: (value: keyof CardInfo | "") => void;
};

function PropertySelect({ value, onChange }: PropertySelectProps): JSX.Element {
  return (
    <select
      className="w-full"
      value={value}
      onChange={(e) => onChange(e.target.value as keyof CardInfo | "")}
    >
      <option value="" disabled>
        Выбрать характеристику
      </option>
      <option value="profession">Специальность</option>
      <option value="bio">Пол, возраст</option>
      <option value="hobby">Хобби</option>
      <option value="inventory">Багаж</option>
      <option value="phobia">Фобия</option>
      <option value="health">Состояние здоровья</option>
      <option value="additional">Доп. информация</option>
      <option value="actionFirst">Спец. Возможность №1</option>
      <option value="actionSecond">Спец. Возможность №2</option>
    </select>
  );
}

export default PropertySelect;
