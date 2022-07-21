import Store from './store';

export default class Update {
  static UpdateI = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach((task, i) => {
      Tasks[i].index = i + 1;
    });
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static UpdateT = (el, e) => {
    const Tasks = Store.getTasks();
    Tasks[Number(e.target.parentElement.parentElement.dataset.index) - 1].Description = el;
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}