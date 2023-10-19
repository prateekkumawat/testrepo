import React, { FC } from 'react';
import { Button, Row } from 'antd';
import { FormikProps } from 'formik';
import { BsArrowLeft } from 'react-icons/bs';
import { ShadowedCard } from '../../../../Component/Card/Card';
import { Pharmacies } from '../../Pharmacies/Pharmacies';
import { Prefrences } from '../../Prefrences/Prefrences';
import {
  StyledFormItem,
  StyledInput,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
// import {
//   StyledFormItem,
//   StyledSimpleDatePicker,
//   StyledSimpleInput,
//   StyledSimpleSelect,
// } from '../../../../Component/Form/Form';
import { SecondaryButton } from '../../../../Component/Button/Button';
import { CreatePatientScreen2 } from '../../Types';

export const PatientAdditionalInfoCard3: FC<
  FormikProps<any> & {
    goBack: (data: CreatePatientScreen2) => void;
    submitButtonLoading: boolean;
  }
> = ({ goBack, submitButtonLoading, ...formikProps }) => {
  return (
    <ShadowedCard className="adThird-section">
      <Pharmacies {...formikProps} disabled />
      <Prefrences {...formikProps} />
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Preferred"
          name="preferred"
          required
          validateStatus={formikProps.errors.preferred ? 'error' : ''}
          style={{ width: '49%' }}
          initialValue={formikProps.values.preferred || undefined}
        >
          <StyledSimpleSelect
            showSearch
            placeholder="Select Prefferd communication"
            onChange={(value) => formikProps.setFieldValue('preferred', value)}
            options={[
              { value: 'email', label: 'Email' },
              { value: 'text', label: 'Text' },
              { value: 'voice', label: 'Voice' },
            ]}
          />
        </StyledFormItem>
        <StyledFormItem
          label="Outstanding balance"
          name="outstandingbalance"
          required
          style={{ width: '49%' }}
          validateStatus={formikProps.errors.outstandingbalance ? 'error' : ''}
          initialValue={formikProps.values.outstandingbalance}
        >
          <StyledSimpleInput
            status={formikProps.errors.outstandingbalance ? 'error' : ''}
            name="outstandingbalance"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
          />
        </StyledFormItem>
      </Row>
      <Row className="footer-buttons">
        <SecondaryButton
          type="default"
          onClick={() => goBack(formikProps.values)}
        >
          <BsArrowLeft className="left-icon" />
        </SecondaryButton>
        <Button type="default" onClick={() => formikProps.resetForm()}>
          cancel
        </Button>
        <Button type="primary" htmlType="submit" loading={submitButtonLoading}>
          Next
        </Button>
      </Row>
    </ShadowedCard>
  );
};
