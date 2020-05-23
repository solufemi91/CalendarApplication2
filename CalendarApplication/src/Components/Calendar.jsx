/* eslint-disable */
import { TestReducer } from '../Reducers'
import { createStore, compose } from 'redux'
import { CalendarContainer } from './CalendarContainer'

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    TestReducer, enhancers
);

const domContainer = document.getElementById('calendarContainer');
const data = domContainer.getAttribute('data-react-model');
const obj = JSON.parse(data);

store.dispatch({ type: 'INIT', data: obj })

ReactDOM.render(<CalendarContainer serverData={obj} />, domContainer); 