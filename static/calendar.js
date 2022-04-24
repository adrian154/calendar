import Actor from "./actor.js";

export const Frequency = Object.freeze({
    DAILY: "Daily",
    WEEKLY: "Weekly",
    MONTHLY: "Monthly",
    ANNUALLY: "Annually",
    ONCE: "Only Once"
});

export class CalendarEvent extends Actor {

    // falsey `duration` indicates the event is all day
    constructor(title, notes, frequency, startDate, duration) {
        super();
        this.update(title, notes, frequency, startDate, duration);
    }

    update(title, notes, frequency, startDate, duration) {
        
        // set properties
        this.title = title;
        this.notes = notes;
        this.duration = duration;
        this.frequency = frequency;
        this.startDate = startDate;

        // publish event
        this.emit("event update", this);

    }

    // determine when the event starts/ends on a given day
    // limitation: recurring events cannot be longer than 24 hours, otherwise really bad stuff starts to happen
    getDuration(date) {

        const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

        if(this.frequency === Frequency.ONCE) {
            
            if(startOfDay > this.startDate)

        }

    }

    destroy() {
        this.emit("event destroy", this);
        super.destroy();
    }

}