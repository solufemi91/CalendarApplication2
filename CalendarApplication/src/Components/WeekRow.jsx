const WeekRow = (props) => {

    return (
        <tr>
            {props.days.map((day, index) =>
                <td id={day.highlight ? "currentDayHighlighted" : ""} className="boxes" key={index}>{day.number != 0 ? day.number : ""}</td>)}
        </tr>
    );

}

export default WeekRow;