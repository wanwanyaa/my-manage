import { connect } from 'react-redux'
import Ui from './ui'
import createActions from './store/createActions';
import { message } from 'antd';

const mapStateToProps = (state) => {
  return {
    dataSource: state.getIn(['studentLeave','dataSource']).toJS(),
    columns: state.getIn(['studentLeave','columns']).toJS(),
    resonobj: state.getIn(['studentLeave','resonobj']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changereason : (e) => {
      dispatch(createActions.changereason1(e))
    },
    leavetime : (date, dateString) =>{
      dispatch(createActions.leavetime1(date, dateString))
    },
    submitobj : () =>{
      dispatch(createActions.submitobj1())
    },
    failobj : () =>{
      message.error('请假内容或者请假时间不能不选偶');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ui);