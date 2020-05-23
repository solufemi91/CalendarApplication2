import { TableHeader } from './TableHeader';
import { WeekRow } from './WeekRow';

export class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            weeks: this.props.serverData.CalendarData.Years[0].Months[4].Weeks
        };

        this.weeks = this.state.weeks.map((week, index) =>
            <WeekRow days={week.Days} key={index} />
        );

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