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
                   <div id="changeMonth">
                       <button class="monthButton" onClick={this.props.minusMonth} type="button">Previous Month</button>  
                       <h4 id="monthName" style={{ display: "inline" }}>{this.props.monthName + "  " + this.props.year}</h4>                                                
                       <button class="monthButton" onClick={this.props.addMonth} type="button">Next Month</button>
                   </div>
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