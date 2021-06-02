import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'

const Counter = ({counter, dec, inc, rnd}) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>

      <button className="btn btn-primary btn-lg mr-2"
              onClick={dec}>
        DEC
      </button>

      <button className="btn btn-primary btn-lg mr-2"
              onClick={inc}>
        INC
      </button>

      <button className="btn btn-primary btn-lg"
              onClick={rnd}>
        RND
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({counter: state})

// const mapDispatchToProps = (dispatch) => {
//   const {dec, inc, rnd} = bindActionCreators(actions, dispatch)
//   return {
//     dec,
//     inc,
//     rnd
//   }
// }

export default connect(mapStateToProps, actions)(Counter)
