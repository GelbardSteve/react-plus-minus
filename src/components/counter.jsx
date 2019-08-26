import React, { Component } from "react";

class Counter extends Component {
  // //display dynamic data
  // state = {
  //   value: this.props.count.value
  // };

  //   renderTags() {
  //       if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //       return <ul>{this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>;
  //   }

  //Just an example
  //   style={{fontSize: 30}}

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
          {/* {this.state.tags.length === 0 && 'Please fill the tags'}
        { this.renderTags() } */}
        </div>
        {/* {this.props.children} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
