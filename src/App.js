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

  onSetCompleted(id, isNowCompleted) {
    this.setState({
      items: this.state.items.map(item => 
        (id === item.id)
          ? {...item, completed: isNowCompleted}
          : item
      )
    });
  }

  onDeleted(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }
  
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <section>
          <h3>Items</h3>
          <List
            items={items}
            onSetCompleted={this.onSetCompleted.bind(this)}
            onDeleted={this.onDeleted.bind(this)}
          />
        </section>
      </div>
    );
  }
}

export default App;
