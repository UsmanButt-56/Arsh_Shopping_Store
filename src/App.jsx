import "./App.css";
import Cards from "./Components/Cards/Cards";
import CardsDetail from "./Components/CardsDetail/CardsDetail";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Cards />}></Route>
            <Route path="/products/:id" element={<CardsDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
