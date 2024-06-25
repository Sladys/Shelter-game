import { useState } from "react";
import { CardInfo } from "../../../types/types";
import MainOptions from "./mainOptions";
import UpdateOptions from "./options/updateOptions";
import SwapOptions from "./options/swapOptions";
import UpdateAllOptions from "./options/updateAllOptions";
import Button from "../../ui/button";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../store/slices/gameMenuSlice";
import { RootState } from "../../../store/store";
import {
  swapCardProperty,
  updateAllCardsProperty,
  updateCardProperty,
} from "../../../store/slices/playerCardsSlice";
import { NUM_OF_CARDS } from "../../../const";

function GameMenu(): JSX.Element {
  const [currentAction, setCurrentAction] = useState<string | null>(null);
  const [selectedIndex1, setSelectedIndex1] = useState<number | null>(null);
  const [selectedIndex2, setSelectedIndex2] = useState<number | null>(null);
  const [property, setProperty] = useState<keyof CardInfo | "">("");
  const [warningMessage, setWarningMessage] = useState<string>("");

  const showMenu = useSelector((state: RootState) => state.gameMenu.showMenu);
  const dispatch = useDispatch();

  const resetActions = () => {
    setSelectedIndex1(null);
    setSelectedIndex2(null);
    setProperty("");
    setCurrentAction(null);
    setWarningMessage("");
  };

  const validateFields = (): boolean => {
    if (selectedIndex1 === null) {
      setWarningMessage("Номер игрока не выбран.");
      return false;
    }
    if (property === "") {
      setWarningMessage("Характеристика не выбрана.");
      return false;
    }
    return true;
  };

  const handleUpdateCardProperty = () => {
    if (selectedIndex1 !== null && property !== "") {
      dispatch(updateCardProperty({
        index: selectedIndex1,
        key: property as keyof CardInfo,
      }));
      resetActions();
    } else {
      validateFields();
    }
    console.log()
  };

  const handleUpdateAllCardsProperty = () => {
    if (property !== "") {
      dispatch(updateAllCardsProperty(property as keyof CardInfo));
      resetActions();
    } else {
      setWarningMessage("Характеристика не выбрана.");
    }
  };

  const handleSwapProperty = () => {
    if (selectedIndex1 === null) {
      setWarningMessage("Номер первого игрока не выбран.");
    } else if (selectedIndex2 === null) {
      setWarningMessage("Номер второго игрока не выбран.");
    } else if (property === "") {
      setWarningMessage("Характеристика не выбрана.");
    }
    if (selectedIndex1 !== null && selectedIndex2 !== null && property !== "") {
      if (selectedIndex1 === selectedIndex2) {
        setWarningMessage("Номера участников не должны совпадать.");
        return;
      }
      dispatch(swapCardProperty({
        index1: selectedIndex1,
        index2: selectedIndex2,
        property: property as keyof CardInfo,
      }));
      resetActions();
    }
  };

  const openMenu = () => dispatch(toggleMenu());
  const closeMenu = () => dispatch(toggleMenu());

  return (
    <>
      <Button onClick={openMenu}>
        <Bars4Icon className="h-6 w-6" />
      </Button>

      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-gray-200 shadow-lg transition-transform duration-300 dark:bg-gray-800 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <Button onClick={closeMenu} className="absolute right-4 top-4">
            <XMarkIcon className="h-6 w-6" />
          </Button>

          <h2 className="mb-10 mt-2 text-xl font-bold">Админ панель</h2>
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
              numOfCards={NUM_OF_CARDS}
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
              numOfCards={NUM_OF_CARDS}
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
