import { CalendarBuilder } from '../CalendarBuilder';
import { cloneDeep } from "lodash";

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
        case 'OPENMODAL':
            let clonedState = cloneDeep(state);
            let result = setModal(clonedState, action.dayNumber, 'Open')
            return Object.assign({}, state, result);
        case 'CLOSEMODAL':
            return Object.assign({}, state, setModal(state, action.dayNumber));
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
        Days: week.Days.map(d => Object.assign({}, d ,{
            number: d,
            highlight: (d === new Date().getDate()) && (month.MonthNumber === getCurrentMonth()),
            bookingDetails: bookingDetails.filter(b => (dateConverter(b.Date).getDate() === d) && (dateConverter(b.Date).getMonth() + 1 === month.MonthNumber))
        }))
    }))

    return todaysMonth
}


const setModal = (data, number, modalAction = null) => {
   
    data.CalendarData.Weeks.map(week => ({
        Days: week.Days.map(d => Object.assign({
            number: d.number,
            highlight: d.highlight,
            bookingDetails: updateModalState(d, number, modalAction)
        }))
    }))

    return cloneDeep(data);

}

const updateModalState = (day, number, modalAction) => {

    if (modalAction === "Open") {
        if (day.number === number) {
            day.bookingDetails[0].OpenModal = true
            return day.bookingDetails[0]
        }
        else {
            if (day.bookingDetails.length) {
                day.bookingDetails[0].OpenModal = false
            }
            return day.bookingDetails[0]
        }
    } else {
        if (day.number === number) {
            day.bookingDetails[0].OpenModal = false
            return day.bookingDetails[0]
        } else {
            return day.bookingDetails[0]
        }
          
    }
   
}

const dateConverter = (date) => {
    return new Date(parseInt(date.substr(6)))
}

const getCurrentMonth = () => {
    return new Date().getMonth() + 1
}




