const WeekRow = (props) => {

    //let days = props.days.map((day, index) =>
    //    <td className="boxes" key={index}>{day.number}</td>
    //);

    return (
        <tr>
            {props.days.map((day, index) =>
                <td className="boxes" key={index}>{day.number}</td>)}
        </tr>
    );

}

export default WeekRow;