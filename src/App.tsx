import "./assets/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BudgetPage from "./pages/BudgetPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BudgetPage" element={<BudgetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
