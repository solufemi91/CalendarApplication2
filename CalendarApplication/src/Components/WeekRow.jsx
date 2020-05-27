const WeekRow = (props) => {

 

    let html = props.days.map((day, index) => {
            let events = day.bookingDetails.map((bk, index) => {
                if (bk) {

                 
                    return <div>
                        <p key={index}>
                            <a onClick={() => props.openModal(day.number)}>{bk.EventName}</a>
                        </p>
                        <div id="myModal" class="modal" style={{display: bk.ModalState}}>

                            <div class="modal-content">
                                <span class="close">&times;</span>
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
        }
    );

    return (
        <tr>
            {html}
        </tr>
    );

}

export default WeekRow;