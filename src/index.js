import {bindActionCreators, createStore} from 'redux'

import * as actions from './actions'
import reducer from './reducer'

const store = createStore(reducer)
const {dispatch} = store

const {dec, inc, rnd} = bindActionCreators(actions, dispatch)

document
  .getElementById('dec')
  .addEventListener('click', dec)

document
  .getElementById('inc')
  .addEventListener('click', inc)

document
  .getElementById('rnd')
  .addEventListener('click',
    () => {
      const payload = Math.floor(Math.random() * 10)
      rnd(payload)
    })

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState().toString()
}

store.subscribe(update)