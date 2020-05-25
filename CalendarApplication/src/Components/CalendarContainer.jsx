import  TableHeader  from './TableHeader';
import  WeekRow  from './WeekRow';

const CalendarContainer = (props) => {

    let data =  props.serverData.CalendarData.Years[0].Months[4].Weeks

    let weeks = data.map((week, index) =>
        <WeekRow days={week.Days} key={index} />
    );

   
    return (
        <table>
            <TableHeader days={props.serverData.CalendarData.DaysOfTheWeek} />
            {weeks}
        </table>
    );
}

export default CalendarContainer;