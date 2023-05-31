# memoization in React:

My personal noted on learning memoization techniques in React.

### 1. `React.memo` aka "Render if the props have changed"

Memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again

> memo lets you skip re-rendering a component when its props are unchanged.
>
> A React component should always have pure rendering logic. This means that it must return the same output if its props, state, and context haven’t changed. By using memo, you are telling React that your component complies with this requirement, so React doesn’t need to re-render as long as its props haven’t changed.
> [React Docs](https://react.dev/reference/react/memo)

In React, memoization works by comparing the value of the previous props to the values of the current props. If the value is the same, no rerender. If the value has changed, it rerenders that component.

Use React.memo when you are running the same props over and over again to reduce overheads.

The state is bound to each instance of the component.

Remember: Rerenders are not necessarily bad in React because it uses a VDOM that changes the DOM only when necessary. Avoid premature optimization.

### 2. `useMemo`

We say `memo` deals with primitive values; when dealing with objects and arrays for memoization we use `useMemo`.
