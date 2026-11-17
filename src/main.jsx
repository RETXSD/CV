import "@fontsource/pixelify-sans/latin-400.css";
import "@fontsource/press-start-2p/latin-400.css";
import "@/styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
