import React from "react";
import AddFish from "./AddFish";
import EditFish from "./EditFish";
import Login from "./Login";
import firebase from "firebase";
import {firebaseApp} from "../base";
class Inventory extends React.Component {

    auth = (type) => {

        const provider = new firebase.auth[`${type}AuthProvider`]();
        console.log({provider})
    }


    render() {
        return (
            <React.Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    <Login auth={this.auth}/>
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