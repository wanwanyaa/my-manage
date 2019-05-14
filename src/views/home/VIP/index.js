import React from 'react';
import { Input, Button } from 'antd'
import './index.less'

class Vip extends React.Component {
  render () {
    return (
      <div>
        <div className="vip-top">
            <h1>您还不是VIP学员，填写下面表单可以申请VIP学员！</h1>
            <div className="vip-con">
              <p className="p-one">
                <label htmlFor="">学员姓名:</label>
                <Input defaultValue="千峰" style={{ width:100, marginLeft:10 }} disabled ></Input>
              </p>
              <p className="p-two">
                <label htmlFor="">申请理由:</label>
                <Input.TextArea placeholder="请输入申请理由" style={{ width:500, marginLeft:10 }}></Input.TextArea>
              </p>
              <p className="p-three">
                <Button type="primary">申请</Button>
                <Button type="danger">返回</Button>
              </p>
            </div>
          </div>
      </div>
    )
  }
}
export default Vip
