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
import { PatientService } from '../../../Service/Patient';
import { GetPatient, Patient } from '../../CreatePatient/Types';

export interface ViewPatientProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  submitHandler: (value: any) => void;
}
interface PatientColumn {
  patientId: string | number;
  name: string;
  address: string;
  city: string;
  primaryPhoneNumber: string;
}
export const ViewPatient: FC<ViewPatientProps> = ({
  modalOpen,
  setModalOpen,
  submitHandler,
}) => {
  const [rows, setRows] = useState<Array<GetPatient>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const patientService = PatientService();
  const [selectedRows, setSelectedRows] = useState<Array<any>>([]);

  useEffect(() => {
    const getPatientDetails = async () => {
      try {
        setLoading(true);
        const data: GetPatient[] = await patientService.getAllPatient();
        setRows(data);
      } catch (err) {
        notification.error({
          message: 'Error occured while fetching patients',
        });
      } finally {
        setLoading(false);
      }
    };
    getPatientDetails();
  }, []);

  const columns: ColumnsType<PatientColumn> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'ID',
      dataIndex: 'patientId',
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
      dataIndex: 'primaryPhoneNumber',
    },
  ];

  const rowSelection: TableRowSelection<PatientColumn> = {
    selectedRowKeys: selectedRows
      ?.map((e) => e.patientId ?? '')
      ?.filter(Boolean),
    type: 'radio',
    onChange: (
      _selectedRowKeys: React.Key[],
      selectedrows: PatientColumn[]
    ) => {
      setSelectedRows(selectedrows);
    },
  };

  const processDataToDisplayRow = (
    patientRecords: GetPatient[]
  ): PatientColumn[] => {
    return patientRecords?.map((patientRecord: GetPatient) => ({
      key: patientRecord.patientId,
      patientId: patientRecord.patientId,
      name: [
        patientRecord.prefix?.trim(),
        patientRecord.firstName?.trim(),
        patientRecord.middleName?.trim(),
        patientRecord.lastName?.trim(),
        patientRecord.suffix?.trim(),
      ]
        .filter(Boolean)
        .join(' '),
      address: [
        patientRecord.addressLine1?.trim(),
        patientRecord.addressLine2.trim(),
      ]
        .filter(Boolean)
        .join(''),
      city: patientRecord.city,
      primaryPhoneNumber: patientRecord.primaryPhoneNumber,
    }));
  };

  return (
    <Popup
      title="Patient"
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      okText="ADD"
      onOk={() =>
        submitHandler({
          patientId: selectedRows[0].patientId,
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
          label="Patient"
          name="Patient"
          className="Patient-label"
          style={{ width: '90%', margin: 0 }}
        >
          <StyledSimpleInput name="Patient" allowClear />
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
