# React Hooks 学习

## 一：设计动机

1. 组件之间复用状态逻辑很难

2. 复杂组件变得难以理解

3. 难以理解的 Class


> [详细参考这里](https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation)

## 二：使用姿势

* [useState](./src/pages/use-state/index.tsx)

* [useEffect](./src/pages/use-effect/index.tsx)

* [useContext](./src/pages/use-context/index.tsx)

* [useMemo](./src/pages/use-memo/index.tsx)

* [useCallback](./src/pages/use-callback/index.tsx)

* [useLayoutEffect](./src/pages/use-layout-effect/index.tsx)

* [useRef](./src/pages/use-ref/index.tsx)

* [useImperativeHandle](./src/pages/use-imperative-handle/index.tsx)

* [useReducer](./src/pages/use-reducer/index.tsx)

* [useContext + useReducer 实现全局共享状态](./src/pages/global-state/index.tsx)


*两个原则：*

1. `只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook`([这是为什么？](https://github.com/brickspert/blog/issues/26))

2. `只在 React 函数中调用 Hook`

## 三：自定义 Hooks

这部分建议直接阅读市面上一些优秀 hooks 库的源码：

[react-use](https://github.com/streamich/react-use)

[awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)

[@umi/hooks](https://github.com/umijs/hooks)

---

参考资料：

* [Dan: useEffect 完整指南(必读)](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
* [React Hooks完全上手指南](https://zhuanlan.zhihu.com/p/92211533)
* [Umi Hooks - 助力拥抱 React Hooks](https://zhuanlan.zhihu.com/p/103150605)
* [React Hooks 原理](https://github.com/brickspert/blog/issues/26)