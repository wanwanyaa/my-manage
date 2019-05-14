import React from 'react';
import './style.less'
import { Input, Cascader, Upload, Icon, Modal, Button } from 'antd';

class UI extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      // {
      //   uid: '-1',
      //   name: 'xxx.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">添加照片</div>
      </div>
    );
    const options=[
      {
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }];
    
    return (
      <div className="big-box">
        <div className="top-box">
          <h2>编辑个人资料</h2>
          <h3>以下资料请确保真实有效，请勿删除或随意填写。</h3>
        </div>
        <div className="bottom-box">
          <div className="smallbox">
            <div className="inline-box">
              <i className="red-maintitle">学员姓名：</i><Input placeholder="黄先元" size="default" disabled={true} />
            </div>
            <div className="inline-box">
              <i className="red-maintitle">性别：</i><Cascader options={options} placeholder="" />
            </div>
          </div>
          <div className="smallbox">
            <i className="red-maintitle">手机号码：</i><Input size="default" className="longinput" />
          </div>
          <div className="smallbox">
            <i className="red-maintitle">QQ：</i><Input placeholder="123456789" size="default" disabled={true} className="longinput" />
          </div>
          <div className="smallbox">
            <i className="red-maintitle">身份证：</i><Input placeholder="36233415987520215" size="default" disabled={true} className="longinput" />
          </div>
          <div className="smallbox">
            <div className="inline-box">
              <i>学校省份：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>大学名称：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>学校专业：</i><Input size="default"  />
            </div>
        </div>
          <div className="smallbox">
            <div className="inline-box">
              <i>在校状态：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>学历：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>专业名称：</i><Input size="default"  />
            </div>
          </div>
          <div className="smallbox">
            <div className="inline-box">
              <i>专业类型：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>开发经验：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>使用电脑：</i><Input size="default"  />
            </div>
          </div>
          <div className="smallbox">
            <div className="inline-box">
              <i>学员所在省份：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>所在城市：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>所在区县：</i><Input size="default"  />
            </div>
        </div>
          <div className="smallbox">
            <div className="inline-box">
              <i>紧急联系人：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>关系：</i><Input size="default"  />
            </div>
            <div className="inline-box">
              <i>联系电话：</i><Input size="default"  />
            </div>
          </div>
          <div className="smallbox">
            <p>请依次上传你的照片,身份证正面,身份证反面以及你的学生证:</p>
            <div className="clearfix">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 4 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
            <Button type="primary">提交</Button>
            <Button type="danger">返回</Button>
          </div> 
        </div>
      </div>
    )
  }
}
export default UI;
