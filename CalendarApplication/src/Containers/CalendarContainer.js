import { connect } from 'react-redux';
import Calendar  from '../Components/Calendar';

const getDaysWithModals = (weeks) => {
    let bookedDays = []
    weeks.forEach((w) => {
        let result = w.Days.filter(day => day.openNewModal || day.bookingDetails.length > 0);
        bookedDays.push(...result)
    })

    return bookedDays;
}

const submitDataToServer = (dispatch) => {
    const form = document.getElementById("myForm");
    const XHR = new XMLHttpRequest();

    const FD = new FormData(form);

    XHR.addEventListener("load", function (event) {
        let result = event.target.responseText;
        let obj = JSON.parse(result);
        dispatch({ type: 'SAVENEWBOOKING', updatedData: obj })
    });

    XHR.addEventListener("error", function (event) {
        alert('Oops! Something went wrong.');
    });

    XHR.open("POST", "http://dev.mycalendar.com/home/UpdateBooking");

    XHR.send(FD)
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
        },
        saveNewBooking: () => {
            submitDataToServer(dispatch)
        }
    };
};


const mapStateToProps = (state) => {
    return {
        month: state.CalendarData.Weeks,
        daysOfTheWeek: state.CalendarData.DaysOfTheWeek,
        monthName: state.CalendarData.MonthName,
        days: getDaysWithModals(state.CalendarData.Weeks),
        loginId: state.LoginId
    }       
}

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
