import React from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators, createStore} from 'redux'

import * as actions from './actions'
import reducer from './reducer'
import Counter from './counter'

const store = createStore(reducer)

const {dec, inc, rnd} = bindActionCreators(actions, store.dispatch)

const update = () => {
  ReactDOM.render((
    <Counter counter={store.getState()}
             dec={dec}
             inc={inc}
             rnd={() => {
               const value = Math.ceil(Math.random() * 10)
               rnd(value)
             }}/>
  ), document.getElementById('root'))
}

update()
store.subscribe(update)
