const dayView = new DayView();
const monthView = new MonthView();

monthView.update(new Date());

const onEventUpdate = event => {
    dayView.onEventUpdate(event);
};