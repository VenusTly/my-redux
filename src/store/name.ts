import myRedux from '../../my-redux'
const { init, actions } = myRedux
init({
  name: 'name',
  initialState: '王五',
  reducers: {
    zs() { 
      return '张三'
    },
    ls() { return  '李四' }
  },
}) 