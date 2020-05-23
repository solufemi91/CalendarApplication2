export class TableHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            daysOfTheWeek: this.props.days

        };

        this.tableHeaderBoxes = this.state.daysOfTheWeek.map((day, index) =>
            <td className="boxes" key={index}>{day}</td>
        );
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