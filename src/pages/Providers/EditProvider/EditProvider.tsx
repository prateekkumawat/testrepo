import { Form, Row, Typography, Button } from 'antd';
import { Formik } from 'formik';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';
import {
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { EditProviderCard } from './EditProvider.styled';
import { states, countries } from '../../../CommonData';
import { SimplePhoneNumber } from '../../../Component/PhoneNumber/PhoneNumber';
import { SecondaryButton } from '../../../Component/Button/Button';
import { ProviderWithId } from '../types';
import { dateFormat } from '../../../utility';

import { Modal } from 'antd';

export const EditProvider: FC<{
  providerDetails?: ProviderWithId;
  setModalOpen?: Dispatch<SetStateAction<string>>;
}> = ({ providerDetails, setModalOpen }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day');
  };

  const handleEditClick = () => {
    setIsConfirmVisible(true); 
  };

  const handleConfirmYes = () => {
    console.log('Changes confirmed');
    setIsConfirmVisible(false);
  };

  const handleConfirmNo = () => {
    setIsConfirmVisible(false);
  };

  const name = [
    providerDetails?.prefix,
    providerDetails?.firstName,
    providerDetails?.lastName,
  ]
    .map((e) => e?.trim())
    .filter(Boolean)
    .join(' ');
  return (
    <EditProviderCard>
      <div className="popup-header">
        <div className="name-wrapper">
          <Typography
            className={`status ${providerDetails?.providerStatus?.toLowerCase()}`}
          />
          <Typography className="name">{name}</Typography>
          <Typography className="separator"> | </Typography>
          <Typography className="id">#{providerDetails?.providerId}</Typography>
        </div>
        <div>
          <Typography className="speciality">
            {providerDetails?.speciality || 'Nurse Practitioner, Adult Health'}
          </Typography>
        </div>
      </div>
      <Formik
        initialValues={
          providerDetails ?? {
            firstName: '',
            lastName: '',
            prefix: '',
            degree: '',
            dateOfBirth: '',
            gender: '',
            primaryNumber: '',
            secondaryNumber: '',
            email: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
            primaryPracticeLocation: '',
            pagerCode: '',
            // screen2
            taxonomyCode: '',
            deaNumber: '',
            deaStartDate: '',
            deaEndDate: '',
            npi: '',
            specialLicense: '',
            licensingSate: '',
            specialLicenseStartDate: '',
            specialLicenseEndDate: '',
            // AnesthesiaLicense: '',
            licensingState: '',
            ssn: '',
            taxIdType: '',
            taxId: '',
            sendProviderCredentials: false,
          }
        }
        onSubmit={(values) => {
          console.log('values', values);
        }}
        enableReinitialize
      >
        {(formikProps) => (
          <Form onFinish={formikProps.handleSubmit} layout="inline">
            <div className="section">
              <StyledFormItem
                label="prefix"
                name="prefix"
                initialValue={formikProps.values.prefix || undefined}
              >
                <StyledSimpleSelect
                  disabled={isDisabled}
                  showSearch
                  onChange={(value) =>
                    formikProps.setFieldValue('prefix', value)
                  }
                  options={[
                    { value: 'Mr.', label: 'Mr.' },
                    { value: 'Ms.', label: 'Ms.' },
                    { value: 'Miss.', label: 'Miss.' },
                    { value: 'Mrs.', label: 'Mrs.' },
                    { value: 'Sir', label: 'Sir' },
                    { value: 'Dr.', label: 'Dr.' },
                  ]}
                  placeholder="Select a Prefix"
                />
              </StyledFormItem>
              <StyledFormItem
                label="First Name"
                name="firstName"
                validateStatus={formikProps.errors.firstName ? 'error' : ''}
                help={formikProps.errors.firstName}
                initialValue={formikProps.values.firstName}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.firstName}
                  status={formikProps.errors.firstName ? 'error' : ''}
                  name="firstName"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a first name"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Last Name"
                name="lastName"
                validateStatus={formikProps.errors.lastName ? 'error' : ''}
                help={formikProps.errors.lastName}
                initialValue={formikProps.values.lastName}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.lastName}
                  status={formikProps.errors.lastName ? 'error' : ''}
                  name="lastName"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a last name"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Degree"
                name="degree"
                validateStatus={formikProps.errors.degree ? 'error' : ''}
                help={formikProps.errors.degree}
                initialValue={formikProps.values.degree}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.degree}
                  status={formikProps.errors.degree ? 'error' : ''}
                  name="degree"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a degree"
                />
              </StyledFormItem>
              <StyledFormItem
                label="gender"
                name="gender"
                initialValue={formikProps.values.gender || undefined}
                className="inputs-side dates-form-item"
              >
                <StyledSimpleSelect
                  disabled={isDisabled}
                  style={{ width: '49%' }}
                  showSearch
                  onChange={(value) =>
                    formikProps.setFieldValue('gender', value)
                  }
                  options={[
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' },
                    { value: 'Other', label: 'Other' },
                  ]}
                  placeholder="Select a Gender"
                />
                <StyledFormItem
                  label=""
                  name="dateOfBirth"
                  // initialValue={formikProps.values.dateOfBirth}
                  style={{ width: '48%' }}
                >
                  <StyledSimpleDatePicker
                    defaultValue={
                      formikProps.values.dateOfBirth
                        ? dayjs(formikProps.values.dateOfBirth, dateFormat)
                        : undefined
                    }
                    style={{ width: '100%' }}
                    disabledDate={disabledDate}
                    name="dateOfBirth"
                    onChange={(_value, dateString) =>
                      formikProps.setFieldValue(
                        'dateOfBirth',
                        moment(dateString).format('yyyy-MM-DD')
                      )
                    }
                    placeholder="Date of birth"
                    format="MM/DD/YYYY"
                  />
                </StyledFormItem>
              </StyledFormItem>
              <StyledFormItem
                label="E-mail Id"
                name="email"
                initialValue={formikProps.values.email}
                help={formikProps.errors.email}
                validateStatus={formikProps.errors.email ? 'error' : ''}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  name="email"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type an email id"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Address Line 1"
                name="addressLine1"
                validateStatus={formikProps.errors.addressLine1 ? 'error' : ''}
                help={formikProps.errors.addressLine1}
                initialValue={formikProps.values.addressLine1}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  status={formikProps.errors.addressLine1 ? 'error' : ''}
                  name="addressLine1"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a address line 1"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Address Line 2"
                name="addressLine2"
                validateStatus={formikProps.errors.addressLine2 ? 'error' : ''}
                help={formikProps.errors.addressLine2}
                initialValue={formikProps.values.addressLine2}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  status={formikProps.errors.addressLine2 ? 'error' : ''}
                  name="addressLine2"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a address line 2"
                />
              </StyledFormItem>
              <StyledFormItem
                label="City"
                name="city"
                validateStatus={formikProps.errors.city ? 'error' : ''}
                help={formikProps.errors.city}
                initialValue={formikProps.values.city}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  status={formikProps.errors.city ? 'error' : ''}
                  name="city"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a city"
                />
              </StyledFormItem>
              <StyledFormItem
                label="State"
                name="state"
                validateStatus={formikProps.errors.state ? 'error' : ''}
                help={formikProps.errors.state}
                initialValue={formikProps.values.state || undefined}
              >
                <StyledSimpleSelect
                  disabled={isDisabled}
                  placeholder="seledisabled={isDisabled}ct State"
                  showSearch
                  onChange={(value) =>
                    formikProps.setFieldValue('state', value)
                  }
                  options={states.map((key: string) => ({
                    value: key,
                    label: states[key as keyof typeof states],
                  }))}
                />
              </StyledFormItem>
              <StyledFormItem
                label="Country"
                name="country"
                validateStatus={formikProps.errors.country ? 'error' : ''}
                help={formikProps.errors.country}
                initialValue={formikProps.values.country || undefined}
                className="inputs-side"
              >
                <StyledSimpleSelect
                  disabled={isDisabled}
                  showSearch
                  onChange={(value) =>
                    formikProps.setFieldValue('country', value)
                  }
                  options={countries.map((key: string) => ({
                    value: key,
                    label: key,
                  }))}
                  placeholder="select Country"
                  style={{ width: '49%' }}
                />
                <StyledFormItem
                  label=""
                  name="zipCode"
                  validateStatus={formikProps.errors.zipCode ? 'error' : ''}
                  help={formikProps.errors.zipCode}
                  initialValue={formikProps.values.zipCode}
                  style={{ width: '49%' }}
                >
                  <StyledSimpleInput
                    disabled={isDisabled}
                    status={formikProps.errors.zipCode ? 'error' : ''}
                    name="zipCode"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    placeholder="Type a zipCode"
                  />
                </StyledFormItem>
              </StyledFormItem>
            </div>
            <div className="section">
              <StyledFormItem
                label="Primary Phone Number"
                name="primaryNumber"
                validateStatus={formikProps.errors.primaryNumber ? 'error' : ''}
                help={formikProps.errors.primaryNumber}
                initialValue={formikProps.values.primaryNumber}
              >
                <SimplePhoneNumber
                  error={formikProps?.errors?.primaryNumber}
                  defaultValue={formikProps.values.primaryNumber}
                  onValueChange={(value) => {
                    formikProps.setFieldValue(
                      'primaryNumber',
                      value?.floatValue?.toString()
                    );
                  }}
                />
              </StyledFormItem>

              <StyledFormItem
                label="Secondary Phone Number"
                name="secondaryNumber"
                initialValue={formikProps.values.secondaryNumber}
              >
                <SimplePhoneNumber
                  error={formikProps?.errors?.secondaryNumber}
                  defaultValue={formikProps.values.secondaryNumber}
                  onValueChange={(value) =>
                    formikProps.setFieldValue(
                      'secondaryNumber',
                      value?.floatValue?.toString()
                    )
                  }
                />
              </StyledFormItem>
              <StyledFormItem
                label="ssn"
                name="ssn"
                validateStatus={formikProps.errors.ssn ? 'error' : ''}
                help={formikProps.errors.ssn}
                initialValue={formikProps.values.ssn}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.ssn}
                  status={formikProps.errors.ssn ? 'error' : ''}
                  name="ssn"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="ssn"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Primary Practice Location"
                name="primaryPracticeLocation"
                validateStatus={
                  formikProps.errors.primaryPracticeLocation ? 'error' : ''
                }
                help={formikProps.errors.primaryPracticeLocation}
                initialValue={formikProps.values.primaryPracticeLocation}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  status={
                    formikProps.errors.primaryPracticeLocation ? 'error' : ''
                  }
                  name="city"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a primary practice location"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Pager Code"
                name="pagerCode"
                validateStatus={formikProps.errors.pagerCode ? 'error' : ''}
                help={formikProps.errors.pagerCode}
                initialValue={formikProps.values.pagerCode || undefined}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  status={formikProps.errors.pagerCode ? 'error' : ''}
                  name="city"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a Pager Code"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Taxonomy Code"
                name="taxonomyCode"
                validateStatus={formikProps.errors.taxonomyCode ? 'error' : ''}
                help={formikProps.errors.taxonomyCode}
                initialValue={formikProps.values.taxonomyCode}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.taxonomyCode}
                  status={formikProps.errors.taxonomyCode ? 'error' : ''}
                  name="taxonomyCode"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a 10 digit alphanumeric code. eg: 207KA0200X"
                />
              </StyledFormItem>
              <StyledFormItem
                label="DEA Number"
                name="deaNumber"
                validateStatus={formikProps.errors.deaNumber ? 'error' : ''}
                help={formikProps.errors.deaNumber}
                initialValue={formikProps.values.deaNumber}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.deaNumber}
                  status={formikProps.errors.deaNumber ? 'error' : ''}
                  name="deaNumber"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a DEA number"
                />
              </StyledFormItem>

              <StyledFormItem
                label="DEA Dates"
                name="deaStartDate"
                className="inputs-side dates-form-item"
              >
                <StyledSimpleDatePicker
                  defaultValue={
                    formikProps.values.deaStartDate
                      ? dayjs(formikProps.values.deaStartDate, dateFormat)
                      : undefined
                  }
                  style={{ width: '49%' }}
                  name="deaStartDate"
                  onChange={(_value, dateString) =>
                    formikProps.setFieldValue(
                      'deaStartDate',
                      moment(dateString).format('yyyy-MM-DD')
                    )
                  }
                  placeholder="Select DEA start date"
                  format="MM/DD/YYYY"
                />
                <StyledFormItem
                  label=""
                  name="deaEndDate"
                  style={{ width: '49%', margin: 0 }}
                >
                  <StyledSimpleDatePicker
                    defaultValue={
                      formikProps.values.deaEndDate
                        ? dayjs(formikProps.values.deaEndDate, dateFormat)
                        : undefined
                    }
                    name="deaEndDate"
                    onChange={(_value, dateString) =>
                      formikProps.setFieldValue(
                        'deaEndDate',
                        moment(dateString).format('yyyy-MM-DD')
                      )
                    }
                    placeholder="Select DEA end date"
                    format="MM/DD/YYYY"
                  />
                </StyledFormItem>
              </StyledFormItem>
              <StyledFormItem
                label="NPI Number (or UPIN)"
                name="npi"
                validateStatus={formikProps.errors.npi ? 'error' : ''}
                help={formikProps.errors.npi}
                initialValue={formikProps.values.npi}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.npi}
                  status={formikProps.errors.npi ? 'error' : ''}
                  name="npi"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a NPI number (or UPIN)"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Specialty License Number"
                name="specialLicense"
                validateStatus={
                  formikProps.errors.specialLicense ? 'error' : ''
                }
                help={formikProps.errors.specialLicense}
                initialValue={formikProps.values.specialLicense}
              >
                <StyledSimpleInput
                  disabled={isDisabled}
                  value={formikProps.values.specialLicense}
                  status={formikProps.errors.specialLicense ? 'error' : ''}
                  name="specialLicense"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a specialty License number"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Licensing State"
                name="licensingState"
                initialValue={formikProps.values.licensingState || undefined}
              >
                <StyledSimpleSelect
                  disabled={isDisabled}
                  showSearch
                  onChange={(value) =>
                    formikProps.setFieldValue('licensingState', value)
                  }
                  options={states.map((key: string) => ({
                    value: key,
                    label: states[key as keyof typeof states],
                  }))}
                  placeholder="Select a licensing sate"
                />
              </StyledFormItem>
            </div>
            <div className="section last-col">
              <div>
                <StyledFormItem
                  label="License Dates"
                  name="specialLicenseStartDate"
                  className="inputs-side dates-form-item"
                >
                  <StyledSimpleDatePicker
                    defaultValue={
                      formikProps.values.specialLicenseStartDate
                        ? dayjs(
                            formikProps.values.specialLicenseStartDate,
                            dateFormat
                          )
                        : undefined
                    }
                    style={{ width: '49%' }}
                    name="specialLicenseStartDate"
                    onChange={(_value, dateString) =>
                      formikProps.setFieldValue(
                        'specialLicenseStartDate',
                        moment(dateString).format('yyyy-MM-DD')
                      )
                    }
                    placeholder="Select license start date"
                    format="MM/DD/YYYY"
                  />
                  <StyledFormItem
                    label=""
                    name="specialLicenseEndDate"
                    style={{ width: '49%', margin: 0 }}
                  >
                    <StyledSimpleDatePicker
                      defaultValue={
                        formikProps.values.specialLicenseEndDate
                          ? dayjs(
                              formikProps.values.specialLicenseEndDate,
                              dateFormat
                            )
                          : undefined
                      }
                      style={{ width: '100%' }}
                      name="specialLicenseEndDate"
                      onChange={(_value, dateString) =>
                        formikProps.setFieldValue(
                          'specialLicenseEndDate',
                          moment(dateString).format('yyyy-MM-DD')
                        )
                      }
                      placeholder="Select license end date"
                      format="MM/DD/YYYY"
                    />
                  </StyledFormItem>
                </StyledFormItem>
                <StyledFormItem
                  label="Anesthesia License"
                  name="AnesthesiaLicense"
                >
                  <StyledSimpleInput
                    disabled={isDisabled}
                    name="anesthesiaLicense"
                    placeholder="Type a anesthesia license"
                  />
                </StyledFormItem>
                <StyledFormItem
                  label="Tax ID Type"
                  name="taxIdType"
                  initialValue={formikProps.values.taxIdType || undefined}
                >
                  <StyledSimpleSelect
                    disabled={isDisabled}
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('taxIdType', value)
                    }
                    options={[
                      { value: 'Not selected', label: 'Not selected' },
                      { value: 'SSN', label: 'SSN' },
                      { value: 'Emp. ID No', label: 'Emp. ID No' },
                      { value: 'Corporate SSN', label: 'Corporate SSN' },
                    ]}
                    placeholder="Select a Tax ID  Type"
                  />
                </StyledFormItem>
                <StyledFormItem
                  label="Tax ID"
                  name="taxId"
                  validateStatus={formikProps.errors.taxId ? 'error' : ''}
                  help={formikProps.errors.taxId}
                  initialValue={formikProps.values.taxId}
                >
                  <StyledSimpleInput
                    disabled={isDisabled}
                    value={formikProps.values.taxId}
                    status={formikProps.errors.taxId ? 'error' : ''}
                    name="taxId"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    placeholder="Type a tax id"
                  />
                </StyledFormItem>
              </div>
              <div className="edit-btns">
                <Button
                  size="large"
                  type="default"
                  onClick={() => {
                    setModalOpen?.('');
                  }}
                >
                  Close
                </Button>
                <SecondaryButton
                  size="large"
                  type="primary"
                  onClick={handleEditClick}
                >
                  Save
                </SecondaryButton>

                <Modal
                  visible={isConfirmVisible}
                  title="Confirm Changes"
                  onCancel={handleConfirmNo}
                  footer={[
                    <Button key="no" onClick={handleConfirmNo}>
                      No
                    </Button>,
                    <Button key="yes" type="primary" onClick={handleConfirmYes}>
                      Yes
                    </Button>,
                  ]}
                >
                  Are you sure you want to save the changes?
                </Modal>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </EditProviderCard>
  );
};
