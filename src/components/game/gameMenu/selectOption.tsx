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
  const options = Array.from({ length: numOfCards }, (_, index) => (
    <option key={index} value={index}>
      {index + 1}
    </option>
  ));

  return (
    <select
      className="text-center"
      value={value ?? ""}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="" disabled>
        Выбрать
      </option>
      {options}
    </select>
  );
}

export default SelectOption;
