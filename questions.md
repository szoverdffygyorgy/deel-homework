1.  A pure component is a class based component which performs shallow comparison on it's state and props, therefore might not rerender in some cases where it should have otherwise.

A regular component allows developers to implement the `shouldComponentUpdate` function to determine when the component should rerender.

2. I managed to avoid class components in React. My guess is there might be some cases where shouldComponentUpdate prevents rerender, however, rerender should happen based on context change.

3.

- handler functions: simple state setters, `onChange` etc.
- `useImperativeHandle` hook: allows to define an interface so that the parent component can access data via that interface through a `useRef` reference for the child.
- context updates in the child that affects the parent.

4.

- `React.memo` with an empty deps array.
- `shouldComponentUpdate` always returning `false`.

5. Fragments in React allows to group children without a specific container element.

```
<>
    <div></div>
    <div></div>
    ...
</>
```

State might be reset in certain permutations where multiple fragments are used within each other.

6.

- Having a generic list component which is able to use several list item components implemented accordingly.
- I came up with an idea during my last project. We had lots of inputs coming in all sizes. (having a variation of "big"/"small"/... would've been a waste).
  We were using `styled-components` which allows to create styled native HTML elements with a css in js approach. The idea was that the input receives a container JSX element with width and height being set and the input inherits its metrics.

7.

- Callbacks: usually

```
someFuncion(...params, errorCallback) {
    if (error) {
        errorCallback(error);
        return;
    }
}
```

- Promises: `Promise.catch` method provides means to handle exceptions/errors.

- Async ... await:

```
async function something() {
    try {
        await somePromise;
    } catch (e) {
        doSomeErrorHandling(e);
    }
}
```

8. It accepts one argument. Either a new value or a function which has one parameter, the previous value of that state variable.

It is async because the new value will be present only on the component's next rerender.

9.

- Class state values should be moved to `useState` hooks.
- Class methods should be declared as vanilla functions or wrapped inside `useCallback`.
- Instead of the render method function components return a JSX expression.
- If we want strict control over rerendering (like `shouldComponentUpdate` in classes) it's worth considering to wrap the function component inside `React.memo` with the dependencies deemed necessary.
- Derived state variables should be placed in `useMemo`s.
- Shared functionality between components via inheritance can be kept in custom hooks.
- `componentDidMount` and `componentWillUnMount` class functions can be moved into `useEffects`. With an empty deps array they will be only executed on mount. The returned function of the effect gets executed before unmount.

10.

- It is possible to simply import css files inside a component's implementation.
- Each JSX element has a style property where styles can be defined as an object's properties.
- External libraries such as `tailwind` or `styled-components`.

11. Via the `dangerouslySetInnerHTML`. It accepts an object which should have the `__html` property. It's value should be the string to be rendered.
