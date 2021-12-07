import { combineReducers } from 'redux'

export const createReducers = (models: any[]) => {
  const modeReducer: any = {}
  models.forEach(item => {
    const { name, reducer } = item
    modeReducer[name] = reducer
  })
  return combineReducers({
    ...modeReducer
  })
}


