/* eslint-disable */


class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            weeks: this.props.serverData.CalendarData.Years[0].Months[4].Weeks
        };

        this.weeks = this.state.weeks.map((week, index) =>
            <WeekRow days={week.Days} key={index}/>
        )

    }
   
    render() {
        return (
            <table>
                <TableHeader days={this.props.serverData.CalendarData.DaysOfTheWeek} />
                {this.weeks}
            </table>
        );
    }
}

class TableHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            daysOfTheWeek: this.props.days

        };

        this.tableHeaderBoxes = this.state.daysOfTheWeek.map((day, index) =>
            <td className="boxes" key={index}>{day}</td>
        )
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.tableHeaderBoxes}
                </tr>
            </thead>
        );
    }
}

class WeekRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            daysOfTheWeek: this.props.days

        };

        this.days = this.state.daysOfTheWeek.map((day, index) => 
            <td className="boxes" key={index}>{day}</td>
        )

    }

    render() {
        return (
            <tr>
                {this.days}
            </tr>
        );
    }
}






const domContainer = document.getElementById('calendarContainer');
const data = domContainer.getAttribute('data-react-model');
const obj = JSON.parse(data);
ReactDOM.render(<CalendarContainer serverData={obj} />, domContainer); 