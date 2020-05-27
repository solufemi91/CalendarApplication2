import { connect } from 'react-redux';
import WeekRow from '../Components/WeekRow';


const mapDispatchToProps = (dispatch) => {
    return {
        openModal: dayNumber => {
            console.log(dayNumber)
            dispatch({ type: 'OPENMODAL', dayNumber: dayNumber });
        },
        closeModal: dayNumber => {
            dispatch({ type: 'CLOSEMODAL', dayNumber: dayNumber });
        }

    };
};


const WeekRowContainer = connect(null,mapDispatchToProps)(WeekRow);

export default WeekRowContainer;
