import TableHeader from './TableHeader';
import WeekRow from './WeekRow';
import React from 'react'


class Calendar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
           return (
                <div>
                   <h1>{this.currentDate}</h1>
                   <h2>{this.props.monthName}</h2>
                   <button onClick={this.props.minusMonth} type="button">Previous Month</button>
                   <button onClick={this.props.addMonth} type="button">Next Month</button>
                    <table>
                       <TableHeader days={this.props.daysOfTheWeek} />
                       <tbody>
                           {this.props.month.map((week, index) => {
                               if (week) {
                                   return <WeekRow openModal={this.props.openModal} closeModal={this.props.closeModal} monthName={this.props.monthName} days={week.Days} key={index} />
                               }
                           })}
                       </tbody>
                    </table>
                </div>
            );
    }
 
}

export default Calendar;