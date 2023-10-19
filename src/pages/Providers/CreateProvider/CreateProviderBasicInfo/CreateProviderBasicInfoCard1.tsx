import { Card, Row, Typography } from 'antd';
import { FormikProps } from 'formik';
import React, { FC } from 'react';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import { dateFormat } from '../../../../utility';
import {
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { ProviderScreen1 } from '../../types';
import { SimplePhoneNumber } from '../../../../Component/PhoneNumber/PhoneNumber';
import { CreaterCardHeader } from '../../CreaterCardHeader/CreaterCardHeader';

export const CreateProviderBasicInfoCard1: FC<
  FormikProps<ProviderScreen1> & { className?: string }
> = ({ className, ...formikProps }) => {
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day');
  };

  return (
    <Card className={`card-wrapper ${className}`}>
      <CreaterCardHeader>
        <Typography>Basic Information</Typography>
      </CreaterCardHeader>
      <StyledFormItem
        label="First Name"
        name="firstName"
        validateStatus={formikProps.errors.firstName ? 'error' : ''}
        help={formikProps.errors.firstName}
        initialValue={formikProps.values.firstName}
      >
        <StyledSimpleInput
          value={formikProps.values.firstName}
          status={formikProps.errors.firstName ? 'error' : ''}
          name="firstName"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="Type a first name"
        />
      </StyledFormItem>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Last Name"
          name="lastName"
          className="input-field1"
          validateStatus={formikProps.errors.lastName ? 'error' : ''}
          help={formikProps.errors.lastName}
          initialValue={formikProps.values.lastName}
        >
          <StyledSimpleInput
            value={formikProps.values.lastName}
            status={formikProps.errors.lastName ? 'error' : ''}
            name="lastName"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a last name"
          />
        </StyledFormItem>
        <StyledFormItem
          label="Prefix"
          name="prefix"
          className="input-field2"
          initialValue={formikProps.values.prefix || undefined}
        >
          <StyledSimpleSelect
            style={{ height: '50px' }}
            showSearch
            onChange={(value) => formikProps.setFieldValue('prefix', value)}
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
      </Row>
      <StyledFormItem
        label="Degree"
        name="degree"
        validateStatus={formikProps.errors.degree ? 'error' : ''}
        help={formikProps.errors.degree}
        initialValue={formikProps.values.degree}
      >
        <StyledSimpleInput
          value={formikProps.values.degree}
          status={formikProps.errors.degree ? 'error' : ''}
          name="degree"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="Type a degree"
        />
      </StyledFormItem>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Date of Birth"
          name="dateOfBirth"
          className="input-field1"
          // initialValue={formikProps.values.dateOfBirth}
        >
          <StyledSimpleDatePicker
            defaultValue={
              formikProps.values.dateOfBirth
                ? dayjs(formikProps.values.dateOfBirth, dateFormat)
                : undefined
            }
            disabledDate={disabledDate}
            style={{ width: '100%' }}
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
        <StyledFormItem
          label="Gender"
          name="gender"
          className="input-field2"
          initialValue={formikProps.values.gender || undefined}
        >
          <StyledSimpleSelect
            showSearch
            onChange={(value) => formikProps.setFieldValue('gender', value)}
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' },
            ]}
            placeholder="Select a Gender"
          />
        </StyledFormItem>
      </Row>
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
        validateStatus={formikProps.errors.secondaryNumber ? 'error' : ''}
        initialValue={formikProps.values.secondaryNumber}
        help={formikProps.errors.secondaryNumber}
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
    </Card>
  );
};
