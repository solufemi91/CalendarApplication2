export const initialState = {
    BookingDetails: [],
    CalendarData: [],
    FirstName: "",
    LastName: ""
};


export const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return Object.assign(state, action.data);
        case 'ADDMONTH':
            return state - 1;
        default:
            return state;
    }
};