import { useSelector } from 'react-redux'
import { store } from './render'
import { actions } from './actions'

export const useAction = () => {
  const state =  useSelector(() => {
    return store.getState()
  })
  return {
    ...state,
    actions
  }
}