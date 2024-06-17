import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { apocalypses } from "./mocks/apocalypseData";
import { bunkersData } from "./mocks/bunkerData";
import { playerCards } from "./mocks/cards";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App
      apocalypses={apocalypses}
      bunkersData={bunkersData}
      cardsInfo={playerCards}
    />
  </React.StrictMode>,
);
