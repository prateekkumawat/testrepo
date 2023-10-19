import { Button, Form, notification, Row, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Formik } from 'formik';
import React, { FC, useRef, useState } from 'react';
import * as Yup from 'yup';
import {
  StyledFormItem,
  StyledInput,
  StyledSelect,
} from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { ReferringProviderService } from '../../../../Service/ReferringProvider';
import { RefferingProvider } from '../../Types';
import { AddReffProWrapper } from './AddReferringProviders.styled';

export interface AddReferringProvidersPorps {
  onSubmit: (value: any) => void;
  disabled?:boolean;
}

export const AddReferringProviders: FC<AddReferringProvidersPorps> = ({
  onSubmit,
  disabled
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);
  const referringProviderService = ReferringProviderService();
  const [loading, setLoading] = useState<boolean>(false);

  const saveProvider = async (values: RefferingProvider) => {
    try {
      setLoading(true);
      await referringProviderService.postReferringProvider(values);
      console.log("🚀 ~ file: AddReferringProviders.tsx:33 ~ saveProvider ~ values:", values)
      onSubmit(values);
      notification.success({
        message: 'Provider added successfully',
      });
      setModalOpen(false);
    } catch (err) {
      notification.error({
        message: 'Error occured while creating the provider',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddReffProWrapper>
      <Button
        className="add-btn"
        onClick={() => setModalOpen(true)}
        type="primary"
        disabled
      >
        Add Provider
      </Button>
      <Popup
        title="Add Referring Provider"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        confirmLoading={loading}
        onOk={() => {
          ref?.current?.click?.();
        }}
        width="55vw"
      >
        <Formik
          initialValues={{
            npi: '',
            npiType: '',
            specialty: '',
            providerFirstName: '',
            providerLastName: '',
            organisationName: '',
          }}
          validationSchema={Yup.object({
            npi: Yup.string().required('npi is Required'),
            npiType: Yup.string(),
            specialty: Yup.string(),
            providerFirstName: Yup.string().required('First Name is required'),
            providerLastName: Yup.string().required('Last Name is required'),
            organisationName: Yup.string().required(
              'Organisation Name is required'
            ),
          })}
          onSubmit={(values) => {
            saveProvider(values);
          }}
        >
          {(formikProps) => (
            <Form onFinish={formikProps.handleSubmit} layout="vertical">
              <Row style={{ justifyContent: 'space-between' }}>
                <StyledFormItem
                  label="NPI number"
                  required
                  name="npi"
                  validateStatus={formikProps.errors.npi ? 'error' : ''}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                  help={<>{formikProps.errors.npi!}</>}
                  style={{ width: '49%' }}
                >
                  <StyledInput
                    status={formikProps.errors.npi ? 'error' : ''}
                    name="npi"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    placeholder="Type a NPI number"
                  />
                </StyledFormItem>
                <StyledFormItem
                  label="Organisation Name (LBN, DBA, Former LBN or Other Name)"
                  required
                  name="organisationName"
                  validateStatus={
                    formikProps.errors.organisationName ? 'error' : ''
                  }
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                  help={<>{formikProps.errors.organisationName!}</>}
                  style={{ width: '49%' }}
                >
                  <StyledInput
                    status={formikProps.errors.organisationName ? 'error' : ''}
                    name="organisationName"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    placeholder="Type a organisation name (LBN, DBA, Former LBN or other name)"
                  />
                </StyledFormItem>
              </Row>
              <Row style={{ justifyContent: 'space-between' }}>
                <StyledFormItem
                  label="NPI Type"
                  name="npiType"
                  validateStatus={formikProps.errors.npiType ? 'error' : ''}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                  help={<>{formikProps.errors.npiType!}</>}
                  style={{ width: '49%' }}
                >
                  <StyledSelect
                  showSearch
                    placeholder="Select a npiType"
                    onChange={(value) =>
                      formikProps.setFieldValue('npiType', value)
                    }
                    options={[
                      { value: 'Any', label: 'Any' },
                      { value: 'Individual', label: 'Individual' },
                      { value: 'Organisation', label: 'Organisation' },
                    ]}
                  />
                </StyledFormItem>
                <Row style={{ justifyContent: 'space-between', width: '49%' }}>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="Primary Service Location"
                    name="location"
                  >
                    <StyledInput
                      name="location"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a primary srvice location"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="Specialty"
                    name="specialty"
                    validateStatus={formikProps.errors.specialty ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.specialty!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.specialty ? 'error' : ''}
                      name="specialty"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a specialty"
                    />
                  </StyledFormItem>
                </Row>
              </Row>
              <Row
                style={{
                  justifyContent: 'space-between',
                }}
              >
                <Row
                  style={{
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '49%',
                  }}
                >
                  <StyledFormItem
                    style={{ width: '100%' }}
                    label="Provider First Name"
                    name="providerFirstName"
                    validateStatus={
                      formikProps.errors.providerFirstName ? 'error' : ''
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.providerFirstName!}</>}
                  >
                    <StyledInput
                      status={
                        formikProps.errors.providerFirstName ? 'error' : ''
                      }
                      name="providerFirstName"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a provider first name"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    style={{ width: '100%' }}
                    label="Provider Last Name"
                    name="providerLastName"
                    validateStatus={
                      formikProps.errors.providerLastName ? 'error' : ''
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.providerLastName!}</>}
                  >
                    <StyledInput
                      status={
                        formikProps.errors.providerLastName ? 'error' : ''
                      }
                      name="providerLastName"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a provider last name"
                    />
                  </StyledFormItem>
                </Row>
                <StyledFormItem
                  label="Notes"
                  name="notes"
                  style={{ width: '49%' }}
                >
                  <TextArea
                    className="custom-scrolbar"
                    name="notes"
                    showCount
                    size="large"
                    rows={4}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    placeholder="Type a additional notes"
                  />
                </StyledFormItem>
              </Row>
              <Button ref={ref} style={{ display: 'none' }} htmlType="submit">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Popup>
    </AddReffProWrapper>
  );
};
