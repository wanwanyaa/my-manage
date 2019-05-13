import React from 'react';
import { Layout, Menu, Icon, Breadcrumb  } from 'antd';
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
import { Route, Switch } from 'react-router-dom' ;

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          // collapsedWidth="100"
          collapsed={this.state.collapsed}
          style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.SubMenu key="sub1" title={<span><Icon type="user" /><span>学员后台</span></span>}>
              <Menu.Item key="1">匿名投诉</Menu.Item>
              <Menu.Item key="2">技术问题</Menu.Item>
              <Menu.Item key="3">项目上传</Menu.Item>
              <Menu.Item key="4">VIP</Menu.Item>
              <Menu.Item key="5">学员周报</Menu.Item>
              <Menu.Item key="6">我的资料</Menu.Item>
              <Menu.Item key="7">交费明细</Menu.Item>
              <Menu.Item key="8">参加考试</Menu.Item>
              <Menu.Item key="9">学员评价</Menu.Item>
              <Menu.Item key="10">教学测评</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" title={<span><Icon type="contacts" /><span>学员考勤</span></span>}>
              <Menu.Item key="11">学员请假</Menu.Item>
              <Menu.Item key="12">学员违纪</Menu.Item>

            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={ this.state.collapsed ? { marginLeft: 80 } : { marginLeft: 200 } }>
          <Header style={{ background: '#fff', paddingLeft: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Breadcrumb style={{ paddingLeft: 15, marginTop: 10 }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', height: '100%',
          }}
          >
            <Switch>
              <Route path="/home/jishu" component={ Jishu }></Route>
              <Route path="/home/evaluate" component={ Evaluate }></Route>
              <Route path="/home/evaluation" component={ Evaluation }></Route>
              <Route path="/home/my" component={ My }></Route>
              <Route path="/home/my-test" component={ MyTest }></Route>
              <Route path="/home/tousu" component={ Tousu }></Route>
              <Route path="/home/vip" component={ Vip }></Route>
              <Route path="/home/xiangmu" component={ Xiangmu }></Route>
              <Route path="/home/zhoubao" component={ Zhoubao }></Route>
              <Route path="/home/money" component={ Money }></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home
