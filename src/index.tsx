import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MobileStart } from "./screens/MobileStart";
import { Referenzen } from "./screens/Referenzen";
import { Leistungen } from "./screens/Leistungen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MobileStart />} />
        <Route path="/referenzen" element={<Referenzen />} />
        <Route path="/leistungen" element={<Leistungen />} />
      </Routes>
    </Router>
  </StrictMode>,
);