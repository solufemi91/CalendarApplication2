export const initialState = {
    BookingDetails: [],
    CalendarData: [],
    FirstName: "",
    LastName: ""
};


export const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, setTargetMonthToTrue(action.data));
        case 'ADDMONTH':
            let number = state.CalendarData.Years[0].Months.filter(m => m.visible)[0].MonthNumber;
            number ++
            return Object.assign({}, state, setTargetMonthToTrue(state, number));
        case 'MINUSMONTH':
            return Object.assign({}, state, setTargetMonthToTrue(action.monthNumber));
        default:
            return state;
    }
};


const setTargetMonthToTrue = (data = state, targetMonth = getCurrentMonth() ) => {
    data.CalendarData.Years[0].Months.forEach(m => Object.assign
        (m, { visible: assignVisibilityForMonth(m, targetMonth)})
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