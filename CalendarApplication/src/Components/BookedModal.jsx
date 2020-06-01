class BookedModal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div id="myModal" className="modal" style={{ display: this.props.day.bookingDetails[0].OpenModal ? "block" : "none" }}>
                <div className="modal-content">
                    <span onClick={() => this.props.closeModal(this.props.day.number)} className="close">&times;</span>
                    <p>Location: {this.props.day.bookingDetails[0].Location}</p>
                    <p>Description: {this.props.day.bookingDetails[0].Description}</p>
                    <p>Start time: {this.props.day.bookingDetails[0].StartTime}</p>
                    <p>End time: {this.props.day.bookingDetails[0].EndTime}</p>
                </div>

            </div>            
        );
    }
}

export default BookedModal;