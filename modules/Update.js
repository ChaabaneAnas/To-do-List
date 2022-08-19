import Store from './store';

export default class Update {
  static UpdateI = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach((task, i) => {
      Tasks[i].index = i + 1;
    });
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static clear = () => {
    let Tasks = Store.getTasks();
    Tasks = Tasks.filter((task) => !task.completed);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static updateStatue = (id, newValue) => {
    let Tasks = Store.getTasks();
    // eslint-disable-next-line array-callback-return
    Tasks = Tasks.map((task, i) => {
      if (id === i) {
        task.completed = e.target.checked;
        localStorage.setItem('Tasks', JSON.stringify(Tasks));
      }
    });
  };

  static updateValue = (id, newValue) => {
    const Tasks = Store.getTasks();
    Tasks[id].Description = newValue;
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}