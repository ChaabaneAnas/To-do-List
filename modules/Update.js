import Store from './store';

export default class Update {
  static UpdateI = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach((task, i) => {
      Tasks[i].index = i + 1;
    });
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  };

  static clear = () => {
    let Tasks = Store.getTasks();
    Tasks = Tasks.filter((task) => !task.completed);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  };

  static updateStatue = (id) => {
    let Tasks = Store.getTasks();
    Tasks = Tasks.map((task, i) => {
      if (id === i) {
        task.completed = !task.completed;
        localStorage.setItem('Tasks', JSON.stringify(Tasks));
      }
      return undefined;
    });
  };

  static updateValue = (id, newValue) => {
    const Tasks = Store.getTasks();
    Tasks[id].Description = newValue;
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  };
}
