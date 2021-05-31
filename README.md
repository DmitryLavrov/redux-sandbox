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
___
Reducer must be a `pure function`:
* The function return values are identical for identical arguments
* The function application has no side effects
___
Action creators:
```javascript
const dec = () => ({type: 'DEC'})
const rnd = (payload) => ({type: 'RND', payload})

store.dispatch(dec())
store.dispatch(rnd(payload))
```