import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd'

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    render: renderContent,
  },
  {
    title: '金额',
    dataIndex: 'age',
    render: renderContent,
  },
  {
    title: '收据号/订单号',
    dataIndex: 'tel',
    render: renderContent,
  },
  {
    title: '收据编号',
    dataIndex: 'phone',
    render: renderContent,
  },
  {
    title: '入账地点',
    dataIndex: 'address',
    render: renderContent,
  },
  {
    title: '类型',
    dataIndex: 'p1',
    render: renderContent,
  },
  {
    title: '操作人',
    dataIndex: 'p2',
    render: renderContent,
  },
  {
    title: '状态',
    dataIndex: 'p3',
    render: renderContent,
  },
  {
    title: '添加时间',
    dataIndex: 'p4',
    render: renderContent,
  },
  {
    title: '操作',
    dataIndex: 'p5',
    render: renderContent,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];
class Money extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 style={{ textAlign:"center", height:60, lineHeight:"60px", fontSize:24 }}>交费详情</h1>
        <Table columns={columns} dataSource={data} bordered />
      </React.Fragment>
    )
  }
}
export default connect()(Money)
