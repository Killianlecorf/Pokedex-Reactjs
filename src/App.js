import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<PokemonDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
