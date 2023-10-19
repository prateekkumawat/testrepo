import { Button, Row, Space, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FormikProps } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ShadowedCard } from '../../../Component/Card/Card';
import { Table } from '../../../Component/Table/Table';
import { CreatePatientScreen2, EmergencyContact } from '../Types';
import { AddEmergencyContact } from './AddEmergencyContact/AddEmergencyContact';
import { EmergencyContactWrapper } from './EmergencyContact.styled';

interface ColumnType {
  name: string;
  relation: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}
export const EmergencyContactComponent: FC<
  FormikProps<CreatePatientScreen2>
> = (formikProps) => {
  const [rows, setRows] = useState<EmergencyContact[]>(
    formikProps?.values.emergencyContacts
  );
  const columns: ColumnsType<ColumnType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Relation',
      dataIndex: 'relation',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
    {
      title: 'Zip',
      dataIndex: 'zip',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_row, _row1, index) => (
        <Button
          size="middle"
          className="emergency-delete-icon"
          onClick={() => {
            setRows((prev) => [...prev.filter((p, i) => i !== index)]);
          }}
        >
          <RiDeleteBin6Line />
        </Button>
      ),
    },
  ];

  const renderRows = (rowsData: EmergencyContact[]) => {
    return rowsData?.map((row) => ({
      name: [row.firstName, row.lastName]
        ?.map((e) => e.trim())
        .filter(Boolean)
        .join(' '),
      address: [row.addressLine1, row.addressLine1]
        ?.map((e) => e.trim())
        .filter(Boolean)
        .join(' '),
      phone: [row.ext, row.phoneNumber].filter(Boolean).join(' '),
      relation: row.relation,
      city: row.city,
      state: row.state,
      country: row.country,
      zip: row.zipCode,
    }));
  };

  useEffect(() => {
    formikProps.setFieldValue('emergencyContacts', rows);
  }, [rows]);

  return (
    <EmergencyContactWrapper className="emergency-contact-wrapper">
      <Typography className="emergency-title">Emergency Contact</Typography>
      <div className="emergency-contact-inner-wrapper custom-scrolbar">
        <ShadowedCard>
          {rows?.length > 0 ? (
            <Table
              className="emergency-table"
              columns={columns}
              dataSource={renderRows(rows)}
              scroll={{
                scrollToFirstRowOnChange: true,
                x: true,
                y: 200,
              }}
              pagination={false}
              size="small"
              bordered
            />
          ) : (
            <div
              style={{
                minHeight: '100px',
                color: 'red',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              Please provide at least one emergency contact.
            </div>
          )}
        </ShadowedCard>
        <AddEmergencyContact
          onSubmit={(values) => {
            setRows((prev: EmergencyContact[]) => [...prev, values]);
          }}
        />
        </div>
      </EmergencyContactWrapper>
  );
};
