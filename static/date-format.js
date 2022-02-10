let timeFormat = new Intl.DateTimeFormat([], {timeStyle: "short"});

export const formatTime = date => timeFormat.format(date);