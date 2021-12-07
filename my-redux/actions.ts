import { dispatch } from './middleware'
import { addMethods } from './methods'

const SEP = '/'

export const actions: any = {}

export const addActions = (name: any, reducers: any, methods?: any) => {
  const reducersKeys = Object.keys(reducers)
  const methodsKeys = Object.keys(methods || {})
  if (!reducersKeys.length && !methodsKeys.length) return
  actions[name] = actions[name] || {}
  reducersKeys.forEach(key => {
    // add dispatch
    actions[name][key] = actionsCreator(name, key)
  })
  methodsKeys.forEach((key) => {
    if (actions[name][key]) {
      throw new Error(`Action name ${key} has been used ! please select an another name as methods name`)
    }
    // handle methods
    actions[name][key] = actionsCreator(name, key)
    addMethods(`${name}${SEP}${key}`, methods[key])
  })
}

export const actionsCreator = (name: any, reducerName: any) => {
  return (data: any) => {
    dispatch({
      type: `${name}${SEP}${reducerName}`,
      data
    })
  }
}

export const resolveReducersOrMethods = (name: string, obj: any = {}) => {
  const objKeys = Object.keys(obj)
  const finalObj: any = {}
  objKeys.forEach(key => {
    finalObj[`${name}${SEP}${key}`] = obj[key]
  })
  return finalObj
}
