// deps 
import * as DateFormat from "./date-format.js";

// elements
const hoursGrid = document.querySelector(".hours-grid");

// date formatters


// helper method for creating dom elements
const createElement = (name, ...content) => {
    const element = document.createElement(name);
    element.append(...content);
    return element;
};

// add hour markers to the grid
const createHourMarkers = () => {
    for(let i = 0; i < 24; i++) {
        const date = new Date();
        date.setHours(i, 0);
        const marker = createElement("div", DateFormat.formatTime(date));
        marker.classList.add("hour");
        marker.style.gridRow = `${i + 1} / ${i + 2}`;
        marker.style.gridColumn = "1 / -1";
        hoursGrid.append(marker);
    }
};

createHourMarkers();