import React from "react";


class EditFish extends React.Component {

    onChangeHandler = (e) => {
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        }

       
       this.props.editFish(this.props.fishKey, updatedFish);
    }


    render() {
        const {fish} = this.props
       return (
           <div className="fish-edit">
               <input  type="text" name="name" placeholder="Fish Name" onChange={this.onChangeHandler} value={fish.name}/>
                <input type="text" name="price" placeholder="150" value={fish.price} onChange={this.onChangeHandler}/>
                <select name="status" value={fish.status} onChange={this.onChangeHandler}>
                    <option value="available">In Stock</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="e.g. Fish description" value={fish.desc} onChange={this.onChangeHandler}></textarea>
                <input type="text" name="image" placeholder="image url" value={fish.image} onChange={this.onChangeHandler}/>

           </div>
       )
    }
}

export default EditFish