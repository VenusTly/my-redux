import myRedux from '../../my-redux'
const { init, actions } = myRedux
init({
  name: 'app',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state: any, data: number) { 
      return {
        ...state,
        count: state.count + data
      }
    },
    decrement(state: any) { 
      return {
        ...state,
        count: state.count - 1
      }
    }
  },
  methods: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(undefined)
        }, 10)
      })
      actions.app.increment(22)
    }
  }
})