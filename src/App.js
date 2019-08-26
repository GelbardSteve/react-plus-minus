import React, { Component } from 'react';
import Nav from "./components/nav";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  constructor(){
    super();
    console.log('App - Constuctor');
  }

  componentDidMount() {
    //Ajax call
    console.log('App - Mounted');
  }

  handIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  onDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index].value--;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log('App - Render');
    return (
      <React.Fragment>
        <Nav totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handDelete}
            onIncrement={this.handIncrement}
            onDecrease={this.onDecrease}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
