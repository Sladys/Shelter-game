import { useDispatch, useSelector } from "react-redux";
import ApocalypseInfoComponent from "./apocalypseInfoComponent";
import BunkerInfoComponent from "./bunkerInfoComponent";
import { useEffect } from "react";
import { generateBunkerInfo } from "../../store/slices/bunkersSlice";
import { generateApocalypseInfo } from "../../store/slices/apocalypsesSlice";

function GameInfo(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateApocalypseInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(generateBunkerInfo());
  }, [dispatch]);

  return (
    <div className="grid w-full grid-cols-2 gap-4 rounded-lg border-2 border-indigo-500 bg-gray-100 p-4 dark:border-indigo-300 dark:bg-slate-700">
      <ApocalypseInfoComponent />
      <BunkerInfoComponent />
    </div>
  );
}

export default GameInfo;
