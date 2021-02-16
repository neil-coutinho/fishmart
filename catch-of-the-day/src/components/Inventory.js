import React from "react";
import AddFish from "./AddFish";
import EditFish from "./EditFish";
import Login from "./Login";
class Inventory extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    <Login />
                    <AddFish  addFish={this.props.addFish}/>
                    <button onClick={this.props.addSampleFishes}>Add Sample Fishes</button>
                    {
                        Object.keys(this.props.fishes)
                            .map(key => <EditFish fish={this.props.fishes[key]} removeFish={this.props.removeFish} editFish={this.props.editFish} key={key} fishKey={key}/>)
                         
                    }
                   
                </div>
            </React.Fragment>
            
        )
    }
}

export default Inventory;