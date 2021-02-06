import React from "react";
class AddFish extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.nameRef.current.value)
        const fish = {
            name: this.getRefValue(this.nameRef),
            price: this.getRefValue(this.priceRef),
            status: this.getRefValue(this.statusRef),
            desc: this.getRefValue(this.descRef),
            image: this.getRefValue(this.imageRef),
        }

        console.log({fish})
    }

    getRefValue(ref) {
        return ref.current.value;
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.onSubmit}>
                
                <input ref={this.nameRef} type="text" name="name" placeholder="Fish Name"/>
                <input ref={this.priceRef} type="text" name="price" placeholder="150"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">In Stock</option>
                    <option value="sold-out">Sold Out</option>
                </select>
                <textarea name="desc"  ref={this.descRef} placeholder="e.g. Fish description">

                </textarea>
                <input type="text" name="image" placeholder="image url" ref={this.imageRef}/>
                <button type="submit"> +Add Fish</button>
            </form>
        )
    }
}

export default AddFish;