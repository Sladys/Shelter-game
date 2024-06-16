import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../playerCard/playerCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
