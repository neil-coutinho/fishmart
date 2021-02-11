import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            fishes: {},
            orders: {}
        }
    }

    componentDidMount () {
        console.log('didMount')
        const { params } = this.props.match
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentDidUpdate() {
        console.log('didUpdate')
        console.log(this.state);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
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

    addToOrder = (fishKey) => {
        //console.log({fishKey})
        const orders = {...this.state.orders};
        orders[fishKey] = orders[fishKey]+1 || 1;
        this.setState({
            orders
        })
    }

    render() {
        console.log('didRender')
        const fishes = Object.keys(this.state.fishes)
                        .map(key => <Fish key={key} details={this.state.fishes[key]} fishKey={key} addToOrder={() => this.addToOrder(key)}/>);
        


        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Les fruit de mer"/>
                    <ul>
                        {fishes}
                    </ul>
                   
                </div>
                <Order fishes={this.state.fishes} orders={this.state.orders} />
                <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes.bind(this)}/>
               
            </div>
        );
    }
}

export default App;