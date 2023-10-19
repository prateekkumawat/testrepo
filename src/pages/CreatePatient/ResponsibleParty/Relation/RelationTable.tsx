import { Space } from 'antd';
import { ColumnsType, TableRowSelection } from 'antd/es/table/interface';
import React, { FC, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Table } from '../../../../Component/Table/Table';

interface DataType {
  key: number;
  name: string;
}

export const RelationTable: FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
  ];

  const rows: DataType[] = [
    {
      key: 1,
      name: 'Spouse - patient is the spouse',
    },
    {
      key: 2,
      name: 'Foster Child',
    },
    {
      key: 3,
      name: 'Handicapped Dependent',
    },
    {
      key: 4,
      name: 'Spouse - patient is the spouse',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={rows}
      rowSelection={rowSelection}
      showHeader={false}
      bordered
      pagination={false}
      scroll={{
        scrollToFirstRowOnChange: true,
        x: true,
        y: 200,
      }}
    />
  );
};
