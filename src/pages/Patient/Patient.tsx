import { Button, Form, notification, Row, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { ShadowedCard } from '../../Component/Card/Card';
import { StyledFormItem, StyledSimpleInput } from '../../Component/Form/Form';
import { Table } from '../../Component/Table/Table';
import { PatientService } from '../../Service/Patient';
import { GetPatient as PatientType } from '../CreatePatient/Types';
import { Navigation } from '../Layout/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import { ViewPatientWrapper } from './Patient.styled';

interface ColumnType {
  patientId: string | number;
  accountNo: string | number;
  name: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  primaryPhoneNumber: string;
  email: string;
}

export const Patient: FC = () => {
  const [patient, setPatient] = useState<PatientType[]>([]);
  const [pagination, setPagination] = useState();
  const [searchCriteria, setSearchCriteria] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const patientService = PatientService();
  const navigate = useNavigate();

  useEffect(() => {
    const getPatientDetails = async (paginaitionData: any) => {
      try {
        setLoading(true);
        const data: PatientType[] = await patientService.getAllPatient(
          paginaitionData
        );
        setPatient(data);
      } catch (err) {
        notification.error({
          message: 'Error occured while fetching patients',
        });
      } finally {
        setLoading(false);
      }
    };
    getPatientDetails(pagination);
  }, []);

  const columns: ColumnsType<ColumnType> = [
    {
      title: 'Sr. No.',
      dataIndex: 'patientId',
    },
    {
      title: 'Account Number',
      dataIndex: 'accountNo',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
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
      title: 'State',
      dataIndex: 'state',
    },
    {
      title: 'Zip code',
      dataIndex: 'zip',
    },
    {
      title: 'phone',
      dataIndex: 'primaryPhoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const processDataToDisplayRow = (
    patientRecords: PatientType[]
  ): ColumnType[] => {
    return patientRecords?.map((patientRecord: PatientType) => ({
      patientId: patientRecord.patientId,
      accountNo: patientRecord.accountNo,
      name: [
        patientRecord.prefix?.trim(),
        patientRecord.firstName?.trim(),
        patientRecord.middleName?.trim(),
        patientRecord.lastName?.trim(),
        patientRecord.suffix?.trim(),
      ]
        .filter(Boolean)
        .join(' '),
      dateOfBirth: patientRecord.dateOfBirth,
      address: [
        patientRecord.addressLine1?.trim(),
        patientRecord.addressLine2.trim(),
      ]
        .filter(Boolean)
        .join(''),
      city: patientRecord.city,
      state: patientRecord.state,
      zip: patientRecord.zip,
      primaryPhoneNumber: patientRecord.primaryPhoneNumber,
      email: patientRecord.email,
    }));
  };

  return (
    <>
      <div className="component-header">
        <p className="title lg">Patient Details</p>
      </div>
      <div className="mb-4">
        <Navigation />
      </div>
      <ViewPatientWrapper className="view-patient-wrapper">
        <ShadowedCard className="input-card mb-4">
          <p className="title lg">Search patient</p>
          <Row className="form-wrapper">
            <Formik
              initialValues={{
                accountNo: '',
                name: '',
                phone: '',
              }}
              onSubmit={(values: any) => {
                setSearchCriteria(values);
              }}
            >
              {(formikProps) => (
                <Form onFinish={formikProps.handleSubmit} layout="inline">
                  <StyledFormItem label="Account" name="accountNo">
                    <StyledSimpleInput
                      name="accountNo"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a account number"
                    />
                  </StyledFormItem>
                  <StyledFormItem label="Name" name="Name">
                    <StyledSimpleInput
                      name="Name"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a name"
                    />
                  </StyledFormItem>
                  <StyledFormItem label="Phone" name="primaryPhoneNumber">
                    <StyledSimpleInput
                      name="primaryPhoneNumber"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a phone number"
                    />
                  </StyledFormItem>
                  <Button htmlType="submit" type="primary">
                    Search
                  </Button>
                </Form>
              )}
            </Formik>
          </Row>
        </ShadowedCard>
        <Table
          columns={columns}
          dataSource={processDataToDisplayRow(patient)}
          loading={loading}
          size="small"
          bordered
          onRow={(record) => {
            return {
              onClick: () => {
                console.log('re', record);
                navigate(`${record.patientId}`);
              },
            };
          }}
        />
      </ViewPatientWrapper>
    </>
  );
};
