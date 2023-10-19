import { Row, Space, Typography } from 'antd';
import React, { FC, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ShadowedCard } from '../../../Component/Card/Card';
import { Table } from '../../../Component/Table/Table';
import { PharmaciesColumnType, PharmacyColumns } from './common';
import { ViewPharmacies } from './ViewPharmacies/ViewPharmacies';
import { ColumnsType } from 'antd/es/table';
import { FormikProps } from 'formik';
import { CreatePatientScreen2 } from '../Types';
import { PharmaciesContactWrapper } from './Pharmacies.styled';

export const Pharmacies: FC<
  FormikProps<CreatePatientScreen2> & { disabled?: boolean }
> = ({ disabled, ...formikProps }) => {
  const [rows, setRows] = useState<PharmaciesColumnType[]>(
    formikProps?.values?.Pharmacies?.name
      ? [formikProps?.values?.Pharmacies]
      : []
  );

  const actionColumn: ColumnsType<PharmaciesColumnType> = [
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_row1, _row2, index) => (
        <Space
          size="middle"
          className="pharmacies-delete-icon"
          onClick={() => {
            setRows((prev) => [...prev.filter((p, i) => i !== index)]);
          }}
        >
          <RiDeleteBin6Line />
        </Space>
      ),
    },
  ];

  return (
    <PharmaciesContactWrapper
        className={`pharmacies-contact-wrapper ${
          disabled ? 'disabled-input' : null
        }`}
      >
        <Typography className="pharmacies-title">Pharmacies</Typography>
        <div className="pharmacies-contact-inner-wrapper custom-scrolbar">
          <ShadowedCard>
            {rows?.length ? (
              <Table
                className="pharmacies-table"
                columns={[...PharmacyColumns, ...actionColumn]}
                dataSource={rows}
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
              <div style={{ minHeight: '100px' }} />
            )}
          </ShadowedCard>
          <ViewPharmacies
            disabled
            rows={rows}
            onSubmit={(values) => {
              setRows((prev: PharmaciesColumnType[]) => [...values]);
            }}
          />
        </div>
    </PharmaciesContactWrapper>
  );
};
