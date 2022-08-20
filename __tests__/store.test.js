/**
 * @jest-environment jsdom
 */

/* eslint-disable no-underscore-dangle */

import Store from '../modules/store';

function taskElem(task) {
  const html = `<div class="todo-item">
          <div>
          <input id="${task.index}" class="todo-check" type="checkbox" ${task.completed} />
          <input id="${task.index}" class="todo-edit" type="text" value="${task.Description}" />
          </div>
          <button id="${task.index}" class="remove-btn"> <i class="fas fa-trash"></i></button>
          </div>
      `;
  return html;
}

describe('storeTesting add & remove', () => {
  test('addFunctionality', () => {
    const ListHtml = `
    <ul class="todo-container">
    </ul>
  `;
    document.body.insertAdjacentHTML('afterbegin', ListHtml);
    const containerElem = document.querySelector('.todo-container');

    let task = { Description: 'testingAdd1', index: 1, completed: false };
    Store.setTask(task);
    const Tasks = Store.getTasks();
    containerElem.insertAdjacentHTML('afterbegin', taskElem(task));

    expect(localStorage.setItem).toHaveBeenLastCalledWith('Tasks', JSON.stringify(Tasks));
    expect(JSON.parse(localStorage.__STORE__.Tasks)[0]).toEqual((task));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    expect(containerElem.children.length).toBe(1);

    task = { Description: 'testingAdd2', index: 2, completed: false };
    Store.setTask(task);
    containerElem.insertAdjacentHTML('afterbegin', taskElem(task));

    expect(JSON.parse(localStorage.__STORE__.Tasks)[1]).toEqual((task));
    expect(containerElem.children.length).toBe(2);

    task = { Description: 'testingAdd3', index: 3, completed: false };
    Store.setTask(task);
    containerElem.insertAdjacentHTML('afterbegin', taskElem(task));

    expect(JSON.parse(localStorage.__STORE__.Tasks)[2]).toEqual((task));
    expect(containerElem.children.length).toBe(3);
  });

  test('Number of items should be 2 ', () => {
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
      });
    });

    document.querySelector('button[id="2"]').click();
    Store.deleteTask(2);
    const containerElem = document.querySelector('.todo-container');
    expect(containerElem.children.length).toBe(2);
  });
});

module.exports = Store;
