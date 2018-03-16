import React, { Fragment } from 'react'; 
import moment from 'moment';

class StorePicker extends React.Component {
    render() {
        return(
            <form className="store-selector">
            { /* This is a comment */}
                <h2>Please pick today's date</h2>
                <input type="text" required placeholder="Store Name" defaultValue={moment().format('MM-DD-YYYY')} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;