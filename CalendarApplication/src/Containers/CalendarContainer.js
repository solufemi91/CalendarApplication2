import { connect } from 'react-redux';
import Calendar  from '../Components/Calendar';

const getCurrentMonth = (calendarData) => {
    let currentMonthName = getCurrentMonthName()
    if (calendarData.Years) {
        return calendarData.Years[0].Months.filter(m => m.MonthName === currentMonthName)[0].Weeks;
    }

    return []    
};

const getCurrentMonthName = () => {
    return new Date().toLocaleString('default', { month: 'long' });
}

const getDaysOfTheWeek = (calendarData) => {
    return calendarData.DaysOfTheWeek
}


const mapDispatchToProps = dispatch => {
    return {
        addMonth: () => {
            dispatch({ type: 'ADDMONTH'});
        }
    };
};


const mapStateToProps = state => {
    return {
        month: getCurrentMonth(state.CalendarData),
        daysOfTheWeek: getDaysOfTheWeek(state.CalendarData),
        monthName: getCurrentMonthName()
    }
    
}

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
