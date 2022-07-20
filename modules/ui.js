import Store from './store';

export default class Ui {
  static addTask = (task) => {
    const ListWrapper = document.querySelector('.tdList');
    const ListElement = document.createElement('li');
    ListElement.setAttribute('data-index', task.index);
    ListElement.innerHTML = `<div class = "flex"><input id="task" type="checkbox">
    <label for="task"><span class="checkbox"></span>${task.Description}
    </label></div><i class="bi bi-trash"></i>`;
    ListWrapper.appendChild(ListElement);
  }

  static DisplayTasks = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach((task) => {
      this.addTask(task);
    });
  }

  static removeTask = () => {
    document.querySelector('.bi-trash').addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
  }
}