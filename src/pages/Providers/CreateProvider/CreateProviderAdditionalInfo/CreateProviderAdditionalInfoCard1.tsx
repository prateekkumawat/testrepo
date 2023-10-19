import { Card, Typography } from 'antd';
import { FormikProps } from 'formik';
import React, { FC } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
import { dateFormat } from '../../../../utility';
import {
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
} from '../../../../Component/Form/Form';
import { ProviderScreen2 } from '../../types';
import { CreaterCardHeader } from '../../CreaterCardHeader/CreaterCardHeader';

export const CreateProviderAdditionalInfoCard1: FC<
  FormikProps<ProviderScreen2> & { className?: string }
> = ({ className, ...formikProps }) => {
  return (
    <Card className={`card-wrapper ${className}`}>
      <CreaterCardHeader>
        <Typography>Additional Information</Typography>
      </CreaterCardHeader>
      <StyledFormItem
        label="Taxonomy Code"
        name="taxonomyCode"
        validateStatus={formikProps.errors.taxonomyCode ? 'error' : ''}
        help={formikProps.errors.taxonomyCode}
        initialValue={formikProps.values.taxonomyCode}
      >
        <StyledSimpleInput
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
          value={formikProps.values.deaNumber}
          status={formikProps.errors.deaNumber ? 'error' : ''}
          name="deaNumber"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="Type a DEA number"
        />
      </StyledFormItem>

      <StyledFormItem label="DEA Start Date" name="deaStartDate">
        <StyledSimpleDatePicker
          defaultValue={
            formikProps.values.deaStartDate
              ? dayjs(formikProps.values.deaStartDate, dateFormat)
              : undefined
          }
          style={{ width: '100%' }}
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
      </StyledFormItem>
      <StyledFormItem label="DEA End Date" name="deaEndDate">
        <StyledSimpleDatePicker
          defaultValue={
            formikProps.values.deaEndDate
              ? dayjs(formikProps.values.deaEndDate, dateFormat)
              : undefined
          }
          style={{ width: '100%' }}
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

      <StyledFormItem
        label="NPI Number (or UPIN)"
        name="npi"
        validateStatus={formikProps.errors.npi ? 'error' : ''}
        help={formikProps.errors.npi}
        initialValue={formikProps.values.npi}
      >
        <StyledSimpleInput
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
        validateStatus={formikProps.errors.specialLicense ? 'error' : ''}
        help={formikProps.errors.specialLicense}
        initialValue={formikProps.values.specialLicense}
      >
        <StyledSimpleInput
          value={formikProps.values.specialLicense}
          status={formikProps.errors.specialLicense ? 'error' : ''}
          name="specialLicense"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="Type a specialty License number"
        />
      </StyledFormItem>
    </Card>
  );
};
