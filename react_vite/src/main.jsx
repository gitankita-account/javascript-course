import reactDom from "react-dom/client";
import App, { AppOne } from "./App";
const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
    <AppOne />
  </div>
);
