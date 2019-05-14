import React from 'react';
import {
  PageHeader,
  
} from './style';
import {Table} from 'antd'
class Evaluate extends React.Component {
  render() {
    const dataSource = [{
      key: '1',
      starttime: '2019-05-13 08:38:00',
      endtime: '2019-05-19 08:38:00',
      evaluation: '班主任【96.88%】 就业老师【96.88%】',
      lecturer: '',
      headmaster: '肖瑶',
      employmentteacher:'冉丽萍',
    } ];
    
    const columns = [{
      title: '测评开始时间',
      dataIndex: 'starttime',
      key: 'starttime',
    }, {
      title: '测评结束时间',
      dataIndex: 'endtime',
      key: 'endtime',
    }, {
      title: '评价对象',
      dataIndex: 'evaluation',
      key: 'evaluation',
    }, {
      title: '讲师',
      dataIndex: 'lecturer',
      key: 'lecturer',
    }, {
      title: '班主任',
      dataIndex: 'headmaster',
      key: 'headmaster',
    }, {
      title: '就业老师',
      dataIndex: 'employmentteacher',
      key: 'employmentteacher',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">开始测评 {record.name}</a>
        </span>
      ),
    }];
    return (
      // <div>
      <div>
        <PageHeader>
          <div className="alert alert-success">
            <i>√</i>
            您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。
          </div>
        </PageHeader>
        <Table dataSource={dataSource} columns={columns} size="small" pagination={false} />
      </div>
      //   <TableRaw>
      //     <table>
      //       <thead>
      //         <tr>
      //           <th width="8%">测评开始时间</th>
      //           <th width="8%">测评结束时间</th>
      //           <th width="15%">评价对象</th>
      //           <th width="5%">讲师</th>
      //           <th width="5%">班主任</th>
      //           <th width="5%">就业老师</th>
      //           <th width="5%">操作</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         <tr>
      //           <td>2019-05-13 08:38:00</td>
      //           <td>2019-05-19 08:38:00</td>
      //           <td>班主任【90.63%】  就业老师【90.63%】</td>
      //           <td></td>
      //           <td>肖瑶</td>
      //           <td>冉丽萍</td>
      //           <td><button>开始测评</button></td>
      //         </tr>
      //         <tr>
      //           <td colSpan="13">
      //             <div className="dataTables"></div>
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </TableRaw>
      // </div>
    )
  }
}
export default Evaluate