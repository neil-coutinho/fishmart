import React from "react";
import AddFish from "./AddFish";
import EditFish from "./EditFish";
import Login from "./Login";
import firebase from "firebase";
import base, {firebaseApp} from "../base";
class Inventory extends React.Component {

    state = {
        owner: null,
        uuid: null
    }

    authenticate = async (auth) => {
        console.log({auth})
        const uuid = auth.user.uid;
        const storeId = this.props.storeId
        const store = await base.fetch(storeId, {context: this});
        console.log({storeId, store})
        if(!store.owner) {
            //claim store
            await base.post(`${storeId}/owner`, {
                data: uuid
            });
        } else {
            //check agaist uuid
            if(store.owner === uuid) {
                console.log('You are the owner')
            }
        }


        this.setState({
            owner: store.owner,
            uuid
        })
    }

    auth = (type) => {

        const provider = new firebase.auth[`${type}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(provider)
            .then(this.authenticate);
        
    }

    logout = async () => {
        await firebaseApp.auth().signOut()
        this.setState({
            uuid: null
        })
    }



    render() {

        const logout = <button onClick={this.logout}>Logout</button>

        if(!this.state.uuid) {
            return (
                <React.Fragment>
                    <div className="inventory">
                    <Login auth={this.auth} />
                    </div>    
                </React.Fragment>

            )
           
        }

        if(this.state.uuid != this.state.owner) {
            return (
                <div className="inventory">
                    {logout}
                    <p>Sorry you are not the owner of this store</p>
                </div>
            )

        }


        return (
            <React.Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    
                    {logout}
                    
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