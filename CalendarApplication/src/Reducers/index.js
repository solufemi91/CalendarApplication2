export const initialState = {
    BookingDetails: [],
    CalendarData: [],
    FirstName: "",
    LastName: ""
};


export const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return Object.assign(state, setCurrentMonthToTrue(action.data));
        case 'ADDMONTH':
            return state - 1;
        default:
            return state;
    }
};


const setCurrentMonthToTrue = (data) => {
    data.CalendarData.Years[0].Months.forEach(m => Object.assign
        (m, { visible: assignVisibilityForMonth(m)})
    )

    return data;

}

const assignVisibilityForMonth = (month) => {
    let currentMonthName = getCurrentMonthName();

    if (month.MonthName === currentMonthName) {
        return true
    } else {
        return false
    }
}

const getCurrentMonthName = () => {
    return new Date().toLocaleString('default', { month: 'long' });
}