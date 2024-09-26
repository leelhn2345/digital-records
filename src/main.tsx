/* eslint-disable @typescript-eslint/no-namespace */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_BACKEND_URL: string;
    }
  }
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
