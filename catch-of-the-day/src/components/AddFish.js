import React from "react";
class AddFish extends React.Component {
    render() {
        return (
            <form className="fish-edit">
                
                <input type="text" name="name" placeholder="Fish Name"/>
                <input type="text" name="price" placeholder="150"/>
                <select name="status">
                    <option value="available">In Stock</option>
                    <option value="sold-out">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="e.g. Fish description">

                </textarea>
                <input type="text" name="image" placeholder="image url"/>
                <button type="submit"> +Add Fish</button>
            </form>
        )
    }
}

export default AddFish;