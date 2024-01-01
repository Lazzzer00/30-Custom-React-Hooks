# 30 Custom React Hooks 
These are the 30 custom react hooks covered in the Web Dev Simplified course. [Free course on react hooks](https://courses.webdevsimplified.com/react-hooks-simplified)

## 1. useToggle
This hooks takes in an initial value that is a boolean, and returns the boolean and a simple method for toggling the boolean from **true** to **false** and vice versa.
```js
const [value, toggle] = useToggle(false)
```

## 2. useTimeout.
This is a hook that takes in a callback and a delay. It calls the callback after the delay has passed. It also returns a clear and a reset method. The clear method allows you to clear the timeout and not call the callback. The reset just resets the timeout to 0.
```js
const { clear, reset } = useTimeout(() => ("Callback called!"), 1000);
```

## 3. useDebounce
This is a hook like useEffect, but it calles a useEffect after the delay has passed
``` js
useDebounce(() => alert("Callback called!"), 1000, [dependencies])
```

## 4. useUpdateEffect
This is a useEffect that does not get called on the initial render. Make sure to turn off **React.StrictMode** when using.
```
useUpdateEffect(() => alert("Callback called!"), [dependencies])
```

## 5. useArray 
This hook makes working with arrays in react easier. You pass it the initial array and it return many methods for managing it's state.
``` js
const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])
```

## 6. usePrevious 
This is hook that you pass a state and it returns its pervious state.
```js
const [count, setCount] = useState(0)
const previousCount = usePrevious(count)
```

## 7. useStateWithHistory
This is a hook that works like useState, but it also returns an object with the history of the state, a pointer pointing to a value in the history and a forward, back, and go method, that increment, decrement, and go to an index in the history.
``` js
const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
```

## 8. useStorage
This is a hook that allows you use local storage and session storage. Call the desired storage, pass a key and a value and it returns the value and setValue like useState, and it returns removeValue that deletes it from the storage.
```js
const [name, setName, removeName] = useSessionStorage("name", "Kyle")
const [age, setAge, removeAge] = useLocalStorage("age", 26)
```

## 9. useAsync
This hook makes working with async code easy. Pass it a callback and optional dependecies and it return the loading, value and the error if it arrises.
``` js
const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true
      setTimeout(() => success ? resolve("Hi") : reject("Error"), 1000)
    })
})
```

## 10. 
