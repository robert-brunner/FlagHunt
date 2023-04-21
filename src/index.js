import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Hole } from "./rabbitHole";

import Flag from "./App";
import ListApp from "./ListApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Flag />
    <ListApp />
    <Hole/>
  </StrictMode>
);
