import React from "react";

class StorePicker extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <form className="store-selector">
                    <h2>Please enter a store</h2>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
            
        )
    }
}

export default StorePicker;