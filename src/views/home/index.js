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
import { Route, Switch } from 'react-router-dom';

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
          collapsed={this.state.collapsed}
          style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.location.pathname.substr(-1)]} defaultOpenKeys={['sub1']}>
            <Menu.SubMenu ref="xueyuan" name="学员后台" key="sub1" title={<span><Icon type="user" /><span>学员后台</span></span>}>
              <Menu.Item key="1" name="tousu" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } } >匿名投诉</Menu.Item>
              <Menu.Item key="2" name="jishu" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>技术问题</Menu.Item>
              <Menu.Item key="3" name="xiangmu" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>项目上传</Menu.Item>
              <Menu.Item key="4" name="vip" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>VIP</Menu.Item>
              <Menu.Item key="5" name="zhoubao" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>学员周报</Menu.Item>
              <Menu.Item key="6" name="my" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>我的资料</Menu.Item>
              <Menu.Item key="7" name="money" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>交费明细</Menu.Item>
              <Menu.Item key="8" name="my-test" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>参加考试</Menu.Item>
              <Menu.Item key="9" name="evaluate" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>学员评价</Menu.Item>
              <Menu.Item key="10" name="evaluation" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>教学测评</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" title={<span><Icon type="contacts" /><span>学员考勤</span></span>}>
              <Menu.Item key="11" name="tousu" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>学员请假</Menu.Item>
              <Menu.Item key="12" name="tousu" onClick={ ({item,key})=>{ this.changeUrl(item.props.name,key) } }>学员违纪</Menu.Item>
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
            <Dropdown overlay={menu} placement="bottomCenter">
              <Avatar size="large" icon="user" style={{ float:'right', marginTop:10}} />
            </Dropdown>
          </Header>
          <Breadcrumb style={{ paddingLeft: 15, marginTop: 10 }}>
            <Breadcrumb.Item>学员后台</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">{this.props.location.pathname}</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff'}}
          >
            <Switch>
              <Route path="/home/tousu/1" component={ Tousu }></Route>
              <Route path="/home/jishu/2" component={ Jishu }></Route>
              <Route path="/home/xiangmu/3" component={ Xiangmu }></Route>
              <Route path="/home/vip/4" component={ Vip }></Route>
              <Route path="/home/zhoubao/5" component={ Zhoubao }></Route>
              <Route path="/home/my/6" component={ My }></Route>
              <Route path="/home/money/7" component={ Money }></Route>
              <Route path="/home/my-test/8" component={ MyTest }></Route>
              <Route path="/home/evaluate/9" component={ Evaluate }></Route>
              <Route path="/home/evaluation/10" component={ Evaluation }></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
  changeUrl(pathName,key) {
    this.props.history.replace(`/home/${pathName}/${key}`)
  }
}


export default Home
