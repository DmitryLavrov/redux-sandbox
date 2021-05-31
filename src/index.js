import {createStore} from 'redux'

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = (payload) => ({type: 'RND', payload})


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'RND':
      return state + action.payload
    default:
      return state
  }
}

const store = createStore(reducer)

document
  .getElementById('dec')
  .addEventListener('click',
    () => store.dispatch(dec()))

document
  .getElementById('inc')
  .addEventListener('click',
    () => store.dispatch(inc()))

document
  .getElementById('rnd')
  .addEventListener('click',
    () => {
      const payload = Math.floor(Math.random() * 10)
      console.log(payload)
      store.dispatch(rnd(payload))
    })

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState().toString()
}

store.subscribe(update)