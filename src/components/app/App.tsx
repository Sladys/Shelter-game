import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../playerCard/playerCard";
import Abc from "../abc/abc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
      </Routes>
      <Routes>
        <Route path="/abc" element={<Abc />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
