// Calendar logic goes here

const RepeatFrequency = {
    NEVER: "Never",
    DAILY: "Every Day",
    WEEKLY: "Every Week",
    MONTHLY: "Every Month",
    ANNUALLY: "Every Year"
};

class CalendarEvent {

    // if `duration` is falsey, it indicates that the event is all-day
    constructor(title, description, startDate, endDate, repeat, weekdays) {
        this.update(title, description, startDate, endDate, repeat, weekdays);
    }

    update(title, description, startDate, endDate, repeat, weekdays) {
        
        // set properties
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.repeat = repeat;
        this.weekdays = weekdays;

        // publish event
        onEventUpdate(this);

    }

}