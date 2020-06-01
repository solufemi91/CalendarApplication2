﻿import { connect } from 'react-redux';
import Calendar  from '../Components/Calendar';

const getDays = (weeks) => {
    let bookedDays = []
    weeks.forEach((w) => {
        let result = w.Days.filter(d => d.bookingDetails.length > 0);
        bookedDays.push(...result)
    })

    return bookedDays;
}



const mapDispatchToProps = (dispatch) => {
    return {
        addMonth: () => {
            dispatch({ type: 'ADDMONTH'});
        },
        minusMonth: () => {
            dispatch({ type: 'MINUSMONTH'});
        },
        openModal: dayNumber => {
            dispatch({ type: 'OPENMODAL', dayNumber: dayNumber });
        },
        closeModal: dayNumber => {
            dispatch({ type: 'CLOSEMODAL', dayNumber: dayNumber });
        }
    };
};


const mapStateToProps = (state) => {
    return {
        month: state.CalendarData.Weeks,
        daysOfTheWeek: state.CalendarData.DaysOfTheWeek,
        monthName: state.CalendarData.MonthName,
        days: getDays(state.CalendarData.Weeks)
    }       
}

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
