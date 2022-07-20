export default class Store {
  static getTasks = () => {
    let Tasks;
    if (localStorage.getItem('Tasks') === null) {
      Tasks = [];
    } else {
      Tasks = JSON.parse(localStorage.getItem('Tasks'));
    }
    return Tasks;
  }

  static setTask = (task) => {
    const Tasks = this.getTasks();
    Tasks.push(task);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static deleteTask = (el) => {
    const Tasks = this.getTasks();
    Tasks.forEach((task, i) => {
      if (el === task.index) {
        Tasks.splice(i, 1);
      }
      Tasks[i].index = i + 1;
    });
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}
