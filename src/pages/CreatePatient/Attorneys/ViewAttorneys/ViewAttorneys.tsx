import { Button, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { StyledFormItem, StyledInput } from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { Table } from '../../../../Component/Table/Table';
import { AddAttorneys } from '../AddAttorneys/AddAttorneys';
import { AtorneyColumnType, AttorneyColumns } from '../common';
import { AttorneysHeaderWrapper } from './ViewAttorneys.styled';

const dataSrc: AtorneyColumnType[] = [];

for (let i = 0; i <= 5; i++) {
  dataSrc.push({
    key: `name${i}`,
    firstName: ` first name ${i + 1}`,
    lastName: `Last name ${i + 1}`,
    officeAddress: 'office',
    primaryPhoneNumber: 'telephone',
    additionalNotes: 'notes',
  });
}

export interface ViewAttorneyProps {
  selectedRowProp: AtorneyColumnType[];
  onSubmit: (value: AtorneyColumnType[]) => void;
  disabled?: boolean;
}
export const ViewAttorneys: FC<ViewAttorneyProps> = ({
  onSubmit,
  selectedRowProp,
  disabled,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [rows, setRows] = useState<AtorneyColumnType[]>(dataSrc);
  const [selectedRows, setSelectedRows] =
    useState<AtorneyColumnType[]>(selectedRowProp);

  useEffect(() => {
    setSelectedRows(selectedRowProp);
  }, [selectedRowProp]);

  const onOK = () => {
    onSubmit(selectedRows);
    setModalOpen(false);
  };

  const rowSelection = {
    selectedRowKeys: selectedRows?.map((e) => e.key ?? '')?.filter(Boolean),
    onChange: (
      _selectedRowKeys: React.Key[],
      selectedrows: AtorneyColumnType[]
    ) => {
      setSelectedRows(selectedrows);
    },
  };

  return (
    <>
      <Button
        className="add-btn"
        onClick={() => {
          !disabled && setModalOpen(true);
        }}
      >
        <AiOutlinePlus className="add-icon" />
      </Button>
      <Popup
        title="Attorney"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={onOK}
        width="55vw"
      >
        {/* <AttorneyPopupChild ref={selectedRows} /> */}
        
          <AttorneysHeaderWrapper className="attorneys-header">
            <StyledFormItem
              label="Provider"
              name="provider"
              className="provider-label"
            >
              <StyledInput name="provider" allowClear />
            </StyledFormItem>
            <AddAttorneys
              onSubmit={(values) => {
                const newRow = {
                  ...values,
                  name: [values.firstName, values.lastName]
                    .map((e) => e.trim())
                    .filter(Boolean)
                    .join(''),
                };
                delete newRow.firstName;
                delete newRow.lastName;
                setRows((prev: AtorneyColumnType[]) => [...prev, newRow]);
              }}
            />
          </AttorneysHeaderWrapper>
        <Table
          columns={AttorneyColumns}
          dataSource={rows}
          bordered
          size="small"
          rowSelection={rowSelection}
          pagination={false}
        />
      </Popup>
    </>
  );
};
