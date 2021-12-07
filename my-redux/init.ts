import { resolveReducersOrMethods, addActions, actions } from "./actions"
import { AnyAction } from "redux"

export const models: any[] = []

interface Options {
  name: string
  initialState?: object | string | number
  reducers: any
  methods?: object
}

const filerReducers = (obj: any) => {
  const objKeys = Object.keys(obj)
  if (objKeys.includes('reset')) {
    throw new Error(`reset has been used, please selector another name`)
  }
  return obj
}

export const validateOpts = (opts: Options) => {
  const { name, reducers } = opts
  if (actions[name]) {
    throw new Error(`${name} has been used, please select another name`)
  }
  opts.reducers = filerReducers(reducers)
  opts.reducers = filerReducers(reducers)
  return opts
}


export const init = (opts: Options) => {
  const { name, initialState, reducers, methods } = validateOpts(opts)
  // add reset function
  const reset = () => {
    return initialState
  }
  reducers.reset = reset

  const resolveReducers = resolveReducersOrMethods(name, reducers)
  // custom Reducer
  const reducer = getReducer(resolveReducers, initialState)
  const modelsItem = {
    name,
    reducer
  }
  models.push(modelsItem)
  addActions(name, reducers, methods)
  
  return modelsItem
}
export const getReducer = (reducers: any, initialState: any) => {
  // match action type
  return (state = initialState, action: AnyAction) => {
    if (typeof reducers[action.type] === 'function') {
      return reducers[action.type](state, action.data)
    }
    return state
  }
}