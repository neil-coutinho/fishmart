import React from "react";
import AddFish from "./AddFish";
import EditFish from "./EditFish";
class Inventory extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    <AddFish  addFish={this.props.addFish}/>
                    <button onClick={this.props.addSampleFishes}>Add Sample Fishes</button>
                    {
                        Object.keys(this.props.fishes)
                            .map(key => <EditFish fish={this.props.fishes[key]} editFish={this.props.editFish} key={key} fishKey={key}/>)
                         
                    }
                   
                </div>
            </React.Fragment>
            
        )
    }
}

export default Inventory;