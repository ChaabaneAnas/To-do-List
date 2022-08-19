/**
 * @jest-environment jsdom
 */

import Store from '../modules/store';
import Update from '../modules/Update';


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

describe('To do list testing part 2', () => {
  test('UpdateValue Should Edit Task.Description', () => {
    const id = 2;
    const newValue = 'anas';
    Update.updateStatue(id, newValue);
    const Tasks = Store.getTasks();
    // eslint-disable-next-line no-underscore-dangle
    expect(localStorage.__STORE__).toBe('anas');
  });
});
