# Redux Sandbox

___

### Installation

```bash
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
Action creator:
```javascript
const dec = () => ({type: 'DEC'})

store.dispatch(dec())
```
Creator with parameters:
```javascript
const rnd = (payload) => ({type: 'RND', payload})

store.dispatch(rnd(payload))
```
Simple bindActionCreator() - bind Action-function and Dispatch:
```javascript
const bindActionCreator = (action, dispatch) => ((...args) => dispatch(action(...args)))
const decDispatch = bindActionCreator(dec, dispatch)
const incDispatch = bindActionCreator(inc, dispatch)
const rndDispatch = bindActionCreator(rnd, dispatch)
```
bindActionCreators()
```javascript
import {bindActionCreators, createStore} from 'redux'
import {inc, dec, rnd} from './actions'

const {decDispatch, incDispatch, rndDispatch} = bindActionCreators(
  {
    decDispatch: dec,
    incDispatch: inc,
    rndDispatch: rnd,
  },
  dispatch)
```
bindActionCreators() - shortcode to use:
```javascript
import * as actions from './actions'

const {dec, inc, rnd} = bindActionCreators(actions, dispatch)
```
