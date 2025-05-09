import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <CssBaseline>
    <App />
  </CssBaseline>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
