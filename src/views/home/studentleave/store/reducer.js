import {fromJS} from 'immutable';
import { CHANGE_RESON , GET_LEAVETIME, SUBMIT_OBJ } from './actionTypes'
const defaultState = fromJS({
  dataSource : [
    // {
    //   key: '1',
    //   name: '鸡你太美',
    //   excuseforleave: '练习时长2年半,懂的人自然懂',
    //   headapproval: '未通过',
    //   approval: '未通过',
    //   starttime: '2019-05-13 08:00:00~2019-05-13 13:00:00',
    //   creationtime:'2019-05-13 16:35:47'
    // }
  ],
  resonobj: {
    key: '1',
    excuseforleave:'',
    name: '鸡你太美',
    headapproval: '未通过',
    approval: '未通过',
    starttime:'',
    creationtime:''
  },
  number: 1,
  columns : [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '请假理由',
      dataIndex: 'excuseforleave',
      key: 'excuseforleave',
    },
    {
      title: '班主任审批',
      dataIndex: 'headapproval',
      key: 'headapproval',
    },
    {
      title: '讲师审批',
      dataIndex: 'approval',
      key: 'approval',
    },
    {
      title: '请假时间',
      dataIndex: 'starttime',
      key: 'starttime',
    },
    {
      title: '创建时间',
      dataIndex: 'creationtime',
      key: 'creationtime',
    },
  ]
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_RESON :
      return state.setIn(['resonobj','excuseforleave'],action.value)
    case GET_LEAVETIME:
      var obj=action.dateString.join("~")
      return state.setIn(['resonobj','starttime'],obj)
    case SUBMIT_OBJ:
      var today = new Date();
      var data = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      var arr=state.get('dataSource').toJS();
      var newobj=state.get('resonobj').toJS();
      newobj.creationtime=data;
      newobj.key=(action.value).toString();
      arr.push(newobj)
      
      return state.set('dataSource',fromJS(arr))
    default:
      return state;
  }
}
