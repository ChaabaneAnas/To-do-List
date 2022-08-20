/**
 * @jest-environment jsdom
 */

/* eslint-disable no-underscore-dangle */

// eslint-disable-next-line no-unused-vars
import Store from './store.test';
import Update from '../modules/Update';

describe('To do list testing part 2', () => {
  test('UpdateValue Should Edit Task.Description', () => {
    let id = 1;
    let newValue = 'anas';
    Update.updateValue(id, newValue);
    document.querySelectorAll('.todo-edit')[1].value = newValue;
    expect(JSON.parse(localStorage.__STORE__.Tasks)[id].Description).toMatch('anas');

    id = 0;
    newValue = 'anas';
    Update.updateValue(id, newValue);
    document.querySelectorAll('.todo-edit')[0].value = newValue;
    expect(JSON.parse(localStorage.__STORE__.Tasks)[id].Description).toMatch('anas');
  });

  test('UpdateValue Should Edit Task.Description in the dom', () => {
    const container = document.querySelector('.todo-container');
    expect(container.children[1].querySelector('.todo-edit').value).toMatch('anas');
  });

  test('UpdateStatus Should changes Task.completed', () => {
    let id = 1;
    Update.updateStatue(id, false);
    document.querySelectorAll('.todo-check')[1].checked = false;
    expect(JSON.parse(localStorage.__STORE__.Tasks)[id].completed).toBeFalsy();

    id = 0;
    Update.updateStatue(id, true);
    document.querySelectorAll('.todo-check')[0].checked = true;
    expect(JSON.parse(localStorage.__STORE__.Tasks)[id].completed).toBeTruthy();
  });
  test('Clearing works fine', () => {
    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear';
    const alltoDo = document.querySelectorAll('.todo-check');
    clearBtn.addEventListener('click', () => {
      alltoDo.forEach((item) => {
        if (item.checked) {
          item.parentNode.parentNode.remove();
          Update.clear();
        }
      });
    });
    document.body.appendChild(clearBtn);
    clearBtn.click();
    const container = document.querySelector('.todo-container');
    expect(container.children.length).toBe(1);
  });
});
