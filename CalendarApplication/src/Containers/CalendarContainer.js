import { connect } from 'react-redux';
import Calendar  from '../Components/Calendar';

const getCurrentMonth = (calendarData) => {
    if (calendarData.Years) {
        return calendarData.Years[0].Months.filter(m => m.visible)[0];
    }

    return []    
};


const getDaysOfTheWeek = (calendarData) => {
    return calendarData.DaysOfTheWeek
}


const mapDispatchToProps = (dispatch) => {
    return {
        addMonth: () => {
            //let currentMonthNumber = getCurrentMonth(state.CalendarData).MonthNumber;
            //currentMonthNumber++;
            dispatch({ type: 'ADDMONTH'});
        },
        minusMonth: () => {
            //let currentMonthNumber = getCurrentMonth(state.CalendarData).MonthNumber;
            //currentMonthNumber--;
            dispatch({ type: 'MINUSMONTH'});
        }

    };
};


//const mapStateToProps = state => {
//    return {
//        month: getCurrentMonth(state.CalendarData).Weeks,
//        daysOfTheWeek: getDaysOfTheWeek(state.CalendarData),
//        monthName: getCurrentMonth(state.CalendarData).MonthName
//    }
    
//}

const mapStateToProps = state => ({
        month: getCurrentMonth(state.CalendarData).Weeks,
        daysOfTheWeek: getDaysOfTheWeek(state.CalendarData),
        monthName: getCurrentMonth(state.CalendarData).MonthName
})

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
