import TableHeader from './TableHeader';
import WeekRow from './WeekRow';
import BookingModal from './BookingModal';
import React from 'react';


class Calendar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
           return (
                <div>
                   <h1>{this.props.year}</h1>
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

                   {this.props.days.map((d, index) =>
                       <BookingModal loginId={this.props.loginId} key={index} day={d} closeModal={this.props.closeModal} saveNewBooking={this.props.saveNewBooking} /> 
                   )}                                         

                   
                </div>
            );
    }
 
}

export default Calendar;