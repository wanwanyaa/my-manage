import { combineReducers } from 'redux-immutable'
import loginUser from '@/views/login/store/reducer'
import studentLeave from '@/views/home/studentleave/store/reducer'

export default combineReducers({
  loginUser,
  studentLeave
})
