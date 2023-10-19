/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from 'antd';
import React, {
  FC,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { StyledFormItem, StyledInput } from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { Table } from '../../../../Component/Table/Table';
import { AddPharmacies } from '../AddPharmacies/AddPharmacies';
import { dataSrc, PharmaciesColumnType, PharmacyColumns } from '../common';
import { PharmaHeaderWrapper } from './ViewPharmacies.styled';

export interface ViewPharmaciesProps {
  rows: PharmaciesColumnType[];
  onSubmit: (value: any) => void;
  disabled?: boolean;
}
export const ViewPharmacies: FC<ViewPharmaciesProps> = ({
  onSubmit,
  disabled,
  rows: selectedRowProp,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] =
    useState<PharmaciesColumnType[]>(selectedRowProp);
  const [rows, setRows] = useState<PharmaciesColumnType[]>(dataSrc);

  useEffect(() => {
    setSelectedRows(selectedRowProp);
  }, [selectedRowProp]);

  const rowSelection = {
    selectedRowKeys: selectedRows?.map((e) => e.key ?? '')?.filter(Boolean),
    onChange: (
      _selectedRowKeys: React.Key[],
      selectedrows: PharmaciesColumnType[]
    ) => {
      setSelectedRows(selectedrows);
    },
  };

  const onOK = () => {
    onSubmit(selectedRows);
    setModalOpen(false);
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
        title="Pharmacies"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={onOK}
        width="55vw"
      >
        <PharmaHeaderWrapper>
          <Row className="pharmacies-header">
            <StyledFormItem
              label="Provider"
              name="provider"
              className="provider-label"
            >
              <StyledInput name="provider" allowClear />
            </StyledFormItem>
            <AddPharmacies
              onSubmit={(values: any) => {
                console.log('values', values);
                setRows((prev: PharmaciesColumnType[]) => [...prev, values]);
              }}
            />
          </Row>

          <Table
            className="view-pharmacies-table custom-scrolbar"
            columns={PharmacyColumns}
            dataSource={rows}
            bordered
            size="small"
            rowSelection={rowSelection}
            pagination={false}
          />
        </PharmaHeaderWrapper>
      </Popup>
    </>
  );
};
