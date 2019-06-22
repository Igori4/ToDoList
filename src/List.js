import React from 'react'
import Menu from './Menu'

const List = (props) => {
  let {
    tasks,
    completedTask,
    countItems,
    removeTask,
    filterTasks,
    removeCompletedTask
  } = props;
  let completed = {};
  return <ul>
    {Object.keys(tasks).map((task) => {
      if (tasks[task]) {
        completed[task] = task;
      }

      return (
        <li
          key={task}
          className={tasks[task] ? 'completed' : 'active'}>
          <input
            type="checkbox"
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
          filterTasks={filterTasks}
          completed={completed}
          removeCompletedTask={removeCompletedTask}
        />
        :
        null}
    </li>
  </ul>
}

export default List;