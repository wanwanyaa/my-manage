import {
  GET_STUDENT,
  ADD_STUDENT
} from './actionTypes'
import { fromJS } from 'immutable'

const defaultStates = fromJS({
  list:[],
})

export default (state = defaultStates, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return state.set('list',fromJS(action.list))

    default:
      return state
  }
}
