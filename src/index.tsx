import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileStart } from "./screens/MobileStart";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MobileStart />
  </StrictMode>,
);