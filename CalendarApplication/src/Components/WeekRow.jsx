const WeekRow = (props) => {

    let days = props.days.map((day, index) =>
        <td className="boxes" key={index}>{day}</td>
    );

    return (
        <tr>
            {days}
        </tr>
    );

}

export default WeekRow;