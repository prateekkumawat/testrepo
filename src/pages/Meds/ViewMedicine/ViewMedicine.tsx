import { notification, Row } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { SecondaryButton } from '../../../Component/Button/Button';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { Popup } from '../../../Component/Popup/Popup';
import { Table } from '../../../Component/Table/Table';
import { MedicineService } from '../../../Service/Medicines';
import { GetPatient, Patient } from '../../CreatePatient/Types';
import { GetMedicine } from '../types';

export interface ViewMedicinesProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  submitHandler: (value: any) => void;
}
interface medicineColumn {
  medicineId: string | number;
  medicineName: string;
  Route: string;
  Action: string;
}
export const ViewMedicines: FC<ViewMedicinesProps> = ({
  modalOpen,
  setModalOpen,
  submitHandler,
}) => {
  const [rows, setRows] = useState<Array<GetMedicine>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const medicineService = MedicineService();
  const [selectedRows, setSelectedRows] = useState<Array<any>>([]);

  useEffect(() => {
    const getmedicineDetails = async () => {
      try {
        setLoading(true);
        const data: GetMedicine[] = await medicineService.getAllMedicine();
        setRows(data);
      } catch (err) {
        notification.error({
          message: 'Error occured while fetching medicines',
        });
      } finally {
        setLoading(false);
      }
    };
    getmedicineDetails();
  }, []);

  const columns: ColumnsType<medicineColumn> = [
    {
      title: 'medicineName',
      dataIndex: 'medicineName',
    },
    {
      title: 'Route',
      dataIndex: 'Route',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
    },
  ];

  const rowSelection: TableRowSelection<medicineColumn> = {
    selectedRowKeys: selectedRows
      ?.map((e) => e.medicineId ?? '')
      ?.filter(Boolean),
    type: 'radio',
    onChange: (
      _selectedRowKeys: React.Key[],
      selectedrows: medicineColumn[]
    ) => {
      setSelectedRows(selectedrows);
    },
  };

  const processDataToDisplayRow = (
    medicineRecords: GetMedicine[]
  ): medicineColumn[] => {
    return medicineRecords?.map((medicineRecord: GetMedicine) => ({
      key: medicineRecord.medicineId,
      medicineId: medicineRecord.medicineId,
      medicineName: [
        medicineRecord.medicineName.trim(),
      ]
        .filter(Boolean)
        .join(' '),
      Route: [
        medicineRecord.Route?.trim(),
      ]
        .filter(Boolean)
        .join(''),
      Action: medicineRecord.Action,
    }));
  };

  return (
    <Popup
      title="medicine"
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      okText="ADD"
      onOk={() =>
        submitHandler({
          medicineId: selectedRows[0].medicineId,
          medicineName: selectedRows[0].medicineName,
        })
      }
      width="55vw"
    >
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
