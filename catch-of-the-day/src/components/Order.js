import React from "react";
import {formatPrice }from "../helpers";
class Order extends React.Component {
    render() {

        let total = 0;

        const {fishes, orders} = this.props;
        console.log({fishes, orders})
        total = Object.keys(orders)
                    .reduce((acc, fishKey) => {
                        const inStock = fishes[fishKey].status === 'available';
                        console.log(inStock);
                        let count = 0;
                        if(inStock) {
                          acc = acc + (orders[fishKey] * fishes[fishKey].price);
                        }

                        return acc;

                    }, 0);
        console.log({total})

        return (
            <React.Fragment>
                <div className="order-wrap">
                    <h2>Order</h2>
                    <div className="total">
                        Total: <strong>{formatPrice(total)}</strong>
                    </div>
                </div>
               
            </React.Fragment>
            
        )
    }
}

export default Order;