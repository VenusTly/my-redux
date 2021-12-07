import React from 'react';
import logo from './logo.svg';
import './App.css';
import myRedux from '../my-redux'
const { useAction } = myRedux

const App = () => {
  const { app, name, actions } = useAction()

  const onClick = (status: boolean) => {
    status ? actions.app.incrementAsync() : actions.app.decrement()
  }
  return <div>
    <h2>{app.count}</h2>
    <button onClick={() => onClick(true)}>增加</button>
    <button onClick={() => onClick(false)}>减少</button>
    <button onClick={() => actions.app.reset()}>重置</button>
    <h2>名字： {name}</h2>
    <button onClick={() => actions.name.zs() }>张三</button>
    <button onClick={() => actions.name.ls()}>李四</button>
    <button onClick={() => actions.name.reset()}>重置</button>
  </div>
}

export default App;
