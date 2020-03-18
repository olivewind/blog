import React from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_TODO, TodoStore, } from '../../stores';
import { Todo, } from '../../components';

@inject(STORE_TODO)
@observer
class TodoListClassPage extends React.Component<{ [STORE_TODO]: TodoStore }> {
  addNewTodo = () => {
    this.props[STORE_TODO].addNewTodo();
  }
  render() {
    const { todos, undoneCount, doneCount } = this.props[STORE_TODO];
    return (
      <div>
        <div>
          Done: {doneCount}
          &nbsp;
          &nbsp;
          Undone: {undoneCount}
        </div>
        <br />
        {
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onRemove={this.props[STORE_TODO].removeById}
                switchStatus={this.props[STORE_TODO].toggleStatusById}
              />
            )
          })
        }
        <br />
        <button onClick={this.addNewTodo}>Add New</button>
      </div>
    );
  }
}


export default TodoListClassPage;
