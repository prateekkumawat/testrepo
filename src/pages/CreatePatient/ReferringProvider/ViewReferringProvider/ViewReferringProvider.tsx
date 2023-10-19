import { Row, notification } from 'antd';
import React, {
  Dispatch,
  FC,
  useState,
  SetStateAction,
  useEffect,
} from 'react';
import {
  StyledFormItem,
  StyledInput,
  StyledSelect,
} from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { Table } from '../../../../Component/Table/Table';
import { RefferingProvider } from '../../Types';
import { AddReferringProviders } from '../AddReferringProviders/AddReferringProviders';
import { ReferringProviderWithKey, RefferingProviderColumn } from '../common';
import { ReferringProviderService } from '../../../../Service/ReferringProvider';
import { ReferringProvidersHeader } from './ViewReferringProviders.styled';

export interface ViewEmergencyContactProps {
  selectedProvider?: ReferringProviderWithKey[];
  onSubmit: (value: any) => void;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalOpen: boolean;
}
export const ViewReferringProviders: FC<ViewEmergencyContactProps> = ({
  onSubmit,
  selectedProvider,
  modalOpen,
  setModalOpen,
}) => {
  const [selectedRows, setSelectedRows] = useState<ReferringProviderWithKey[]>(
    selectedProvider ?? []
  );
  const [rows, setRows] = useState<ReferringProviderWithKey[]>([]);
  const providerService = ReferringProviderService();
  const [loading, setLoading] = useState<boolean>(true);
  const rowSelection = {
    selectedRowKeys: selectedRows?.map((e) => e.key),
    onChange: (
      _selectedRowKeys: React.Key[],
      selectedrows: ReferringProviderWithKey[]
    ) => {
      setSelectedRows(selectedrows);
    },
  };

  useEffect(() => {
    setSelectedRows(selectedProvider ?? []);
  }, [selectedProvider]);

  useEffect(() => {
    const getProviders = async () => {
      try {
        setLoading(true);
        const data = await providerService.getReferringProvider();
        setRows(
          data?.map((d: any) => ({
            key: d.npi,
            ...d,
          }))
        );
      } catch (err) {
        notification.error({
          message: 'Error occured while fetching providers',
        });
      } finally {
        setLoading(false);
      }
    };
    getProviders();
  }, []);

  const onOK = () => {
    onSubmit(selectedRows);
    setModalOpen(false);
  };

  return (
    <Popup
      title="Referring Provider"
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      onOk={onOK}
      width="55vw"
    >
      <>
        <ReferringProvidersHeader className="referring-providers-header">
          <Row className="provider-filters">
            <StyledFormItem
              label="Provider"
              name="provider"
              className="provider-label"
            >
              <StyledInput name="provider" allowClear />
            </StyledFormItem>
            <StyledFormItem>
              <StyledSelect
                allowClear
                placeholder="Referring provider"
                options={[]}
              />
            </StyledFormItem>
            <StyledFormItem>
              <StyledSelect
                showSearch
                allowClear
                placeholder="All specialties"
                options={[]}
              />
            </StyledFormItem>
            <AddReferringProviders
              disabled
              onSubmit={(values) =>
                setRows((prev: RefferingProvider[]) => [...prev, values])
              }
            />
          </Row>
        </ReferringProvidersHeader>
        <Table
          columns={RefferingProviderColumn}
          dataSource={rows}
          bordered
          size="small"
          rowSelection={rowSelection}
          pagination={false}
          loading={loading}
        />
      </>
    </Popup>
  );
};
