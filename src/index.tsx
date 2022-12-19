import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./services/i18n";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
