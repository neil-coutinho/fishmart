import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            fishes: {}
        }
    }
    addFish = (fish) => {
        console.log(fish)
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes,
        })
    }
    
    addSampleFishes() {
        this.setState({
            fishes: sampleFishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Les fruit de mer"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes.bind(this)}/>
               
            </div>
        );
    }
}

export default App;