import React from 'react';
import { Input, Button, Table, message } from 'antd';
import './index.less';
import { connect } from 'react-redux'
import createActions from './store/createActions'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '问题内容',
    dataIndex: 'conect',
  },
  {
    title: '创建时间',
    dataIndex: 'date',
  },
  {
    title: '回复',
    dataIndex: 'Reply',
  }
];


class Jishu extends React.Component {
  render () {
    const { data, username, textCon, addData, writeTxt } = this.props
    return (
      <React.Fragment>
        <div className="js-box">
          <div className="js-top">
            <p className="p-one">
              <label htmlFor="">学员姓名:</label>
              <Input defaultValue={ username } style={{ width:100, marginLeft:10 }} disabled ></Input>
            </p>
            <p className="p-two">
              <label htmlFor="">提交内容:</label>
              <Input.TextArea placeholder="请输入技术内容" value={ textCon } onChange={ (e)=>{ writeTxt(e.target.value) } } style={{ width:500, marginLeft:10 }}></Input.TextArea>
            </p>
            <p className="p-three">
              <Button type="primary" onClick={ () => { addData(textCon) } }>提交</Button>
              <Button type="danger">返回</Button>
            </p>
          </div>
          <div className="js-bottom">
          </div>
          <hr />
          <Table
            columns={columns}
            dataSource={data}
            bordered
            style={{ marginTop:25 }}
          />
        </div>
      </React.Fragment>
    )
  }
}

const mapStatesToProps = (state) => {
  return {
    data: state.getIn(['jsAddData','data']).toJS(),
    username: state.getIn(['jsAddData','username']),
    textCon : state.getIn(['jsAddData','textCon'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData (content) {
      if(content===''){
        message.error('输入内容不能为空！')
      } else{
        dispatch(createActions.addData)
      }
    },
    writeTxt (value) {
      dispatch(createActions.changeTxt(value))
    }
  }
}

export default connect(mapStatesToProps,mapDispatchToProps)(Jishu)
