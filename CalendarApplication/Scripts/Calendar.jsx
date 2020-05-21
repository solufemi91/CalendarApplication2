
class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }

    render() {
        return (
            <table>
                <TableHeader days={this.props.serverData.CalendarData.DaysOfTheWeek}/>
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



const domContainer = document.getElementById('calendarContainer');
const data = domContainer.getAttribute('data-react-model');
const obj = JSON.parse(data);
ReactDOM.render(<CalendarContainer serverData={obj} />, domContainer); 