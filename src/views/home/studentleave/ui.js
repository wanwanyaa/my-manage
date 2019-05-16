import React from 'react';
import './style.less';
import { Input, DatePicker, Button, Table, Alert } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class UI extends React.Component {
  render() {
    const { dataSource, columns, changereason, leavetime, submitobj, resonobj, failobj } = this.props;
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
    return (
      <div>
        <div className="list-box">
          <h2>学员姓名:</h2>
          <Input value={resonobj.name} disabled={true} />
        </div>
        <div className="list-box">
          <h2>请假理由:</h2>
          <TextArea onChange={ changereason } />
        </div>
        <div className="list-box">
          <h2>请假时间:</h2>
          <RangePicker onChange={ leavetime } />
        </div>
        {resonobj.excuseforleave!=''&&resonobj.starttime!=''? <Alert message="现在你可以点击提交按钮了" type="success" />:<Alert message="请注意请假理由和请假时间是必填偶" type="warning" />}
        <div className="list-box2">
          <Button className="button-box" type="primary" onClick={ resonobj.excuseforleave!=''&&resonobj.starttime!='' ? submitobj:failobj}>提交</Button>
          <Button className="button-box" type="danger" href='./#/home'>返回</Button>
        </div>
        <Table dataSource={dataSource} columns={columns} size="small" pagination={false} bordered />
      </div>
    )
  }
}
export default UI;
