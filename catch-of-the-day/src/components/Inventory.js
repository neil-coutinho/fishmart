import React from "react";
import AddFish from "./AddFish";
class Inventory extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    <AddFish  addFish={this.props.addFish}/>
                    <button onClick={this.props.addSampleFishes}>Add Sample Fishes</button>

                </div>
            </React.Fragment>
            
        )
    }
}

export default Inventory;