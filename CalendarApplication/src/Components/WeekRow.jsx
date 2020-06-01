class WeekRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                {this.props.days.map((day, index) => {
                    let events = day.bookingDetails.map((bk, index) => {
                        if (bk) {
                            return <div key={index}>
                                <p>
                                    {bk.EventName}
                                </p>
                            </div>

                        }
                    })

                    return <td onClick={() => this.props.openModal(day.number)} id={day.highlight ? "currentDayHighlighted" : ""} className="boxes" key={index}>
                        {day.number != 0 ? day.number : ""}
                        {events}
                    </td>
                })}
            </tr>
        );
    }
 

}

export default WeekRow;