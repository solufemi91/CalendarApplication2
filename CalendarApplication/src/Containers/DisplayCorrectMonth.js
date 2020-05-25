import { connect } from 'react-redux';
import { CalendarContainer } from '../Components/CalendarContainer';

const getCurrentMonth = (calendarData) => {
    return calendarData.filter(t => t.completed === "October");
};


const mapDispatchToProps = dispatch => {
    return {
        weeks: id => {
            dispatch({ type: 'GETMONTH', id: id });
        }
    };
};


const mapStateToProps = state => {
    return {
        weeks: getCurrentMonth(state.CalendarData)
    };
};

const currentMonthContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);

export default currentMonthContainer;
