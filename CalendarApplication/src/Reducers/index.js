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
            return Object.assign({}, state, setTargetMonthToTrueInit(action.data));
        case 'ADDMONTH':            
            number ++
            return Object.assign({}, state, setTargetMonthToTrue(state, number));
        case 'MINUSMONTH':
            number --
            return Object.assign({}, state, setTargetMonthToTrue(state, number));
        default:
            return state;
    }
};


const setTargetMonthToTrueInit = (data = state, targetMonth = getCurrentMonth() ) => {
    data.CalendarData.Years[0].Months.forEach(m => {
        Object.assign
            (m, { Visible: assignVisibilityForMonth(m, targetMonth) }, { Weeks: setTodaysDate(m) })
        }
    )

    return data;
}

const setTargetMonthToTrue = (data = state, targetMonth = getCurrentMonth() ) => {
    data.CalendarData.Years[0].Months.forEach(m => {
        Object.assign
            (m, { Visible: assignVisibilityForMonth(m, targetMonth) })
        }
    )
    return data;
}


const setTodaysDate = (month) => {

    let filteredMonth = month.Weeks.filter(x => x !== null)

    let newMonth = filteredMonth.map(week => ({
        Days: week.Days.map(d => Object.assign({
            number: d,
            highlight: d === new Date().getDate()
        }))
    }))

    return newMonth    
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