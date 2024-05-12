import React from "react";
import { createRoot } from "react-dom";
import ContactApp from "./ContactApp";

const element = <h1>Hello, world!</h1>;

const root = createRoot(document.getElementById("root"));

root.render(<ContactApp />);
