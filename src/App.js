import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: "",
      todoList: [],
      completedList: [],
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.inputReset = this.inputReset.bind(this);
  }

  changeHandler(e) {
    this.setState({
      currentTask: e.target.value,
    });
  }

  addHandler() {
    if (!this.state.currentTask.match(/^\s*$/)) {
      this.setState({
        todoList: [...this.state.todoList, this.state.currentTask],
      });
      this.inputReset();
    }
  }

  deleteHandler(key) {
    var removedItem = this.state.todoList.splice(key, 1);
    var newComList = [...this.state.completedList, ...removedItem];
    this.setState({
      todoList: this.state.todoList,
      completedList: newComList,
    });
    console.log(this.state.todoList);
    console.log(this.state.completedList);
  }

  inputReset() {
    this.setState({
      currentTask: "",
    });
  }

  render() {
    return (
      <div className="outer">
        <div className="inner">
          <h1 className="heading">ToDo Tasks List</h1>
          <div className="input-task">
            <input
              type="text"
              onChange={this.changeHandler}
              value={this.state.currentTask}
              placeholder="add your tasks....."
            />
            <button className="add-task" onClick={this.addHandler}>
              Add Task
            </button>
            <button className="reset-task" onClick={this.inputReset}>
              Clear Input
            </button>
          </div>

          <div className="tasks">
            <div className="todo">
              <h3>ToDo tasks</h3>
              <ul>
                {this.state.todoList.map((item) => (
                  <li
                    key={this.state.todoList.indexOf(item)}
                    onClick={() =>
                      this.deleteHandler(this.state.todoList.indexOf(item))
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="completed">
              <h3>Completed tasks</h3>
              <ul>
                {this.state.completedList.map((item) => (
                  <li key={this.state.completedList.indexOf(item)}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
