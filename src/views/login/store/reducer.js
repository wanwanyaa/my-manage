import { fromJS } from 'immutable'
import {
  SET_LOGIN
} from './actionTypes'
const defaultStates = fromJS({
  username: '',
  password: ''
})

const getLogin = (state = defaultStates, action) => {
  switch (action.type) {
    case SET_LOGIN:

      break;

    default:
      return state
  }
}
export default getLogin

