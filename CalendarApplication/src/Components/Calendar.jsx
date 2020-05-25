import  TableHeader  from './TableHeader';
import  WeekRow  from './WeekRow';

const Calendar = ({ month, daysOfTheWeek }) => {

    let weeks = month.map((week, index) =>
        <WeekRow days={week.Days} key={index} />
    );
 
    return (
        <table>
            <TableHeader days={daysOfTheWeek} />
            {weeks}
        </table>
    );
}

export default Calendar;