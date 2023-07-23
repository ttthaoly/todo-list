import React from "react";
import "./App.css";

import AddItem from "./components/add-item/add-item";
import TodoList from "./components/todo-list/todo-list";

class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	inputChange: "",
  	lists: [],
  	listsDone: [],
  	Done: "",
	};
  }
  handleChangeInput = (event) => {
	this.setState({ inputChange: event.target.value });
	// console.log("change", event.target.value);
  };
  handleAddItem = (event) => {
	if (!this.state.inputChange.length) {
  	return;
	}
	const inputChange = this.state.inputChange;
	const lists = [...this.state.lists];
	lists.push(inputChange);
	this.setState({
  	inputChange: "",
  	lists,
	});
  };
  handleRemoveTodo = (index) => {
	const lists = [...this.state.lists];
	console.log("index", index);
	lists.splice(index, 1);
	this.setState({
  	lists,
	});
  };
  handleRemoveDone = (index) => {
	const listsDone = [...this.state.listsDone];
	console.log("index", index);
	listsDone.splice(index, 1);
	this.setState({
  	listsDone,
	});
  };

  handleDoneTodo = (index) => {
	const lists = [...this.state.lists];
	const listsDone = [...this.state.listsDone];

	const Done = lists.slice(index, index + 1);
	listsDone.push(Done);
	lists.splice(index, 1);
	this.setState({
  	lists,
  	listsDone,
	});
  };

  render() {
	return (
  	<>
    	<AddItem
      	inputChange={this.state.inputChange}
      	lists={[...this.state.lists]}
      	onChange={this.handleChangeInput}
      	onClick={this.handleAddItem}
    	/>

    	<TodoList
      	Done={this.state.Done}
      	inputChange={this.state.inputChange}
      	lists={[...this.state.lists]}
      	listsDone={[...this.state.listsDone]}
      	onRemoveTodo={this.handleRemoveTodo}
      	onDone={this.handleDoneTodo}
      	onRemoveDone={this.handleRemoveDone}
    	/>
  	</>
	);
  }
}

export default App;

