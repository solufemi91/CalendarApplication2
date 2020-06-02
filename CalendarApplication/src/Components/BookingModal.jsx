class BookingModal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.day.bookingDetails.length > 0) {
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
        else if (this.props.day.openNewModal) {
            return (
                <div id="myModal" className="modal" style={{ display: this.props.day.openNewModal ? "block" : "none" }}>
                    <div className="modal-content">
                        <span onClick={() => this.props.closeModal(this.props.day.number)} className="close">&times;</span>
                        <form action="/action_page.php">
                            <label>First name:</label>
                            <input type="text" id="fname" name="fname" value="John"></input>
                            <label>Last name:</label>
                            <input type="text" id="lname" name="lname" value="Doe"></input>
                            <input type="submit" value="Submit"></input>
                        </form> 
                    </div>    
                </div>
            )
        }
      
    }
}

export default BookingModal;