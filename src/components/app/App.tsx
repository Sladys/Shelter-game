import { BrowserRouter, Route, Routes } from "react-router-dom";
import Abc from "../abc/abc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/abc" element={<Abc />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
