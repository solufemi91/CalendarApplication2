export const initialState = {
    BookingDetails: [],
    CalendarData: {},
    FirstName: "",
    LastName: ""
};


export const TestReducer = (state = initialState, action) => {

    let number
    if (state.CalendarData.Years) {
        number = state.CalendarData.Years[0].Months.filter(m => m.visible)[0].MonthNumber;
    }
    
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, setTargetMonthToTrue(action.data));
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