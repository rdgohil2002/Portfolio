import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BubbleCursor from "./Portfolio/PDF/BubbleCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BubbleCursor />
    <App />
  </StrictMode>
);
