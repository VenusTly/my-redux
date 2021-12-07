import { useAction } from './useAction'
import { init } from './init'
import { actions } from './actions'
import { render } from './render'
import { connect } from 'react-redux'

const myRedux = {
  init,
  useAction,
  actions,
  render,
  connect
}

export default myRedux