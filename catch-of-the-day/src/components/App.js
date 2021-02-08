import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
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

        const fishes = Object.keys(this.state.fishes)
                        .map(key => <Fish key={key} details={this.state.fishes[key]}/>);
        


        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Les fruit de mer"/>
                    <ul>
                        {fishes}
                    </ul>
                   
                </div>
                <Order />
                <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes.bind(this)}/>
               
            </div>
        );
    }
}

export default App;