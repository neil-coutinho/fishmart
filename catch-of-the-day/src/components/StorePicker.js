import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
    onSubmit = ($event) => {
        $event.preventDefault();
        console.log(this);
        console.log($event)
    }
    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.onSubmit}>
                    <h2>Please enter a store</h2>
                    <input type="text" defaultValue={getFunName()}/>
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
            
        )
    }
}

export default StorePicker;