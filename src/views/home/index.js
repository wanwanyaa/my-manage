import React from 'react';
import { Layout, Menu, Icon, Breadcrumb, Dropdown, Avatar } from 'antd';
import './index.less'
import Jishu from './jishu'
import Evaluate from './evaluate'
import Evaluation from './evaluation'
import My from './my'
import MyTest from './my-test'
import Tousu from './tousu'
import Vip from './VIP'
import Xiangmu from './xiangmu'
import Zhoubao from './zhoubao'
import Money from './money'
import Studentleave from './studentleave'
import Schoolviolation from './schoolviolation'
import Modify from './modify'
import Student from './student'
import { Route, Switch, Redirect, Link } from 'react-router-dom' ;

const { Header, Sider, Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      个人信息
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      退出
    </Menu.Item>
  </Menu>
);


class Home extends React.Component {
  state = {
    collapsed: false,
    mb:{
      tousu:'匿名投诉',
      jishu:'技术问题',
      xiangmu:'项目上传',
      vip:'VIP',
      zhoubao:'学员周报',
      my:'我的资料',
      money:'交费明细',
      my_test:'参加考试',
      evaluate:'学员评价',
      evaluation:'教学测评',
      student:'学生管理',
      studentAdd:'新增学生',
      studentleave:'学员请假',
      schoolviolation:'学员违纪'
    },
    data: [
      {
        key:'sub1',
        icon:'user',
        content:'学员后台',
        data:[
          {
            key:'1',
            name:'tousu',
            content: '匿名投诉'
          },
          {
            key:'2',
            name:'jishu',
            content: '技术问题'
          },
          {
            key:'3',
            name:'xiangmu',
            content: '项目上传'
          },
          {
            key:'4',
            name:'vip',
            content: 'VIP'
          },
          {
            key:'5',
            name:'zhoubao',
            content: '学员周报'
          },
          {
            key:'6',
            name:'my',
            content: '我的资料'
          },
          {
            key:'7',
            name:'money',
            content: '交费明细'
          },
          {
            key:'8',
            name:'my_test',
            content: '参加考试'
          },
          {
            key:'9',
            name:'evaluate',
            content: '学员评价'
          },
          {
            key:'10',
            name:'evaluation',
            content: '教学测评'
          }
        ]
      },
      {
        key:'sub2',
        icon:'contacts',
        content:'学生管理',
        data:[
          {
            key: '11',
            name: 'student',
            content: '查询学员'
          },
          {
            key:'12',
            name: 'studentAdd',
            content: '查询学员'
          }
        ]
      },
      {
        key:'sub3',
        icon:'contacts',
        content:'学员考勤',
        data:[
          {
            key: '13',
            name: 'studentleave',
            content: '学员请假'
          },
          {
            key:'14',
            name: 'schoolviolation',
            content: '学员违纪'
          }
        ]
      }
    ]
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let a = this.props.location.pathname.substr(6)
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" forceSubMenuRender={true} defaultOpenKeys={['sub1']}>
            {
              this.state.data.map(x=>{
                return (
                  <Menu.SubMenu name="学员后台" key={x.key} title={<span><Icon type={x.icon} /><span>{x.content}</span></span>}>
                    {
                      x.data.map(y => {
                        return (
                          <Menu.Item
                            key={y.key}
                            className={a === y.name ? 'ant-menu-item-selected' : ''}
                            name={y.name}
                            // onClick={ ({item})=>{ this.changeUrl(item.props.name) } }
                          ><Link to={`/home/${y.name}`}>{ y.content }</Link></Menu.Item>
                        )
                      })
                    }
                  </Menu.SubMenu>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout style={ this.state.collapsed ? { marginLeft: 80 } : { marginLeft: 200 } }>
          <Header style={{ background: '#fff', paddingLeft: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Dropdown overlay={menu} placement="bottomCenter">
              <Avatar size="large" icon="user" style={{ float:'right', marginTop:10}} />
            </Dropdown>
          </Header>
          <Breadcrumb style={{ paddingLeft: 15, marginTop: 10 }}>
            <Breadcrumb.Item>学员后台</Breadcrumb.Item>
            <Breadcrumb.Item>
              { this.state.mb[a] }
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <Breadcrumb routes={routes} params={params} /> */}
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff'}}>
              <Switch>
                <Route path="/home/tousu" component={ Tousu }></Route>
                <Route path="/home/jishu" component={ Jishu }></Route>
                <Route path="/home/xiangmu" component={ Xiangmu }></Route>
                <Route path="/home/vip" component={ Vip }></Route>
                <Route path="/home/zhoubao" component={ Zhoubao }></Route>
                <Route path="/home/my" component={ My }></Route>
                <Route path="/home/money" component={ Money }></Route>
                <Route path="/home/my_test" component={ MyTest }></Route>
                <Route path="/home/evaluate" component={ Evaluate }></Route>
                <Route path="/home/evaluation" component={ Evaluation }></Route>
                <Route path="/home/studentleave" component={ Studentleave }></Route>
                <Route path="/home/schoolviolation" component={ Schoolviolation }></Route>
                <Route path="/home/modify" component={ Modify }></Route>
                <Route path="/home/student" component={ Student }></Route>
                <Redirect to="/home/my"></Redirect>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
  changeUrl(pathName) {
    this.props.history.replace(`/home/${pathName}`)
  }
}


export default Home
