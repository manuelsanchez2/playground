import imageSnake from "./assets/serpiente.png";
import "../global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import { createElement } from "./utils/elements";

const title = createTitle();
const toggleButton = createToggleButton();
const image = createElement("img", {src: imageSnake, className: "snake"});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(image);
