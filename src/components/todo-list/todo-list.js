import React from "react";
// import ReactDOM from "react-dom/client";

import trash from "../../trash.png";
import "./todo-list.css";

function makeid(length) {
  let result = "";
  const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
	result += characters.charAt(Math.floor(Math.random() * charactersLength));
	counter += 1;
  }
  return result;
}

//-----------------------------------
class TodoList extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	lists: [],
  	listsDone: [],
	  count: 0,

	};
  }

//   static getDerivedStateFromProps(props, state) {
// 	console.log("getDerivedStateFromProps");
// 	if (props.lists.length < 6 || props.lists.length > 9) {
//   	return {
//     	lists: props.lists,
//     	listsDone: props.listsDone,
//   	};
// 	}
//   }
componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
	console.log("intervalId", intervalId);
  }
//   componentWillUnmount(){
//     clearInterval(intervalId);
//   }

//   shouldComponentUpdate(nextProps, nextState) {
// 	return (
//   	this.state.lists !== nextState.lists ||
//   	this.state.listsDone !== nextState.listsDone
// 	);
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
// 	// console.log("prevProps", prevProps.lists);
// 	console.log("state", this.state.lists);
// 	console.log("prevState", prevState.lists);
// 	return prevState.lists;
//   }
//   componentDidUpdate(prevProps) {
// 	console.log("componentDidUpdate", prevProps.lists);
	
//   }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return {
  // 	div1: "Before the update, the favorite was " + prevState.inputChange,
  //   };
  //   // this.setState({
  //   //   div1: "Before the update, the favorite was " + prevState.inputChange,
  //   // });
  // }
  // componentDidUpdate() {return { lists: props.lists, listsDone: props.listsDone };
  //   console.log("The updated favorite is", this.props.Done);
  //   // this.setState({
  //   //   div2: "The updated favorite is " + this.props.inputChange,
  //   // });
  // }
  //------------------------------------
  render() {
	const { count } = this.state;
	return (
  	<div className="container">
    	<div className="list">
			<div className="todo-list">
        		<h3>Todo List</h3>
        		{this.state.lists.map((data, index) => (
          		<div key={makeid(6)} className="todo">
            		<p>{data}</p>
            		<div className="check">
              		<a href="#home" className="trash" id="trash" onClick={() => {this.props.onRemoveTodo(index);
                	}}
              		>
                	<span>
                  	<img className="img" src={trash} alt="trash" />
                	</span>
              		</a>
              	<div>
            <div>
                  	<input
                    	id="checkbox"
                    	className="checkbox"
                    	name="checkbox"
                    	type="checkbox"
                    	placeholder="checkbox"
                    	onClick={() => {
                      	this.props.onDone(index);
                    	}}
                  	/>
                	</div>
              	</div>
            		</div>
          		</div>
        	))}
      		</div>
      		<div className="done-list">
        		<h3>Done List</h3>
        		{this.state.listsDone.map((data, index) => (
          		<div key={makeid(6)} className="todo">
            		<p>{data}</p>
            		<div className="check">
              		<a
                	href="#home"
                	className="trash"
                	id="trash"
                	onClick={() => {
                  	this.props.onRemoveDone(index);
                	}}
              		>
                		<span onClick={this.componentWillUnmount}>
                  		<img className="img" src={trash} alt="trash" />
                		</span>
              		</a>
            		</div>
          		</div>
        		))}
      		</div>
    	</div>
    	<div>
      		<p>Timer: {count}</p>
    	</div>
  	</div>
	);
  }

}


export default TodoList;
