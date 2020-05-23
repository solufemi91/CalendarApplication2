export class WeekRow extends React.Component {

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