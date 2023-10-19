import React, { FC, useEffect, useState } from 'react';
import { Row, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FormikProps } from 'formik';
import { ShadowedCard } from '../../../Component/Card/Card';
import { Table } from '../../../Component/Table/Table';
import { CreatePatientScreen2 } from '../Types';
import { PcpWrapper } from './PCP.styled';

interface DataType {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const PCP: FC<
  FormikProps<CreatePatientScreen2> & { disabled?: boolean }
> = ({ disabled, ...formikProps }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selected, setSelectedValue] = useState<string>();

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      ellipsis: {
        showTitle: false,
      },
    },
  ];

  const rows = [
    {
      key: 1,
      name: 'Nandu 1',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot, manshion,manshion,manshion',
      phone: '987654321',
    },
    {
      key: 2,
      name: 'Nandu 2',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      key: 3,
      name: 'Nandu 3',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      key: 4,
      name: 'Nandu 4',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      key: 5,
      name: 'Nandu 5',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      key: 6,
      name: 'Nandu 6',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
  ];

  useEffect(() => {
    formikProps.setFieldValue('Attorneys', selected);
  }, [selected]);

  return (
    <PcpWrapper className={`pcp-wrapper ${disabled ? 'disabled-input' : ''}`}>
      <Typography className="title1">PCP</Typography>
      <Row
        className="pcp-input"
        onClick={() => {
          !disabled && setModalOpen(true);
        }}
        onMouseLeave={() => setModalOpen(false)}
      >
        <Typography className={`text ${!selected ? 'placeholder' : ''}`}>
          {selected ?? 'Please select a pcp'}
        </Typography>
        <ShadowedCard
          className={`${
            modalOpen ? 'open-dropdown' : 'hide-dropdown'
          } select-dropdown`}
        >
          <Table
            size="small"
            bordered
            columns={columns}
            dataSource={rows}
            onRow={(record) => {
              return {
                onClick: () => {
                  setSelectedValue(
                    Object.values(record)
                      .map((k) => k)
                      ?.join('')
                  );
                  setModalOpen(false);
                },
              };
            }}
            scroll={{
              scrollToFirstRowOnChange: true,
              x: true,
              y: 200,
            }}
          />
        </ShadowedCard>
      </Row>
    </PcpWrapper>
  );
};
