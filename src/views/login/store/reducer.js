import { fromJS } from 'immutable'
import {
  SET_LOGIN,
  SET_TXT
} from './actionTypes'
const defaultStates = fromJS({
  username: '',
  password: ''
})

const getLogin = (state = defaultStates, action) => {
  switch (action.type) {
    case SET_LOGIN:

      break;
      
    case SET_TXT:
      return state.set(action.key,action.value)

    default:
      return state
  }
}
export default getLogin

