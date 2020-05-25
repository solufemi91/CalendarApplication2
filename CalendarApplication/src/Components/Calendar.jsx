import  TableHeader  from './TableHeader';
import  WeekRow  from './WeekRow';

const Calendar = ({ month, monthName, daysOfTheWeek }) => {

    let weeks = month.map((week, index) =>
        <WeekRow days={week.Days} key={index} />
    );

    let currentDate = new Date().toLocaleDateString();
 
    return (
        <div>
            <h1>{currentDate}</h1>
            <h2>{monthName}</h2>
            <button type="button">Previous Month</button>
            <button type="button">Next Month</button>
            <table>
                <TableHeader days={daysOfTheWeek} />
                {weeks}
            </table>
        </div>
    );
}

export default Calendar;