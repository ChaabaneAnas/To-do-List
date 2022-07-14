class Store {
  static getTasks = () => {
  Let Tasks;
  if(localStorage.getItem('Tasks') === null){
    Tasks = []
  }
  else Tasks = JSON.parse(localStorage.getItem('Tasks'));
  return Tasks
  }

  static setTask = (task) => {
    const Tasks = getTasks();
    Tasks.push(task)
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static deleteTask = () => {
    const Tasks = getTasks();
    Tasks.slice(index, 1);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}
