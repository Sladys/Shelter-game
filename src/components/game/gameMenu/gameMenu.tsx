import { useState } from "react";
import { CardInfo } from "../../../types/types";
import MainOptions from "./mainOptions";
import UpdateOptions from "./updateOptions";
import SwapOptions from "./swapOptions";
import UpdateAllOptions from "./updateAllOptions";

type GameMenuProps = {
  updateCardProperty: (index: number, key: keyof CardInfo) => void;
  swapCardProperty: (
    index1: number,
    index2: number,
    property: keyof CardInfo,
  ) => void;
  updateAllCardsProperty: (key: keyof CardInfo) => void;
  numOfCards: number;
};

function GameMenu({
  updateCardProperty,
  swapCardProperty,
  updateAllCardsProperty,
  numOfCards,
}: GameMenuProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState<string | null>(null);
  const [selectedIndex1, setSelectedIndex1] = useState<number | null>(null);
  const [selectedIndex2, setSelectedIndex2] = useState<number | null>(null);
  const [property, setProperty] = useState<keyof CardInfo | "">("");
  const [warningMessage, setWarningMessage] = useState<string>("");

  const resetActions = () => {
    setSelectedIndex1(null);
    setSelectedIndex2(null);
    setProperty("");
    setCurrentAction(null);
    setWarningMessage("");
  };
  const toggleMenu = () => {
    resetActions();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    resetActions();
    setIsMenuOpen(false);
  };

  const handleUpdateCardProperty = () => {
    if (selectedIndex1 === null) {
      setWarningMessage("Номер игрока не выбран.");
    } else if (property === "") {
      setWarningMessage("Характеристика не выбрана.");
    }
    if (selectedIndex1 !== null && property !== "") {
      updateCardProperty(selectedIndex1, property as keyof CardInfo);
      resetActions();
    }
  };

  const handleSwapProperty = () => {
    if (selectedIndex1 === null) {
      setWarningMessage("Номер первого игрока не выбран.");
    } else if (selectedIndex2 === null) {
      setWarningMessage("Номер второго игрока не выбран.");
    } else if (property !== "") {
      setWarningMessage("Характеристика не выбрана.");
    }
    if (selectedIndex1 !== null && selectedIndex2 !== null && property !== "") {
      if (selectedIndex1 === selectedIndex2) {
        setWarningMessage("Номера участников не должны совпадать.");
        return;
      }
      swapCardProperty(
        selectedIndex1,
        selectedIndex2,
        property as keyof CardInfo,
      );
      resetActions();
    }
  };

  const handleUpdateAllCardsProperty = () => {
    if (property !== "") {
      setWarningMessage("Характеристика не выбрана.");
    }
    if (property !== "") {
      updateAllCardsProperty(property as keyof CardInfo);
      resetActions();
    }
  };

  return (
    <>
      <button
        className="top-50 fixed right-4 z-50 rounded bg-gray-600 p-2 text-white"
        onClick={toggleMenu}
      >
        Открыть
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-96 transform bg-gray-200 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            className="absolute right-4 top-4 rounded bg-gray-600 p-2 text-white"
            onClick={closeMenu}
          >
            Закрыть
          </button>
          <h2 className="mb-4 text-xl font-bold">Админ панель</h2>
          {warningMessage && (
            <div className="mb-4 rounded bg-red-200 p-2 text-red-800">
              {warningMessage}
            </div>
          )}
          {currentAction === null && (
            <MainOptions
              onUpdateClick={() => setCurrentAction("update")}
              onSwapClick={() => setCurrentAction("swap")}
              onUpdateAllClick={() => setCurrentAction("updateAll")}
            />
          )}
          {currentAction === "update" && (
            <UpdateOptions
              numOfCards={numOfCards}
              selectedIndex1={selectedIndex1}
              property={property}
              onSelectIndex1={setSelectedIndex1}
              onSelectProperty={setProperty}
              onUpdate={handleUpdateCardProperty}
              onBack={() => {
                setCurrentAction(null);
                resetActions();
              }}
            />
          )}
          {currentAction === "swap" && (
            <SwapOptions
              numOfCards={numOfCards}
              selectedIndex1={selectedIndex1}
              selectedIndex2={selectedIndex2}
              property={property}
              onSelectIndex1={setSelectedIndex1}
              onSelectIndex2={setSelectedIndex2}
              onSelectProperty={setProperty}
              onSwap={handleSwapProperty}
              onBack={() => {
                setCurrentAction(null);
                resetActions();
              }}
            />
          )}
          {currentAction === "updateAll" && (
            <UpdateAllOptions
              property={property}
              onSelectProperty={setProperty}
              onUpdateAll={handleUpdateAllCardsProperty}
              onBack={() => {
                setCurrentAction(null);
                resetActions();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default GameMenu;
