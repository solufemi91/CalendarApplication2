const WeekRow = (props) => {

    let html = props.days.map((day, index) => {
        let events = day.bookingDetails.map((bk, index) => {
            if (bk) {
                return <p key={index}>{bk.EventName}</p>
            }
        })

            return <td id={day.highlight ? "currentDayHighlighted" : ""} className="boxes" key={index}>
                {day.number != 0 ? day.number : ""} 
                {events}
            </td>
        }
    );

    return (
        <tr>
            {html}
        </tr>
    );

}

export default WeekRow;