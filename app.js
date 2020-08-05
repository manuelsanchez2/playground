// import { createElement } from "./src/utils/elements.js"
import { createToggleButton } from "./src/components/toggleButton.js";
import { createTitle } from "./src/components/title.js";

const title = createTitle();
const toggleButton = createToggleButton();

document.body.append(title);
document.body.append(toggleButton);
