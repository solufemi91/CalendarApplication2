//import React from 'react';
//import ReactDOM from 'react-dom';

class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "This is my react-calendar"
        };
    }

    render(){
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}


const domContainer = document.querySelector('#root-react');
ReactDOM.render(<CalendarContainer/>, domContainer);