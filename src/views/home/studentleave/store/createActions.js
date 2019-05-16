import { CHANGE_RESON, GET_LEAVETIME, SUBMIT_OBJ } from './actionTypes'
var number = 1;
const changereason1 = (e) => {
  return {
    type: CHANGE_RESON,
    value: e.target.value
  }
}
const leavetime1 = (date, dateString) => {
  return {
    type: GET_LEAVETIME,
    date,
    dateString
  }
}
const submitobj1 = () => {
  return {
    type: SUBMIT_OBJ,
    value: number++
  }
}
export default {
  changereason1,
  leavetime1,
  submitobj1
}