import { combineReducers } from 'redux-immutable'
import loginUser from '@/views/login/store/reducer'
import zhoubao from '@/views/home/zhoubao/store/reducer'
export default combineReducers({
  loginUser,
  zhoubao
})
