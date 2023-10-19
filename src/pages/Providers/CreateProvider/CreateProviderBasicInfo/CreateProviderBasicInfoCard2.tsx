import { Button, Card, Row } from 'antd';
import { FormikProps } from 'formik';
import React, { FC, ReactNode } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { countries, states } from '../../../../CommonData';
import { SecondaryButton } from '../../../../Component/Button/Button';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { CreaterCardHeader } from '../../CreaterCardHeader/CreaterCardHeader';
import { ProviderScreen1 } from '../../types';

export const CreateProviderBasicInfoCard2: FC<
  FormikProps<ProviderScreen1> & {
    className?: string;
    rederTabs: () => ReactNode;
  }
> = ({ className, rederTabs, ...formikProps }) => {
  console.log(
    'sformikProps.values.primaryPracticeLocation',
    formikProps.values.primaryPracticeLocation
  );
  return (
    <Card className={`card-wrapper ${className}`}>
      <CreaterCardHeader className="full-border">
        {rederTabs()}
      </CreaterCardHeader>
      <StyledFormItem
        label="E-mail Id"
        name="email"
        initialValue={formikProps.values.email}
        help={formikProps.errors.email}
        validateStatus={formikProps.errors.email ? 'error' : ''}
      >
        <StyledSimpleInput
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
        <StyledFormItem
          label="State"
          name="state"
          validateStatus={formikProps.errors.state ? 'error' : ''}
          help={formikProps.errors.state}
          initialValue={formikProps.values.state || undefined}
          style={{ width: '49%' }}
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
      </Row>
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Zip"
          name="zipCode"
          validateStatus={formikProps.errors.zipCode ? 'error' : ''}
          help={formikProps.errors.zipCode}
          initialValue={formikProps.values.zipCode}
          style={{ width: '49%' }}
        >
          <StyledSimpleInput
            status={formikProps.errors.zipCode ? 'error' : ''}
            name="zipCode"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a zipCode"
          />
        </StyledFormItem>
        <StyledFormItem
          label="Country"
          name="country"
          validateStatus={formikProps.errors.country ? 'error' : ''}
          help={formikProps.errors.country}
          initialValue={formikProps.values.country || undefined}
          style={{ width: '49%' }}
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
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Primary Practice Location"
          name="primaryPracticeLocation"
          validateStatus={
            formikProps.errors.primaryPracticeLocation ? 'error' : ''
          }
          help={formikProps.errors.primaryPracticeLocation}
          initialValue={formikProps.values.primaryPracticeLocation}
          style={{ width: '49%' }}
        >
          <StyledSimpleInput
            status={formikProps.errors.primaryPracticeLocation ? 'error' : ''}
            name="primaryPracticeLocation"
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
          initialValue={formikProps.values.pagerCode}
          style={{ width: '49%' }}
        >
          <StyledSimpleInput
            status={formikProps.errors.pagerCode ? 'error' : ''}
            name="pagerCode"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a Pager Code"
          />
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
        <Button
          type="primary"
          size="large"
          style={{ alignItems: 'center', display: 'flex', gap: '10px' }}
          htmlType="submit"
        >
          Next <BsArrowRight />
        </Button>
      </Row>
    </Card>
  );
};
