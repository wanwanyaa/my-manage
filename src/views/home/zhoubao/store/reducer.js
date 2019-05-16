import { fromJS } from 'immutable'
import { INPUT_CHANGE,Area_change, Add_data } from './actionTypes'
const defaultStates = fromJS({
  data: [
    {
      key: '1',
      name: '千锋',
      zb_title: '￥300,000.00',
      zb_content: '这周没问题',
      zb_time: new Date().toLocaleString()
    },
    {
      key: '2',
      name: '千锋',
      zb_title: '￥1,256,000.00',
      zb_content: 'OK',
      zb_time: new Date().toLocaleString()
    },
    {
      key: '3',
      name: '千锋',
      zb_title: '￥120,000.00',
      zb_content: 'OKOKOK',
      zb_time: new Date().toLocaleString()
    },
  ],
  title_value: '',
  textArea_value:''
})
const weekb = (state = defaultStates, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return state.set('title_value',action.value)
    case Area_change:
      return state.set('textArea_value',action.value)
    case Add_data:
      let arr = state.get('data').push({

        key:state.get('data').toJS().length+1+'',
        name: '千锋',
        zb_title: state.get('title_value'),
        zb_content: state.get('textArea_value'),
        zb_time: new Date().toLocaleString()
      })
      console.log(state.get('data').toJS().length)
      // console.log(state.size,state,state.data)
      return state.set('data',arr)
    default:
      return state
  }
}
export default weekb
