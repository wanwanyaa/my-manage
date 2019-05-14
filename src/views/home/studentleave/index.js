import React from 'react';
import { Input, DatePicker, Button, Table } from 'antd';
import './style.less'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class Studentleave extends React.Component {
  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        excuseforleave: '练习时长2年半,懂的人自然懂',
        headapproval: '未通过',
        approval: '未通过',
        starttime: '2019-05-13 08:00:00~2019-05-13 13:00:00',
        creationtime:'2019-05-13 16:35:47'
      }
    ];
    const columns = [
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
    ];
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
    return (
      <div>
        <div className="list-box">
          <h2>学员姓名:</h2>
          <Input defaultValue="鸡你太美" disabled={true} />
        </div>
        <div className="list-box">
          <h2>请假理由:</h2>
          <TextArea />
        </div>
        <div className="list-box">
          <h2>请假时间:</h2>
          <RangePicker />
        </div>
        <div className="list-box2">
          <Button type="primary">提交</Button>
          <Button type="danger">返回</Button>
        </div>
        <Table dataSource={dataSource} columns={columns} size="small" pagination={false} />
      </div>
    )
  }
}
export default Studentleave