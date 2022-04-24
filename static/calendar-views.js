import Actor from "./actor.js";
import * as DateFormat from "./date-format.js";
import {createElement} from "./helpers.js";

export class DayView extends Actor {

    constructor() {

        super();

        // map events to their elements
        this.eventElements = new Map();
    
        // create elements
        this.hoursGrid = createElement("div", ["hours-grid"]);
        this.element = createElement("div", ["day-view"], this.hoursGrid);
        this.addHourMarkers();

        // register event handlers
        this.on("event update", () => this.onEventUpdate);
        this.on("event destroy", () => this.onEventDestroy());

    }

    addHourMarkers() {
        for(let i = 1; i <= 24; i++) {
            const date = new Date();
            date.setHours(i, 0);
            const marker = createElement("div", ["hour"], DateFormat.formatTime(date));
            marker.style.gridRow = `${i} / ${i + 1}`;
            marker.style.gridColumn = "1 / -1";
            this.hoursGrid.append(marker);
        }
    }

    onEventUpdate(event) {

        // figure out when the event starts and ends
        

    }

    onEventDestroy(event) {
        if(this.eventElements.has(event)) {
            const element = this.eventElements.get(event);
            element.remove();
            this.eventElements.delete(event);
        }
    }

}

export class MonthView {

}

export class YearView {

}