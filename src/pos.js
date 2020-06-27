import React, { Component } from 'react';
class PosComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputFieldData: "",
      itemsList: ["Item 1"],
      cartsList: ["cart 1"]
    }
  }

  submitData = event => {
    event.preventDefault();
    let newValue = this.state.itemsList.concat(this.state.inputFieldData);
    this.setState({ itemsList: newValue });
    this.resetInputField();
  }

  inputFieldUpdate(evt) {
    this.setState({
      inputFieldData: evt.target.value
    })
  }

  addCart(event, index, data) {
    let newValue = this.state.cartsList.concat(data);
    this.setState({ cartsList: newValue })
    var array = [...this.state.itemsList];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ itemsList: array });
    }
  }

  deleteItem(event, index) {
    var array = [...this.state.itemsList];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ itemsList: array });
    }
  }

  removeCart(event, index) {
    var array = [...this.state.cartsList];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ cartsList: array });
    }
  }

  resetInputField(){
    this.setState({
      inputFieldData: ""
    })
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand"><b>POS APP</b></span>
          </nav>
        </div>
        <div className="row p-3">
          <div className="col-sm">
            <h5>ITEMS</h5>
            {this.state.itemsList &&
              <div className="pt-3">
                {this.state.itemsList.map((data, index) => (
                  <div className="p-2 col-sm-12" key={index}>
                    <div className="row">
                      <div className="col-sm">
                        {data}
                      </div>
                      <div className="col-sm">
                        <button className="btn btn-warning" onClick={(evt) => this.addCart(evt,index, data)}>
                          Add to cart
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={(evt) => this.deleteItem(evt, index)}>
                          Delete Item
                    </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
            <form onSubmit={this.submitData} className="pt-4 col-sm">
              <div className="row">
                <div className="form-group col-sm-8 pl-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Item Name"
                    value={this.state.inputFieldData}
                    onChange={(evt) => this.inputFieldUpdate(evt)}
                    required
                  />
                </div>
                <div className="col-sm">
                  <button type="submit" className="btn btn-primary">
                    Add Item
                </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm">
            <h5>CART</h5>
            {this.state.cartsList &&
              <div className="pt-3">
                {this.state.cartsList.map((data, index) => (
                  <div className="p-2" key={index}>
                    <div className="row">
                      <div className="col-sm-4">
                        {data}
                      </div>
                      <div className="col-sm">
                        <button type="submit" className="btn btn-danger" onClick={(evt) => this.removeCart(evt, index)}>
                          Remove From Cart
                    </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    );

  }
}
export default PosComponent;






