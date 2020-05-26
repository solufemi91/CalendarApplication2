import  TableHeader  from './TableHeader';
import  WeekRow  from './WeekRow';

const Calendar = ({ month, monthName, daysOfTheWeek, addMonth, minusMonth }) => {

    let weeks = month.map((week, index) => {
            if(week){
                return <WeekRow monthName={monthName} days={week.Days} key={index} />
            }           
        }
    );

    let currentDate = new Date().toLocaleDateString();
 
    return (
        <div>
            <h1>{currentDate}</h1>
            <h2>{monthName}</h2>
            <button onClick={minusMonth} type="button">Previous Month</button>
            <button onClick={addMonth} type="button">Next Month</button>
            <table>
                <TableHeader days={daysOfTheWeek} />
                {weeks}
            </table>
        </div>
    );
}

export default Calendar;