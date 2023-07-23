import React from "react";

import "./add-item.css";
class AddItem extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	changes: "",
	};
  }
  static getDerivedStateFromProps(props, state) {
	return { changes: props.inputChange };
  }

  render() {
	// const { change } = this.props;
	return (
  	<div className="container">
    	<h2>My Todos</h2>
    	<div className="add-items">
      	<input
        	id="add-item"
        	className="add-item"
        	name="add-item"
        	type="text"
        	value={this.state.changes}
        	placeholder="add item"
        	onChange={this.props.onChange}
      	/>
      	<button type="button" id="myBtn" onClick={this.props.onClick}>
        	<p className="text">Add</p>
      	</button>
    	</div>
  	</div>
	);
  }
}

export default AddItem;
