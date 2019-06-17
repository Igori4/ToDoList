import React from 'react';
import filterTasks from './utils'
import './ToDo.css';
import List from './List';


class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.filterTasks = filterTasks;
    this.state = {
      tasks: {},
      countItems: 0,
      completed: {}
    };
  };

  showValue = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value && this.state.countItems !== 6) {
        let eventValue = event.target.value;
        event.target.value = '';
        this.setState(prevState => {
          let copied = { ...prevState.tasks };
          let countTaks = this.countCompletedTasks(this.state.tasks)
          copied[eventValue] = false;
          prevState.countItems = countTaks + 1;
          return { tasks: copied };
        })
      }
    }
  }

  completedTask = (task) => {
    this.setState(prevState => {
      if (prevState.tasks[task]) {
        prevState.countItems = prevState.countItems + 1;
        return prevState.tasks[task] = false;
      } else {
        prevState.countItems = prevState.countItems - 1;
        return prevState.tasks[task] = true;
      }
    })
  }

  countCompletedTasks = (tasks) => {
    let completedTasks = Object.values(tasks)
      .filter(task => !task)
    return completedTasks.length;
  }

  removeTask = (task) => {
    let copyTasks = this.state.tasks;
    delete copyTasks[task];
    this.setState({
      tasks: copyTasks,
      countItems: this.countCompletedTasks(this.state.tasks)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>todos</h1>
        <div className="list">
          <input
            className="taskAdder"
            autoFocus
            placeholder="What needs to be done?"
            onKeyDown={this.showValue}
          />
          {Object.values(this.state.tasks).length ?
            <List
              tasks={this.state.tasks}
              completedTask={this.completedTask}
              countItems={this.state.countItems}
              removeTask={this.removeTask}
              filterTasks={this.filterTasks}
              completed={this.state.completed}
            /> :
            null
          }
        </div>
      </div>
    )
  };
};

export default ToDo;
