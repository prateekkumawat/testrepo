import { Row, Space, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FormikProps } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ShadowedCard } from '../../../Component/Card/Card';
import { Table } from '../../../Component/Table/Table';
import { CreatePatientScreen2 } from '../Types';
import { AtorneyColumnType, AttorneyColumns } from './common';
import { ViewAttorneys } from './ViewAttorneys/ViewAttorneys';
import { AttorneysContactWrapper } from './Attorneys.styled';

export const Attorneys: FC<
  FormikProps<CreatePatientScreen2> & { disabled?: boolean }
> = ({ disabled, ...formikProps }) => {
  const [rows, setRows] = useState<AtorneyColumnType[]>(
    formikProps?.values?.Attorneys?.firstName
      ? [formikProps?.values.Attorneys]
      : []
  );

  const actionColumn: ColumnsType<AtorneyColumnType> = [
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_row1, _row2, index) => (
        <Space
          size="middle"
          className="attorney-delete-icon"
          onClick={() => {
            setRows((prev) => [...prev.filter((p, i) => i !== index)]);
          }}
        >
          <RiDeleteBin6Line />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    formikProps.setFieldValue('Attorneys', rows[0]);
  }, [rows]);

  return (
    <AttorneysContactWrapper
      className={`attorneys-contact-wrapper ${
        disabled ? 'disabled-input' : null
      }`}
    >
      <Typography className="attorneys-title">Attorneys</Typography>
      <div className="attorneys-contact-inner-wrapper custom-scrolbar">
        <ShadowedCard>
          {rows?.length ? (
            <Table
              className="attorneys-table"
              columns={[...AttorneyColumns, ...actionColumn]}
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
        <ViewAttorneys
          disabled
          selectedRowProp={rows}
          onSubmit={(values) => {
            setRows((prev: AtorneyColumnType[]) => [...values]);
          }}
        />
      </div>
      </AttorneysContactWrapper>
  );
};
