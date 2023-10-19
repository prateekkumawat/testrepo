import React, { FC } from 'react';
import { Button, Row } from 'antd';
import { FormikProps } from 'formik';
import { ShadowedCard } from '../../../../Component/Card/Card';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { ReferringProvider } from '../../ReferringProvider/ReferringProvider';
import { countries, states } from '../../../../CommonData';
import { CreatePatientScreen1 } from '../../Types';

export const PatientInfoBasicCard3: FC<FormikProps<CreatePatientScreen1>> = (
  formikProps
) => (
  <div className="card h-100">
    <div className="card-body">
      <StyledFormItem
        label="Address Line 1"
        name="addressLine1"
        required
        validateStatus={formikProps.errors.addressLine1 ? 'error' : ''}
        help={formikProps.errors.addressLine1}
        initialValue={formikProps.values.addressLine1}
      >
        <StyledSimpleInput
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
          status={formikProps.errors.addressLine2 ? 'error' : ''}
          name="addressLine2"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="Type a address line 2"
        />
      </StyledFormItem>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="County"
          name="county"
          validateStatus={formikProps.errors.county ? 'error' : ''}
          help={formikProps.errors.county}
          initialValue={formikProps.values.county}
          style={{ width: '49%' }}
        >
          <StyledSimpleInput
            status={formikProps.errors.county ? 'error' : ''}
            name="county"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a County"
          />
        </StyledFormItem>
        <StyledFormItem
          label="City"
          name="city"
          validateStatus={formikProps.errors.city ? 'error' : ''}
          help={formikProps.errors.city}
          initialValue={formikProps.values.city}
          style={{ width: '49%' }}
        >
          <StyledSimpleInput
            status={formikProps.errors.city ? 'error' : ''}
            name="city"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a city"
          />
        </StyledFormItem>
      </Row>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="State"
          name="state"
          validateStatus={formikProps.errors.state ? 'error' : ''}
          help={formikProps.errors.state}
          initialValue={formikProps.values.state || undefined}
          style={{ width: '32%' }}
        >
          <StyledSimpleSelect
            placeholder="select State"
            showSearch
            onChange={(value) => formikProps.setFieldValue('state', value)}
            options={states.map((key: string) => ({
              value: key,
              label: states[key as keyof typeof states],
            }))}
          />
        </StyledFormItem>
        <StyledFormItem
          label="Zip"
          name="zip"
          validateStatus={formikProps.errors.zip ? 'error' : ''}
          help={formikProps.errors.zip}
          initialValue={formikProps.values.zip}
          style={{ width: '32%' }}
        >
          <StyledSimpleInput
            status={formikProps.errors.zip ? 'error' : ''}
            name="zip"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a zip"
          />
        </StyledFormItem>
        <StyledFormItem
          label="Country"
          name="country"
          validateStatus={formikProps.errors.country ? 'error' : ''}
          help={formikProps.errors.country}
          initialValue={formikProps.values.country || undefined}
          style={{ width: '32%' }}
        >
          <StyledSimpleSelect
            showSearch
            onChange={(value) => formikProps.setFieldValue('country', value)}
            options={countries.map((key: string) => ({
              value: key,
              label: key,
            }))}
            placeholder="select Country"
          />
        </StyledFormItem>
      </Row>
      <ReferringProvider {...formikProps} disabled />
      <Row
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'end',
        }}
      >
        <StyledFormItem
          label="Release of Info"
          name="releaseOfInfo"
          required
          validateStatus={formikProps.errors.releaseOfInfo ? 'error' : ''}
          help={formikProps.errors.releaseOfInfo}
          initialValue={formikProps.values.releaseOfInfo || undefined}
          style={{ width: '49%' }}
        >
          <StyledSimpleSelect
            showSearch
            placeholder="Select a Release of Info"
            onChange={(value) =>
              formikProps.setFieldValue('releaseOfInfo', value)
            }
            options={[
              { value: 'Release Allowed', label: 'Release Allowed' },
              { value: 'Conditional Release', label: 'Conditional Release' },
              { value: 'No Release', label: 'No Release' },
            ]}
          />
        </StyledFormItem>
        <StyledFormItem
          label="Prescription History Consent"
          name="prescriptionHistoryConsent"
          required
          validateStatus={
            formikProps.errors.prescriptionHistoryConsent ? 'error' : ''
          }
          help={formikProps.errors.prescriptionHistoryConsent}
          initialValue={
            formikProps.values.prescriptionHistoryConsent || undefined
          }
          style={{ width: '49%' }}
        >
          <StyledSimpleSelect
            showSearch
            placeholder="Select a Release of Info"
            onChange={(value) =>
              formikProps.setFieldValue('prescriptionHistoryConsent', value)
            }
            options={[
              { value: 'Consent Denied', label: 'Consent Denied' },
              { value: 'Not Asked', label: 'Not Asked' },
              { value: 'Consent Given', label: 'Consent Given' },
            ]}
          />
        </StyledFormItem>
      </Row>
      <Row className="footer-buttons">
        <Button type="default" htmlType="reset">
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Row>
    </div>
  </div>
);
