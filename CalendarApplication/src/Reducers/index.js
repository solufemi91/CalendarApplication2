export const initialState = {
    BookingDetails: [],
    CalendarData: {},
    FirstName: "",
    LastName: ""
};


export const Reducer = (state = initialState, action) => {

    let number
    if (state.CalendarData.Years) {
        number = state.CalendarData.Years[0].Months.filter(m => m.Visible)[0].MonthNumber;
    }
    
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, setTodaysDateOnInit(action.data));
        case 'ADDMONTH':            
            number ++
            return Object.assign({}, state, setTargetMonthVisibility(state, number));
        case 'MINUSMONTH':
            number --
            return Object.assign({}, state, setTargetMonthVisibility(state, number));
        default:
            return state;
    }
};


const setTodaysDateOnInit = (data = state) => {
    let targetMonth = getCurrentMonth();
    data.CalendarData.Years[0].Months.forEach(m => {
        Object.assign
            (m, { Visible: assignVisibilityForMonth(m, targetMonth) }, { Weeks: hydrateDayInstance(m, data.BookingDetails) })
        }
    )

    return data;
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

const setTargetMonthVisibility = (data = state, targetMonth) => {
    data.CalendarData.Years[0].Months.forEach(m => {
        Object.assign
            (m, { Visible: assignVisibilityForMonth(m, targetMonth) })
        }
    )
    return data;
}


const assignVisibilityForMonth = (month, targetMonth) => {

    if (month.MonthNumber === targetMonth) {
        return true
    } else {
        return false
    }
}

const getCurrentMonth = () => {
    return new Date().getMonth() + 1
}