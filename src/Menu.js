import React from 'react';

const Menu = (props) => {
  let {
    countItems,
    filterTasks,
    completed,
    removeCompletedTask
  } = props;
  return (
    <div className="menu">
      <p className="count-left-items">
        <span className="count-items">{countItems}</span>
        items left
      </p>
      <button onClick={() => {
        filterTasks('all')
      }}>All</button>
      <button onClick={() => {
        filterTasks('active')
      }}>Active</button>
      <button onClick={() => {
        filterTasks('completed')
      }}>Completed</button>
      {Object.keys(completed).length ?
        <button
          className="delete-completed-btn"
          onClick = {() => {
            removeCompletedTask()
          }}
        >
          Delete completed
        </button>
        :
        null}
    </div>
  );
}

export default Menu;
