import { notification, Row } from 'antd';
import RowSelectionType, { ColumnsType } from 'antd/es/table';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { TableRowSelection } from 'antd/es/table/interface';
import { SecondaryButton } from '../../../Component/Button/Button';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { Popup } from '../../../Component/Popup/Popup';
import { Table } from '../../../Component/Table/Table';
import { ProviderService } from '../../../Service/Provider';
import { Provider, ProviderWithId } from '../../Providers/types';

export interface ViewProviderProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  submitHandler: (value: any) => void;
}
interface ProviderColumn {
  providerId: string | number;
  name: string;
  address: string;
  city: string;
  primaryPhoneNumber: string;
}
export const ViewProvider: FC<ViewProviderProps> = ({
  modalOpen,
  setModalOpen,
  submitHandler,
}) => {
  const [rows, setRows] = useState<Array<ProviderWithId>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const providerService = ProviderService();
  const [selectedRows, setSelectedRows] = useState<Array<any>>([]);

  useEffect(() => {
    const getProviderDetails = async () => {
      try {
        setLoading(true);
        const data: ProviderWithId[] = await providerService.getAllProvider();
        setRows(data);
      } catch (err) {
        notification.error({
          message: 'Error occured while fetching providers',
        });
      } finally {
        setLoading(false);
      }
    };
    getProviderDetails();
  }, []);

  const columns: ColumnsType<ProviderColumn> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'ID',
      dataIndex: 'providerId',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'phone',
      dataIndex: 'primaryNumber',
    },
  ];

  const rowSelection: TableRowSelection<ProviderColumn> = {
    selectedRowKeys: selectedRows
      ?.map((e) => e.providerId ?? '')
      ?.filter(Boolean),
    type: 'radio',
    // radio',
    onChange: (
      _selectedRowKeys: React.Key[],
      selectedrows: ProviderColumn[]
    ) => {
      setSelectedRows(selectedrows);
    },
  };

  const processDataToDisplayRow = (
    providerRecords: ProviderWithId[]
  ): ProviderColumn[] => {
    return providerRecords?.map((providerRecord: ProviderWithId) => ({
      key: providerRecord.providerId,
      providerId: providerRecord.providerId,
      name: [
        providerRecord.prefix?.trim(),
        providerRecord.firstName?.trim(),
        providerRecord.lastName?.trim(),
      ]
        .filter(Boolean)
        .join(' '),
      address: [
        providerRecord.addressLine1?.trim(),
        providerRecord.addressLine2.trim(),
      ]
        .filter(Boolean)
        .join(''),
      city: providerRecord.city,
      primaryPhoneNumber: providerRecord.primaryNumber,
    }));
  };

  return (
    <Popup
      title="Provider"
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      okText="ADD"
      onOk={() =>
        submitHandler({
          providerId: selectedRows[0].providerId,
          name: selectedRows[0].name,
        })
      }
      width="55vw"
    >
      <Row
        style={{
          alignItems: 'center',
          margin: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <StyledFormItem
          label="Provider"
          name="Provider"
          className="Provider-label"
          style={{ width: '90%', margin: 0 }}
        >
          <StyledSimpleInput name="Provider" allowClear />
        </StyledFormItem>
        <SecondaryButton>Search</SecondaryButton>
      </Row>
      <Table
        columns={columns}
        dataSource={processDataToDisplayRow(rows)}
        bordered
        loading={loading}
        size="small"
        rowSelection={rowSelection}
        pagination={false}
      />
    </Popup>
  );
};
