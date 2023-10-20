/*
    Aislinn Richardson
    301146892
    App.js
    10/19/23
*/
class ProductForm extends React.Component {
    //form information
    state = {
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    };

    //uodates state of inout 
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    //submits form and logs info to console
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data: ', this.state);
        console.log('testing if button invokes'); //button will not log to console
    };
    
    //clears form
    handleCancel = () => {
        this.setState ({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        });
    };

    //renders form 
    render() {
        return (
        <div title="Outer div">
            <h1>New Product</h1>
            <div id="form">
                <form onSubmit = {this.handleSubmit}>
                    <div id="formContent">
                        <div><label>Name:  </label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>

                        <div><label>Description:  </label>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /></div>

                        <div><label>Category:  </label>
                            <input type="text" name="category" value={this.state.category} onChange={this.handleChange} /></div>

                        <div><label>Quantity:  </label>
                            <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} /></div>

                        <div><label>Price:  </label>
                            <input type="number" name="price" value={this.state.price} onChange={this.handleChange} /></div>
                    </div>

                    <div id="buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick = {this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<ProductForm />, document.getElementById('contents'));
