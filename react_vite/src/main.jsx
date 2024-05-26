import reactDom from "react-dom/client";
// import * as Component from "./App";
import App from "./App";
// always use first letter capital while importing component

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App />);
