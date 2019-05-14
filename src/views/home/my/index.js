import React from 'react';
import { Table, Button  } from 'antd';
import img from '@/ass/images/yanzu.jpg'
// import { connect } from 'react-redux'
import {Mydata} from './style'
class My extends React.Component {
  render () {
    const columns = [
      {
        title: '消息内容',
        dataIndex: 'name',
      },
      {
        title: '时间',
        dataIndex: 'date',
      },
    ];
    const tea = [
      {
        title: '评价老师',
        dataIndex: 'talk',
      },
      {
        title: '寄语内容',
        dataIndex: 'content',
      },
      {
        title: '时间',
        dataIndex: 'date',
      },
    ];
    const vip = [
      {
        title: '产品名称',
        dataIndex: 'mc',
      },
      {
        title: '产品描述',
        dataIndex: 'main',
      },
      {
        title: '开通信息',
        dataIndex: 'open',
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        date: '23:13',
        address: 'New York No. 1 Lake Park',
        talk:'王老师',
        content:'我怀疑你在开车',
        mc:'扣丁学堂',
        main:'扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。官方网站: http://www.codingke.com',
        open:'您还未开通扣丁学堂'
      },
      {
        key: '2',
        name: 'Jim Green',
        date: '20:78',
        address: 'London No. 1 Lake Park',
        talk:'俞老师',
        content:'但是我没有证据'
      },
      {
        key: '3',
        name: 'Joe Black',
        date: '06:19',
        address: 'Sidney No. 1 Lake Park',
        talk:'黄老师',
        content:'也没有找到车门'
      },
    ];
    const xinxi = [
      {
        dataIndex: 'mc',
      },
      {
        dataIndex: 'num',
      },
    ]
    const xinxi_v = [
      {
        mc : '身份证号码',
        num: 164646
      },
      {
        mc : '手机号',
        num: 18878787878
      },
      {
        mc : 'QQ',
        num: 16464651,
      },
      {
        mc : '学号',
        num: 'SZ181413015'
      },
      {
        mc : '毕业学院',
        num: '九江职业技术学院    安卓'
      },
      {
        mc : '身份证号码',
        num: '***********************'
      },
      {
        mc : '在校状态',
        num: '在读'
      },
      {
        mc : '学历',
        num: '专科'
      },
      {
        mc : '千锋班级',
        num: '深圳HTML5就业班1814期'
      },
      {
        mc : '招生老师',
        num: '刘丽丽'
      },
    ]
    return (
        <Mydata>
          <div className="main-content">
            <div className="row">
              <div className="col">
                <div className="page-head">
                  {/* <button type="button">修改</button> */}
                  <Button type="primary" className="btn btn-xs btn-primary">修改</Button>
                </div>
                <div className="page-body">
                  <div className="show">
                    <span className="profile">
                      <img style={{ width:178,height:198 }} src={ img } alt="请上传照片"/>
                    </span>
                    <div className="space"></div>
                    <div className="arrowed">
                      <div className="inline">
                        <a href="#" className="user">
                            <span className="white">李威&nbsp;(男)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="showb">
                    <Table columns={xinxi} dataSource={xinxi_v} pagination={ false } size="small" showHeader={ false }/>
                  </div>
                </div>
                <div className="page-foot col">
                <div>
                  <h4 style={{ fontWeight:700 }}>【我的消息】</h4>
                  <Table columns={columns} dataSource={data} pagination={ false }  />
                  <h4 style={{ marginTop:20,fontWeight:700 }}>【班主任寄语】</h4>
                  <Table columns={tea} dataSource={data} pagination={ false } Bordered={ true } />
                  <h4 style={{ marginTop:20,fontWeight:700 }}>【千锋其他会员开通】</h4>
                  <Table columns={vip} dataSource={data} pagination={ false }  Bordered={ true }/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Mydata>
    )
  }
}
export default My;