import React from "react";
import { getFunName, slugify } from "../helpers";
class StorePicker extends React.Component {

    storeName = React.createRef();
    onSubmit = ($event) => {
        $event.preventDefault();
        console.log(this.storeName.current.value)
         const name = slugify(this.storeName.current.value);
         this.props.history.push(`/store/${name}`);
   
    }
    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.onSubmit} >
                    <h2>Please enter a store</h2>
                    <input type="text" defaultValue={getFunName()} ref={this.storeName}/>
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
            
        )
    }
}

export default StorePicker;