时长：预计 15 min
面向：用烦了 Redux  的开发者
代码：[仓库](https://github.com/olivewind/blog/blob/master/learn_react_mobx_ts)
版本：React 16.13 + TypeScript 3.7 +  Mobx 5.15 + Mobx-React 6.1

---
### 目标：

实现一个 Todo List 应用如下

![image](https://user-images.githubusercontent.com/17901361/76971823-b4db2f00-6968-11ea-908e-18817fc3062e.png)


### Step 1⃣️：创建一个 Store Model 

``` ts
//  ./src/stores/todo.ts
import { action, observable, computed } from 'mobx';

export interface ITodo {
  id: number;
  name: string;
  desc: string;
  done?: boolean;
}

let id = 0;

export class TodoStore {
  @observable todos: ITodo[] = [];

  // 利用计算属性计算完成个未完成个数
  @computed get doneCount() {
    return this.todos.filter(todo => todo.done).length;
  }

  @computed get undoneCount() {
    return this.todos.filter(todo => !todo.done).length;
  }

  // 添加一个 Todo
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

  // 删除一个 Todo
  @action.bound removeById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // 切换 done 状态
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
```

### Step 2⃣️：导出 Store

``` ts
// ./src/stores/index.ts
import { createContext, useContext } from 'react';
import { STORE_TODO, TodoStore } from './todo';

function createStores() {
  return {
    [STORE_TODO]: new TodoStore(),
  };
}

const stores = createStores();

const StoresContext = createContext(stores);

// hooks 使用笔记看这里 -> https://github.com/olivewind/blog/issues/1
const useStores = () => useContext(StoresContext);

function useTodoStore() {
  const { todoStore } = useStores();
  return todoStore;
}

export {
  stores,
  useTodoStore
};
```

### Step 3⃣️：使用 [mobx-react](https://github.com/mobxjs/mobx-react) 将 Store 绑定到组件
``` tsx
// ./src/app.tsx
import React from 'react';
import { Provider } from 'mobx-react';
import Routers from './containers/routers';
import { stores, StoresContext } from './stores';

function App() {
  return (
    // 服务类组件
    <Provider {...stores}>
      {/* 服务函数组件 */}
      <StoresContext.Provider value={stores}>
        <Routers />
      </StoresContext.Provider>
    </Provider>
  );
}

export default App;
```

### Step 4⃣️： 在函数组件中使用状态

``` tsx
// ./src/containers/todo-list-fn/index.tsx
import React from 'react';
import { observer } from 'mobx-react';
import { useTodoStore } from '../../stores';
import { Todo } from '../../components';

function TodoListFnPage() {
  const {
    todos,
    undoneCount,
    doneCount,
    addNewTodo,
    removeById,
    toggleStatusById
  } = useTodoStore();
  return (
    <div>
      <div>
        Done: {doneCount}
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

// 注意这里的 observer
export default observer(TodoListFnPage);
```

### Step 5⃣️： 在类组件中使用状态
``` tsx
//  ./src/containers/todo-list-class/index.tsx
import React from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_TODO, TodoStore  } from '../../stores';
import { Todo  } from '../../components';

// 注意这两个装饰器
@inject(STORE_TODO)
@observer
class TodoListClassPage extends React.Component<{ [STORE_TODO]: TodoStore }> {
  addNewTodo = () => {
    this.props[STORE_TODO].addNewTodo();
  }
  render() {
    const {
      todos,
      undoneCount,
      doneCount
    } = this.props[STORE_TODO];
    return (
      <div>
        <div>
          Done: {doneCount}
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
```

### Step 6⃣️： 下班
