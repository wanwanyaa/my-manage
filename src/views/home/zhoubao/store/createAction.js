import { INPUT_CHANGE,Area_change,Add_data } from './actionTypes'
export const InputChange = (value) => {
  return (dispatch)=>{
    dispatch({
      type: INPUT_CHANGE,
      value
    })
  }
}
export const Areachange = (value) => {
  return (dispatch)=>{
    dispatch({
      type: Area_change,
      value
    })
  }
}
export const Add = () => {
  return (dispatch)=>{
    dispatch({
      type: Add_data,
    })
  }
}
