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
                        <form id="myForm">                          
                            <input type="text" id="LoginId" name="loginId" value={this.props.loginId} style={{ display: "none" }} readOnly></input>
                            <label>Date:</label>
                            <input type="text" id="Date" name="date" value={this.props.day.date} readOnly></input>
                            <label>Event name:</label>
                            <input type="text" id="EventName" name="EventName"></input>
                            <label>Description:</label>
                            <input type="text" id="Description" name="Description"></input>
                            <label>Location:</label>
                            <input type="text" id="Location" name="Location"></input>
                            <label>Start time:</label>
                            <input type="text" id="StartTime" name="StartTime"></input>
                            <label>End time:</label>
                            <input type="text" id="EndTime" name="EndTime"></input>

                            <input onClick={this.props.saveNewBooking} defaultValue="Submit"></input>
                        </form> 
                    </div>    
                </div>
            )
        }
      
    }
}

export default BookingModal;