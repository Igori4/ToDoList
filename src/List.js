import React from 'react'
import Menu from './Menu'

const List = (props) => {
  let {
    tasks,
    completedTask,
    countItems,
    removeTask,
    filterTasks,
    completed
  } = props;
  return <ul>
    {Object.keys(tasks).map((task) => {
      return (
        <li
          key={task}
          className={tasks[task] ? 'completed' : 'active'}>
          <button className="completeBtn"
            onClick={
              () => completedTask(task)
            }
          />
          {task}
          <button
            className="remove-task"
            onClick={() => {
              removeTask(task)
            }}
          >
            X
          </button>
        </li>
      )
    })}
    <li className="menu-item">
      {Object.keys(tasks).length ? 
      <Menu 
      countItems={countItems} 
      filterTasks = {filterTasks}
      completed = {completed}
      /> 
      : 
      null}
    </li>
  </ul>
}

export default List;