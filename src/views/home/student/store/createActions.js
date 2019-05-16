import {
  GET_STUDENT,
  ADD_STUDENT
} from './actionTypes';
import http from '@/utils/http'

const getStudentData = (dispatch) => {
  http.get('http://localhost:4000/api/user',{
    pageNum: 1
  }).then(res=>{
    console.log(res)
    if(res.code===0){
      const list = res.data.list
      list.forEach(x => {
        x.key = x._id
      });
      dispatch({
        type: GET_STUDENT,
        list
      })
    }
  })
}

const delStudentData = (id) => {
  return (dispatch) => {
    http.delete('http://localhost:4000/api/user',{ id })
      .then(res => {
        console.log(res)
        dispatch(getStudentData)
      })
  }
}

const addStudentData = (obj) => {
  // console.log(111)
  return (dispatch) => {
    console.log(111)
    http.put('http://localhost:4000/api/user',obj)
      .then(res => {
        console.log(res)
      })
  }
}

export default {
  getStudentData,
  delStudentData,
  addStudentData
}
