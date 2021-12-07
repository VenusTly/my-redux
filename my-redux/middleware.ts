import { Dispatch, AnyAction } from "redux"
import { methods } from './methods'

export let dispatch: any = () => {}
export let getState: any = () => {}

export const createMiddleware = () => {
  return (middlewareAPI: any) => {
    dispatch = middlewareAPI.dispatch
    getState = middlewareAPI.getState
    return (next: Dispatch) => (action: AnyAction) => {
      let result = next(action)
      if ( typeof methods[action.type] === 'function') {
        result = methods[action.type](action.data, getState)
      }
      return result
    }
  }
} 