import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createMiddleware } from './middleware'
import { createReducers } from './store'
import { models } from './init'
 

export let store: any

export const render = (element: JSX.Element, container: HTMLElement | null, callback?: () => any) => {
  const middleware = createMiddleware()
  const reducer = createReducers(models)
  store = createStore(reducer, undefined, applyMiddleware(middleware))
  return ReactDom.render(
    <Provider store = {store}>
      {element}
    </Provider>,
    container,
    callback
  )
}