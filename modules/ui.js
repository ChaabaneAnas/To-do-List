import Store from './store';

export default class Ui {
  static updateD = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach((task, i) => {
      const ListElements = document.querySelectorAll('li');
      ListElements[i].setAttribute('data-index', task.index);
    });
  }

  static addTask = (task) => {
    const ListWrapper = document.querySelector('.tdList');
    const ListElement = document.createElement('li');
    ListElement.setAttribute('data-index', task.index);
    ListElement.innerHTML = ` <div class = "flex"><input id="task" type="checkbox">
    <span class="checkbox"></span><input type="text" class = "edit" value="${task.Description}">
     </div><i class="bi bi-trash"></i>`;
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