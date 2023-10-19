import { Button, Card, Row } from 'antd';
import { FormikProps } from 'formik';
import React, { FC, ReactNode } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import moment from 'moment';
import dayjs from 'dayjs';
import { dateFormat } from '../../../../utility';
import { SecondaryButton } from '../../../../Component/Button/Button';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { CreaterCardHeader } from '../../CreaterCardHeader/CreaterCardHeader';
import { ProviderScreen2 } from '../../types';
import { states } from '../../../../CommonData';

export const CreateProviderAdditionalInfoCard2: FC<
  FormikProps<ProviderScreen2> & {
    rederTabs: () => ReactNode;
    className: string;
    submitButtonLoading: boolean;
    goBack: (details: any) => void;
  }
> = ({ rederTabs, goBack, className, submitButtonLoading, ...formikProps }) => {
  return (
    <Card className={`card-wrapper ${className}`}>
      <CreaterCardHeader className="full-border">
        {rederTabs()}
      </CreaterCardHeader>
      <StyledFormItem
        label="Licensing Sate"
        name="licensingSate"
        initialValue={formikProps.values.licensingSate || undefined}
      >
        <StyledSimpleSelect
          showSearch
          onChange={(value) =>
            formikProps.setFieldValue('licensingSate', value)
          }
          options={states.map((key: string) => ({
            value: key,
            label: states[key as keyof typeof states],
          }))}
          placeholder="Select a licensing sate"
        />
      </StyledFormItem>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="License Start Date"
          name="specialLicenseStartDate"
          style={{ width: '49%' }}
        >
          <StyledSimpleDatePicker
            defaultValue={
              formikProps.values.specialLicenseStartDate
                ? dayjs(formikProps.values.specialLicenseStartDate, dateFormat)
                : undefined
            }
            style={{ width: '100%' }}
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
        </StyledFormItem>
        <StyledFormItem
          label="License End Date"
          name="specialLicenseEndDate"
          style={{ width: '49%' }}
        >
          <StyledSimpleDatePicker
            defaultValue={
              formikProps.values.specialLicenseEndDate
                ? dayjs(formikProps.values.specialLicenseEndDate, dateFormat)
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
      </Row>
      <StyledFormItem
        label="Anesthesia License"
        name="AnesthesiaLicense"
        // validateStatus={formikProps.errors.anesthesiaLicense ? 'error' : ''}
        // help={formikProps.errors.anesthesiaLicense}
        // initialValue={formikProps.values.anesthesiaLicense}
      >
        <StyledSimpleInput
          disabled
          // value={formikProps.values.anesthesiaLicense}
          // status={formikProps.errors.anesthesiaLicense ? 'error' : ''}
          name="anesthesiaLicense"
          // onChange={formikProps.handleChange}
          // onBlur={formikProps.handleBlur}
          placeholder="Type a anesthesia license"
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
          value={formikProps.values.ssn}
          status={formikProps.errors.ssn ? 'error' : ''}
          name="ssn"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="ssn"
        />
      </StyledFormItem>
      <StyledFormItem
        label="Tax ID Type"
        name="taxIdType"
        initialValue={formikProps.values.taxIdType || undefined}
      >
        <StyledSimpleSelect
          showSearch
          onChange={(value) => formikProps.setFieldValue('taxIdType', value)}
          options={[
            { value: 'Not selected', label: 'Not selected' },
            { value: 'SSN', label: 'SSN' },
            { value: 'Emp. ID No', label: 'Emp. ID No' },
            { value: 'Corporate SSN', label: 'Corporate SSN' },
          ]}
          placeholder="Select a Tax ID  Type"
        />
      </StyledFormItem>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Tax Id"
          name="taxId"
          validateStatus={formikProps.errors.taxId ? 'error' : ''}
          help={formikProps.errors.taxId}
          initialValue={formikProps.values.taxId}
          style={{ width: '49%' }}
        >
          <StyledSimpleInput
            value={formikProps.values.taxId}
            status={formikProps.errors.taxId ? 'error' : ''}
            name="taxId"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a Tax Id"
          />
        </StyledFormItem>
        <StyledFormItem
          label="Create User credentials"
          name="sendProviderCredentials"
          validateStatus={
            formikProps.errors.sendProviderCredentials ? 'error' : ''
          }
          help={formikProps.errors.sendProviderCredentials}
          initialValue={formikProps.values.sendProviderCredentials}
          style={{ width: '49%' }}
        >
          <StyledCheckBox />
        </StyledFormItem>
      </Row>
      <Row style={{ justifyContent: 'space-between' }}>
        <SecondaryButton
          size="large"
          onClick={() => {
            formikProps.handleReset();
            formikProps.resetForm();
          }}
        >
          Cancel
        </SecondaryButton>
        <Row style={{ gap: '10px' }}>
          <SecondaryButton
            size="large"
            onClick={() => {
              goBack(formikProps.values);
            }}
          >
            <BsArrowLeft />
          </SecondaryButton>
          <Button
            type="primary"
            size="large"
            style={{ alignItems: 'center', display: 'flex', gap: '10px' }}
            htmlType="submit"
            loading={submitButtonLoading}
          >
            Submit <BsArrowRight />
          </Button>
        </Row>
      </Row>
    </Card>
  );
};
