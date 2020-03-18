import React from 'react';
import { observer } from 'mobx-react';
import { useTodoStore } from '../../stores';
import { Todo } from '../../components';

function TodoListFnPage() {
  const { todos, undoneCount, doneCount, addNewTodo, removeById, toggleStatusById } = useTodoStore();
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
              onRemove={removeById}
              switchStatus={toggleStatusById}
            />
          )
        })
      }
      <br />
      <button onClick={addNewTodo}>Add New</button>
    </div>
  );
}

export default observer(TodoListFnPage);
