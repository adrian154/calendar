const FORMATS = {
    TIME: new Intl.DateTimeFormat([], {timeStyle: "short"}),
    WEEKDAY: new Intl.DateTimeFormat([], {weekday: "long"}),
    DAY_OF_MONTH_LONG: new Intl.DateTimeFormat([], {month: "long", day: "numeric"}),
    DAY_OF_MONTH_SHORT: new Intl.DateTimeFormat([], {day: "numeric"})
};
