import {
  SET_LOGIN,
  SET_TXT
} from './actionTypes'
import http from '@/utils/http'
import store from '@/store'

const loginUser = (dispatch) => {
  http.post('http://localhost:4000/api/auth',{
    username: store.getState().getIn(['loginUser','username']),
    password: store.getState().getIn(['loginUser','password'])
  }).then((res) => {
    console.log(res)
  })
}

const setTxt = (key,value) => {
  return (dispatch) => {
    dispatch({
      type: SET_TXT,
      key,
      value
    })
  }
}
export default {
  loginUser,
  setTxt
}
