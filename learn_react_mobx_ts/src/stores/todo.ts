import { action, observable, computed } from 'mobx';
import { ITodo } from '../types';

let id = 0;

export class TodoStore {
  @observable todos: ITodo[] = [];

  @computed get doneCount() {
    return this.todos.filter(todo => todo.done).length;
  }

  @computed get undoneCount() {
    return this.todos.filter(todo => !todo.done).length;
  }

  @action.bound addNewTodo() {
    const i = id++;
    const todo = {
      name: 'new task' + i,
      desc: 'new task' + i,
      id: i,
      done: false,
    };
    this.todos = [...this.todos, todo];
  }

  @action.bound removeById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @action.bound toggleStatusById(id: number) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }
}

export const STORE_TODO = 'todoStore';