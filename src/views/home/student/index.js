import React from  'react';
import { connect } from 'react-redux'
import { Table, Button, Modal, Form, Input, Checkbox, Select } from 'antd'
import createActions from './store/createActions'
import store from '@/store'
const columns = [
  {
    title: '姓名',
    dataIndex: 'username',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '操作',
    dataIndex: 'render',
    render: (text, record) =>{
      console.log(record)
      const id = record._id
      return (<Button onClick={ () => { delData(id) } } >Delete</Button>)
    }
  }
];
const delData = (id) => {
  store.dispatch(createActions.delStudentData(id))
}


class Student extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        store.dispatch(createActions.addStudentData(values))
        this.handleCancel()
        this.props.getData()
      }
    });
  };

  render () {
    const { list, addData } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <React.Fragment>
        <div>
          <Button onClick={ this.showModal }>新增学生</Button>
          <Modal
            title="新增学生"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
             <Form {...formItemLayout} onSubmit={this.handleSubmit} >
              <Form.Item  label="姓名" hasFeedback>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: '请输入姓名',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="性别" hasFeedback>
                {getFieldDecorator('sex', {
                  rules: [{ required: true, message: '请选择性别!' }],
                })(
                  <Select placeholder="选择性别">
                    <Select.Option value="1">男</Select.Option>
                    <Select.Option value="0">女</Select.Option>
                  </Select>,
                )}
              </Form.Item>
              <Form.Item  label="年龄" hasFeedback>
                {getFieldDecorator('age', {
                  rules: [
                    {
                      required: true,
                      message: '请输入年龄',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                  添加
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Table columns={ columns }  dataSource={ list } bordered ></Table>
        </div>
      </React.Fragment>
    )
  }
  componentWillMount () {
    this.props.getData()
  }
}
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(Student);

const mapStatesToProps = (state) => {
  return {
    list: state.getIn(['studentData','list']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData () {
      dispatch(createActions.getStudentData)
    },
    addData () {
      dispatch(createActions.addStudentData())
    }
  }
}

export default connect(mapStatesToProps,mapDispatchToProps)(WrappedDynamicRule)
