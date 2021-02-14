import React from "react";
import {formatPrice }from "../helpers";
class Order extends React.Component {


    renderOrders(fishes, orders) {
        const items = Object.keys(orders)
                        .map((fishKey) => {
                            const count = this.props.orders[fishKey];
                            const fish = this.props.fishes[fishKey];
                            const remove = <button onClick={() => this.props.removeFromOrder(fishKey)}>Remove</button>
                           
                            if(!fish) {
                                return (
                                    <li key={fishKey}>
                                       {fishKey} fish is no longer available
                                    </li>
                                )
                            }
                            const inStock = fish.status === 'available';
                            if(!inStock) {
                                return (
                                    <li key={fishKey}>
                                       {fish.name} is no longer available
                                    </li>
                                )
                            }
                            return (
                                
                                <li key={fishKey}>
                                    { count } lbs {fish.name} 
                                    { formatPrice((count*fish.price)) }
                                    {remove}
                                </li>
                            )
                        })
        return (
            <ul className="order">
               {items}
            </ul>
        )
    }
    render() {

        let total = 0;

        const {fishes, orders} = this.props;
        //console.log({fishes, orders})
        total = Object.keys(orders)
                    .reduce((acc, fishKey) => {

                        const fish = fishes[fishKey];
                        if(!fish) {
                            return acc;
                        }
                        const inStock = fish.status === 'available';
                        console.log(inStock);
                        let count = 0;
                        if(inStock) {
                          acc = acc + (orders[fishKey] * fish.price);
                        }

                        return acc;

                    }, 0);
        console.log({total})

        const ordersList = this.renderOrders(fishes, orders);

        return (
            <React.Fragment>
                <div className="order-wrap">
                    <h2>Order</h2>
                    {ordersList}
                    <div className="total">
                        Total: <strong>{formatPrice(total)}</strong>
                    </div>
                </div>
               
            </React.Fragment>
            
        )
    }
}

export default Order;