import React from "react";
import PropTypes from "prop-types";
import {formatPrice} from "../helpers"
class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        addToOrder: PropTypes.func
    }
    render() {
        const {image, name, price, desc, status} = this.props.details;
        const inStock = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                   
                </h3>
                <p>{desc}</p>
                <button disabled={!inStock} onClick={this.props.addToOrder}>{inStock ? 'Add to Cart': 'Sold Out!'}</button>
            </li>
        )
    }
}

export default Fish