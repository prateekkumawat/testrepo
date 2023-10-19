import { Row } from 'antd';
import { FormikProps } from 'formik';
import React, { FC } from 'react';
import { ShadowedCard } from '../../../../Component/Card/Card';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { CreatePatientScreen1 } from '../../Types';
import { ResponsibleParty } from '../../ResponsibleParty/ResponsibleParty';

export const PatientInfoBasicCard2: FC<FormikProps<CreatePatientScreen1>> = (
  formikProps
) => {
  const { handleChange, handleBlur, errors, setFieldValue } = formikProps;
  return (
    <div className="card h-100">
      <div className="card-body">
        {/* account no gender */}
        <div className="row">
          <div className="col-md-7">
            <StyledFormItem
              label="Account No"
              name="accountNo"
              initialValue={formikProps.values.accountNo}
            >
              <StyledSimpleInput
                disabled
                value={formikProps.values.accountNo}
                name="accountNo"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type Account No"
              />
            </StyledFormItem>
          </div>
          <div className="col-md-5">
            <StyledFormItem
              label="gender"
              name="gender"
              initialValue={formikProps.values.gender || undefined}
              rules={[{ required: true, message: 'Required Field' }]}
            >
              <StyledSimpleSelect
                showSearch
                onChange={(value) => setFieldValue('gender', value)}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ]}
                placeholder="Select a Gender"
              />
            </StyledFormItem>
          </div>
        </div>
        {/* first name prefix */}
        <Row style={{ justifyContent: 'space-between' }}>
          <StyledFormItem
            label="First Name"
            required
            name="firstName"
            style={{ width: '65%' }}
            validateStatus={errors.firstName ? 'error' : ''}
            help={errors.firstName}
            initialValue={formikProps.values.firstName}
          >
            <StyledSimpleInput
              value={formikProps.values.firstName}
              status={errors.firstName ? 'error' : ''}
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type a first name"
            />
          </StyledFormItem>
          <StyledFormItem
            label="prefix"
            name="prefix"
            style={{ width: '32%' }}
            initialValue={formikProps.values.prefix || undefined}
          >
            <StyledSimpleSelect
              showSearch
              onChange={(value) => setFieldValue('prefix', value)}
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
          label="Middle Name"
          name="middleName"
          validateStatus={errors.middleName ? 'error' : ''}
          help={errors.middleName}
          initialValue={formikProps.values.middleName}
        >
          <StyledSimpleInput
            value={formikProps.values.middleName}
            status={errors.middleName ? 'error' : ''}
            name="middleName"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type a middle name"
          />
        </StyledFormItem>
        {/* lastname suffix */}
        <Row style={{ justifyContent: 'space-between' }}>
          <StyledFormItem
            label="Last Name"
            required
            name="lastName"
            style={{ width: '65%' }}
            validateStatus={errors.lastName ? 'error' : ''}
            help={errors.lastName}
            initialValue={formikProps.values.lastName}
          >
            <StyledSimpleInput
              value={formikProps.values.lastName}
              status={errors.lastName ? 'error' : ''}
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type a last name"
            />
          </StyledFormItem>
          <StyledFormItem
            label="suffix"
            name="suffix"
            style={{ width: '32%' }}
            initialValue={formikProps.values.suffix || undefined}
          >
            <StyledSimpleSelect
              showSearch
              onChange={(value) => setFieldValue('suffix', value)}
              options={[
                { value: 'II', label: 'II' },
                { value: 'III', label: 'III' },
                { value: 'IV', label: 'IV' },
                { value: 'Jr', label: 'Jr' },
                { value: 'Sr', label: 'Sr' },
              ]}
              placeholder="Select a Suffix"
            />
          </StyledFormItem>
        </Row>
        {/* prefferd name */}
        <StyledFormItem
          label="Preferred Name"
          name="preferredName"
          validateStatus={errors.preferredName ? 'error' : ''}
          help={errors.preferredName}
          initialValue={formikProps.values.preferredName}
        >
          <StyledSimpleInput
            status={errors.preferredName ? 'error' : ''}
            name="preferredName"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type a preferred Name"
          />
        </StyledFormItem>
        <ResponsibleParty formikProps={formikProps} />
      </div>
    </div>
  );
};
