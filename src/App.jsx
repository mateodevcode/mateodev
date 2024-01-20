import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import PortafolioPage from "./pages/PortafolioPage";
import SobreMiPage from "./pages/SobreMiPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="mateodev">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portafolio" element={<PortafolioPage />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
