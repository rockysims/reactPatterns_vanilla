import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todoItems => {
        //todoItems[] = {userId, id, title, completed}
        this.setState({
          items: todoItems.slice(0, 10)
        });
      });
  }
  
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <div className="main">
          <section>
            <h3>Items</h3>
            <List items={items} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
