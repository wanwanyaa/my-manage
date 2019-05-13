import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { connect } from 'react-redux'
import createActions from './store/createActions'
import './index.less'

class Index extends React.Component {
  render () {
    const { username, password, changeTxt, getLogin } = this.props
    return (
      <React.Fragment>
        <Form className="login-form">
          <h1 className="form-title">管理系统</h1>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
              value={ username }
              onChange={ (e) => { changeTxt('username',e.target.value)  } }
            ></Input>
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
              value={ password }
              onChange={ (e) => { changeTxt('password',e.target.value)  } }
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={ getLogin } htmlType="submit" className="login-form-button">登录</Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    )
  }
  componentWillMount(){
    var canScript = document.createElement('script')
    canScript.className='can'
    canScript.setAttribute('src','//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js')
    canScript.setAttribute('color','255,255,56')
    canScript.setAttribute('count','99')
    document.body.append(canScript)
  }

  componentWillUnmount(){
    document.querySelector('.can').remove()
    document.querySelector('#c_n5').remove()
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.getIn(['loginUser','username']),
    password: state.getIn(['loginUser','password'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTxt (key,value) {
      dispatch(createActions.setTxt(key,value))
    },
    getLogin () {
      dispatch(createActions.loginUser)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)

