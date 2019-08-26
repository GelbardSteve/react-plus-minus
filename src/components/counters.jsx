import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // //with this mthod componentDidUpdate, we can decide whether we should make
  // //an Ajax call to get new data based on the changes in props and state objects
  // componentDidUpdate(preprops, prestate) {
  //   console.log("preprops", preprops);
  //   console.log("prestate", prestate);
  //   if(preprops.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // }

  //componentWillUnmount
  componentWillMount() {
    console.log("counter - Unmount")
  }
  

  render() {

    const {onReset, counters, onDelete, onIncrement, onDecrease} = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
