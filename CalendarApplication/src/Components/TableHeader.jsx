class TableHeader extends React.Component {

    constructor(props) {

        super(props);

        this.tableHeaderBoxes = this.props.days.map((day, index) =>
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

export default TableHeader;