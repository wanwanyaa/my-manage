import { combineReducers } from 'redux-immutable';
import loginUser from '@/views/login/store/reducer';
import jsAddData from '@/views/home/jishu/store/reducer';
import studentData from '@/views/home/student/store/reducer';
import zhoubao from '@/views/home/zhoubao/store/reducer';

export default combineReducers({
  loginUser,
  jsAddData,
  studentData,
  zhoubao
})
