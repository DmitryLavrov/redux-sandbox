# Redux Sandbox

___

### Installation

```shell
npx create-react-app redux-sandbox
cd redux-sandbox/
npm i redux react-redux
```

Simple Reducer:

```javascript
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    default:
      return state
  }
}

let state = reducer(undefined, {})

state = reducer(state, {type: 'INC'})
console.log(state)

state = reducer(state, {type: 'INC'})
console.log(state)
```
Reducer must be a `pure function`:
* The function return values are identical for identical arguments
* The function application has no side effects