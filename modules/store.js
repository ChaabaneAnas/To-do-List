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

  // [fixed] Do i follow js best practice

  static deleteTask = (el) => {
    let Tasks = this.getTasks();
    Tasks = Tasks.filter((task)=> task.index !== el);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}
