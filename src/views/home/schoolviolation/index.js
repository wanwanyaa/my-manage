import React from 'react';
import { Table } from 'antd';
class Schoolviolation extends React.Component {
  render () {
    const dataSource = [];
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '扣除(分数)',
        dataIndex: 'fraction',
        key: 'fraction',
      },
      {
        title: '剩余分数',
        dataIndex: 'residualfraction',
        key: 'residualfraction',
      },
      {
        title: '理由',
        dataIndex: 'reason',
        key: 'reason',
      },
      {
        title: '操作人',
        dataIndex: 'operator',
        key: 'operator',
      },
      {
        title: '操作时间',
        dataIndex: 'operatortime',
        key: 'operatortime',
      },
    ];
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} size="small" pagination={false} />
      </div>
    )
  }
}
export default Schoolviolation