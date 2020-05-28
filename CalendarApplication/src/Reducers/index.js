import { CalendarBuilder } from '../CalendarBuilder';

export const initialState = {
    BookingDetails: [],
    CalendarData: {},
    FirstName: "",
    LastName: ""
};


export const Reducer = (state = initialState, action) => {

    let number
    if (state.CalendarData.Weeks) {
        number = state.CalendarData.MonthNumber;
    }
    
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, updateCalenderUI(action.data));
        case 'ADDMONTH':            
            number ++
            return Object.assign({}, state, updateCalenderUI(state, number));
        case 'MINUSMONTH':
            number --
            return Object.assign({}, state, updateCalenderUI(state, number));
        default:
            return state;
    }
};

const updateCalenderUI = (data, targetMonth = getCurrentMonth()) => {
    let calendarBuilder = new CalendarBuilder();
    let currentYear = new Date().getFullYear();

    let calendarData = calendarBuilder.GetMonth(targetMonth, currentYear);
 
    calendarData.DaysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    calendarData.Weeks = hydrateDayInstance(calendarData, data.BookingDetails) 
     
    return Object.assign(data, { CalendarData: calendarData })
}

const hydrateDayInstance = (month, bookingDetails) => {

    let filteredMonth = month.Weeks.filter(x => x !== null)

    let todaysMonth = filteredMonth.map(week => ({
        Days: week.Days.map(d => Object.assign({
            number: d,
            highlight: (d === new Date().getDate()) && (month.MonthNumber === getCurrentMonth()),
            bookingDetails: bookingDetails.filter(b => (dateConverter(b.Date).getDate() === d) && (dateConverter(b.Date).getMonth() + 1 === month.MonthNumber))
        }))
    }))

    return todaysMonth
}

const dateConverter = (date) => {
    return new Date(parseInt(date.substr(6)))
}

const getCurrentMonth = () => {
    return new Date().getMonth() + 1
}




