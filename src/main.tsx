import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
// Remove dark mode if Lovable forces it
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("dark");
});
