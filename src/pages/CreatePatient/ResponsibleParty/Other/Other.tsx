import { Button, Form, Row, Space, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FormikProps } from 'formik';
import React, { FC, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegClone } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { StyledFormItem, StyledInput } from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { Table } from '../../../../Component/Table/Table';
import { CreatePatientScreen1 } from '../../Types';
import { OtherPatientWrapper } from './Other.styled';

interface DataType {
  name: string;
  email: string;
  phone: string;
  address: string;
}
export const Other: FC<FormikProps<CreatePatientScreen1>> = (formikProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
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
        showTitle: true,
      },
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: () => (
        <Space
          size="large"
          style={{
            width: '50px',
            display: 'grid',
            placeContent: 'center',
            fontSize: '1.3rem',
          }}
        >
          <RiDeleteBin6Line />
        </Space>
      ),
    },
  ];

  const rows = [
    {
      name: 'Nandu',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot, manshion,manshion,manshion',
      phone: '987654321',
    },
    {
      name: 'Nandu',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      name: 'Nandu',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      name: 'Nandu',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      name: 'Nandu',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
    {
      name: 'Nandu',
      email: 'nandu@mynxsoftwares.com',
      address: '123, bldg, manshion park, Toronot',
      phone: '987654321',
    },
  ];
  return (
    <OtherPatientWrapper>
    <Row className="other-patient-wrapper">
      <Button
        onClick={() => setModalOpen(true)}
        disabled={formikProps?.values.selfResponsibleFlag}
      >
        Other <FaRegClone />
      </Button>
      <Popup
        title="Other"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width="55vw"
      >
        <div className="other-patient-wrapper-popup custom-scrolbar">
          <Typography className="title">Other</Typography>
          <Form onFinish={() => {}} layout="vertical">
            <StyledFormItem label="" name="other">
              <StyledInput
                name="other"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Search a Another Patient"
                prefix={<AiOutlineSearch />}
                allowClear
              />
            </StyledFormItem>
            <Table
              columns={columns}
              dataSource={rows}
              scroll={{
                scrollToFirstRowOnChange: true,
                x: true,
                y: 200,
              }}
            />
          </Form>
        </div>
      </Popup>
      </Row>
      </OtherPatientWrapper>
  );
};
