import React from 'react';
import { Input, Row, Col, Button } from 'antd'

class Tousu extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 style={{ textAlign:"center", height:60, lineHeight:"60px", fontSize:24 }}>匿名投诉</h1>
        <Row justify="center" type="flex">
          <Col style={{width:600}} xs={{ span: 11 }} lg={{ span: 6 }}>
            <Input.TextArea rows={10} placeholder="本投诉是匿名投诉，不会暴露您的信息">
            </Input.TextArea>

          </Col>
        </Row>
        <Row gutter={3} justify="center" style={{ marginTop:20 }}>
          <Col offset={10} span={3}>
            <Button type="primary">添加</Button>
          </Col>
          <Col span={1}>
            <Button type="danger">返回</Button>
          </Col>
        </Row>



      </React.Fragment>
    )
  }
}
export default Tousu
