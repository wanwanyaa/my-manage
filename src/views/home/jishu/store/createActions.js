import {
  ADD_DATA,
  CHANGE_TXT
} from './actionTypes'
import { message } from 'antd'

const addData = (dispatch) => {
  dispatch({
    type: ADD_DATA,
    success() {
      message.success('提交成功');
    }
  })
}

const changeTxt = (value) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_TXT,
      value,
    })

  }
}

export default {
  addData,
  changeTxt
}
