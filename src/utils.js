let filterTasks = (argument) => {
    let tasks = [
      ...document.querySelectorAll('.completed'),
      ...document.querySelectorAll('.active')];
    // let removeButton = [...document.querySelectorAll('.remove-task')]
    tasks.forEach(task => {
      if (argument !== 'all') {
        if (task.classList.contains(argument)) {
          task.hidden = false;
        } else {
          task.hidden = true;
        }
      } else {
        task.hidden = false;
      }
    })
  }

  export default filterTasks;