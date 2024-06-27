import Select from "../../ui/select";
import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../store/store";
import PlayerCard from "../playerCard";

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
  const playerCards = useSelector(
    (state: RootState) => state.playerCards.playerCards,
  );
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const options = Array.from({ length: numOfCards }, (_, index) => ({
    value: index.toString(),
    label: (index + 1).toString(),
  }));

  const handleSelectChange = (selectedValue: string) => {
    onChange(Number(selectedValue));
    setPreviewIndex(null);
  };

  return (
    <div className="relative">
      <Select
        options={options}
        value={value !== null ? value.toString() : ""}
        onChange={handleSelectChange}
        className="w-16"
        onOptionMouseEnter={(index) => setPreviewIndex(index)}
        onOptionMouseLeave={() => setPreviewIndex(null)}
      >
        <BarsArrowDownIcon className="h-6 w-6" />
      </Select>
      {previewIndex !== null && (
        <div className="absolute right-20 top-12 z-50">
          <PlayerCard cardInfo={playerCards[previewIndex]} id={previewIndex} />
        </div>
      )}
    </div>
  );
}

export default SelectOption;
