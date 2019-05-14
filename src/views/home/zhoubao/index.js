import React from 'react';
import { Input, Button, Table } from 'antd';
import './index.less';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '问题理由',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: '创建时间',
    dataIndex: 'address',
  },
  {
    title: '回复',
    dataIndex: 'p1',
  }
];

const data = [
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  // },
];

class Zhoubao extends React.Component {
  render () {
    return (
      <div className="zb-box">
        <div className="zb-con">
          <p className="p-one">
            <label htmlFor="">学员姓名:</label>
            <Input defaultValue="千峰" style={{ width:100, marginLeft:10 }} disabled ></Input>
          </p>
          <p className="p-one">
            <label htmlFor="">周报标题:</label>
            <Input placeholder="请输入周报标题" style={{ width:200, marginLeft:10 }}  ></Input>
          </p>
          <p className="p-two">
            <label htmlFor="">周报内容:</label>
            <Input.TextArea placeholder="请输入周报内容" rows={7} style={{ width:500, marginLeft:10 }}></Input.TextArea>
          </p>
          <p className="p-three">
            <Button type="primary">提交</Button>
            <Button type="danger">返回</Button>
          </p>
          <hr/>
          <Table
            columns={ columns }
            dataSource={ data }
            bordered
            style={{ marginTop:25 }}
          />
        </div>
      </div>
    )
  }
}
export default Zhoubao
