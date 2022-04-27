class VisibilityToggleable {

    constructor(id) {
        this.element = document.getElementById(id);
    }

    show() {
        this.element.style.display = "";
    }

    hide() {
        this.element.style.display = "none";
    }

}

class DayView extends VisibilityToggleable {

    constructor() {
        super("day-view");
        this.hoursGrid = document.getElementById("hours-grid");
        this.addHourMarkers();
    }

    addHourMarkers() {
        for(let i = 1; i <= 24; i++) {

            // create date
            const date = new Date();
            date.setHours(i, 0);
            
            // add marker
            const marker = document.createElement("div");
            marker.classList.add("hour");
            marker.textContent = FORMATS.TIME.format(date);
            marker.style.gridRow = `${i} / ${i + 1}`;
            marker.style.gridColumn = "1 / -1";
            this.hoursGrid.append(marker);
        
        }
    }

    onEventUpdate(event) {
        // TODO
    }

    update(date) {
        
    }

}

class WeekView {

}

class MonthView extends VisibilityToggleable {

    constructor() {
        super("month-view");
        this.headings = document.getElementById("calendar-headings");
        this.body = document.getElementById("calendar-body");
        this.createHeadings();
    }

    createHeadings() {
        // we use the Intl module to generate weekday names using a hardcoded date (Mon 1 Jun 2020)
        for(let i = 0; i < 7; i++) {

            // add the header
            const date = new Date(2020, 5, i);
            const header = document.createElement("div");
            header.classList.add("header");
            this.headings.append(header);

            // add two headings; which one is displayed depends on the width of the screen
            const wide = document.createElement("span");
            wide.classList.add("wide");
            wide.textContent = FORMATS.WEEKDAY.format(date);
            header.append(wide);

            const narrow = document.createElement("span");
            narrow.classList.add("narrow");
            narrow.textContent = FORMATS.WEEKDAY_NARROW.format(date);
            header.append(narrow);

        }
    }

    onEventUpdate(event) {
        // TODO
    }

    populate(date) {

        // get the first day of the month
        const firstDayOfMonth = new Date(date).setDate(1);

        // find the first sunday 
        const firstSunday = new Date(firstDayOfMonth);
        while(firstSunday.getDay() !== 0) {
            firstSunday.setDate(firstSunday.getDate() - 1);
        }

        // move through days of the month
        let curDate = firstSunday;
        while(true) {

            // add
            const cell = document.createElement("div");
            cell.classList.add("calendar-cell");
            this.body.append(cell);

            // populate the cell
            if(curDate.getDate() == 1) {
                cell.textContent =  FORMATS.DAY_OF_MONTH_LONG.format(curDate);
                cell.style.fontWeight = 500;   
            } else {
                cell.textContent = FORMATS.DAY_OF_MONTH_SHORT.format(curDate);
            }

            // give weekends special treatment
            if(curDate.getDay() == 0 || curDate.getDay() == 6) {
                cell.classList.add("weekend");
            }

            // if the date is a saturday (last column) and the next day is a different month, exit
            const nextDate = new Date(curDate);
            nextDate.setDate(nextDate.getDate() + 1); 
            if(curDate.getDay() == 6 && nextDate.getMonth() != date.getMonth()) {
                break;
            }

            // increment
            curDate = nextDate;

        }

    }

    update(date) {
        this.populate(date);
    }

}

class YearView {

}

class ScheduleView {

}