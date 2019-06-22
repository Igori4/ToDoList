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
      completed: {},
    };
  };

  addTask = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    if (event.target.value && this.state.countItems !== 10) {
      let eventValue = event.target.value;
      event.target.value = null;
      let copied = { ...this.state.tasks };
      let countTaks = this.countCompletedTasks(this.state.tasks)
      copied[eventValue] = false;
      let newAmount = countTaks + 1;
      this.setState({
          tasks: copied, 
          countItems: newAmount
        })
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
    let copyTasks = { ...this.state.tasks };
    delete copyTasks[task];
    this.setState({
      tasks: copyTasks,
      countItems: this.countCompletedTasks(this.state.tasks)
    })
  }

  removeCompletedTask = () => {
    let copyTasks = { ...this.state.tasks }
    for (const compl in copyTasks) {
      if (copyTasks[compl]) {
        delete copyTasks[compl]
      }
    }
    this.setState({
      tasks: copyTasks
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
            onKeyDown={this.addTask}
          />
          {Object.values(this.state.tasks).length ?
            <List
              tasks={this.state.tasks}
              completedTask={this.completedTask}
              countItems={this.state.countItems}
              removeTask={this.removeTask}
              filterTasks={this.filterTasks}
              completed={this.state.completed}
              removeCompletedTask={this.removeCompletedTask}
            /> :
            null
          }
        </div>
      </div>
    )
  };
};

export default ToDo;
