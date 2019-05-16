import {
  ADD_DATA,
  CHANGE_TXT
} from './actionTypes'
import { fromJS } from 'immutable';

const defaultStates = fromJS({
  data:[],
  username: '千峰',
  textCon: '',
  key: 1
})


export default (state= defaultStates, action) => {
  switch (action.type) {
    case ADD_DATA:
      let count = state.get('key')
      let newList = state.get('data').push({
        key: `${state.set('key',count)}`,
        name: state.get('username'),
        conect: state.get('textCon'),
        date: new Date().toLocaleString()
      })
      state = state.set('data',newList)
      action.success()
      return state.set('textCon','')

    case CHANGE_TXT:
      return state.set('textCon',action.value)

    default:
      return state
  }
}
