class Store {
  static getTasks = () => {
    let Tasks;
    if (localStorage.getItem('Tasks') === null) {
      Tasks = [];
    } else Tasks = JSON.parse(localStorage.getItem('Tasks'));
    return Tasks;
  }

  static setTask = (task) => {
    const Tasks = getTasks();
    Tasks.push(task);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static deleteTask = () => {
    const Tasks = getTasks();
    Tasks.slice(index, 1);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}

class Ui {
  static addTask = (task) => {
    const ListWrapper = document.querySelector('.tdList');
    const ListElement = document.createElement('li');
    ListElement.innerHTML = `<input id="task" type="checkbox"><label for="task"><span class="checkbox"></span>${task.description}</label>`;
    ListWrapper.appendChild(ListElement);
  }

  static DisplayTasks = () => {
    const Tasks = getTasks();
    Tasks.forEach((task) => {
      this.addTask(task);
    });
  }
}