const TableHeader = (props) => {

    let tableHeaderBoxes = props.days.map((day, index) =>
        <td className="boxes" key={index}>{day}</td>
    );

    return (
        <thead>
            <tr>
                {tableHeaderBoxes}
            </tr>
        </thead>
    );
}

export default TableHeader;