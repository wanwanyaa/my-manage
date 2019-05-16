import React from 'react';
import { Input, Button, Table, message } from 'antd';
import './index.less';
import { connect } from 'react-redux';
import { InputChange,Areachange,Add } from './store/createAction'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '周报标题',
    dataIndex: 'zb_title',
  },
  {
    title: '周报内容',
    dataIndex: 'zb_content',
  },
  {
    title: '创建时间',
    dataIndex: 'zb_time',
  }
];
const mapStateToProps = (state) => {
  return {
    data : state.getIn(['zhoubao','data']).toJS(),
    title_value: state.getIn(['zhoubao','title_value']),
    textArea_value: state.getIn(['zhoubao','textArea_value']),
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      changetitle(e) {
        dispatch(InputChange(e.target.value))
    },
      changetextArea(e){
        dispatch(Areachange(e.target.value))
    },
    add(x,a){

      if(x && a) {
        dispatch(Add())
      }
      else{
        message.error('This is a message of error')
      }
      console.log(x)
    },
  }
}
class Zhoubao extends React.Component {
  render () {
    console.log(this.props)
    const { changetitle,changetextArea,add,title_value,textArea_value } = this.props;
    // console.log(this)
    return (
      <div className="zb-box">
        <div className="zb-con">
          <p className="p-one">
            <label htmlFor="">学员姓名:</label>
            <Input defaultValue="千峰" style={{ width:100, marginLeft:10 }} disabled ></Input>
          </p>
          <p className="p-one">
            <label htmlFor="">周报标题:</label>
            <Input placeholder="请输入周报标题" style={{ width:200, marginLeft:10 }} onChange={ changetitle } value={ this.props.title_value }></Input>
          </p>
          <p className="p-two">
            <label htmlFor="">周报内容:</label>
            <Input.TextArea placeholder="请输入周报内容" rows={7} style={{ width:500, marginLeft:10 }} onChange={ changetextArea } value={ this.props.textArea_value } ></Input.TextArea>
          </p>
          <p className="p-three">
          {
              console.log(title_value)
          }
            <Button type="primary" onClick={ ()=>{add(title_value,textArea_value)} }>提交</Button>
            <Button type="danger">返回</Button>
          </p>
          <hr/>
          <Table
            columns={ columns }
            dataSource={ this.props.data }
            bordered
            style={{ marginTop:25 }}
          />
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Zhoubao)
