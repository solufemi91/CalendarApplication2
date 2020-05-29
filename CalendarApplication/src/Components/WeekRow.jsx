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
                                    <a onClick={() => this.props.openModal(day.number)}>{bk.EventName}</a>
                                </p>
                                <div id="myModal" className="modal" style={{ display: bk.OpenModal ? "block" : "none" }}>

                                    <div className="modal-content">
                                        <span onClick={() => this.props.closeModal(day.number)} className="close">&times;</span>
                                        <p>Location: {bk.Location}</p>
                                        <p>Description: {bk.Description}</p>
                                        <p>Start time: {Date(parseInt(bk.StartTime.substr(6)))}</p>
                                        <p>End time: {Date(parseInt(bk.EndTime.substr(6)))}</p>
                                    </div>

                                </div>
                            </div>

                        }
                    })

                    return <td id={day.highlight ? "currentDayHighlighted" : ""} className="boxes" key={index}>
                        {day.number != 0 ? day.number : ""}
                        {events}
                    </td>
                })}
            </tr>
        );
    }
 

}

export default WeekRow;