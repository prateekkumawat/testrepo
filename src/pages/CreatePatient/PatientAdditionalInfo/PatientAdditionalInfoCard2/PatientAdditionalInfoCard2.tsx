import { FormikProps } from 'formik';
import React, { FC } from 'react';
import { ShadowedCard } from '../../../../Component/Card/Card';
import {
  StyledFormItem,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { Attorneys } from '../../Attorneys/Attorneys';
import { CreatePatientScreen2 } from '../../Types';

export const PatientAdditionalInfoCard2: FC<
  FormikProps<CreatePatientScreen2>
> = (formikProps) => {
  return (
    <ShadowedCard className="adSecond-section">
      <StyledFormItem
        label="Ethnicity"
        name="ethnicity"
        initialValue={
          formikProps?.values?.ethnicity?.split(',').filter(Boolean) || []
        }
      >
        <StyledSimpleSelect
          showSearch
          placeholder="Select a ethnicity"
          onChange={(value) => {
            formikProps.setFieldValue(
              'ethnicity',
              (value as string[])?.join(',')
            );
          }}
          options={[
            { value: 'Non-Hispanic', label: 'Non-Hispanic' },
            { value: 'African American', label: 'African American' },
            { value: 'Asian', label: 'Asian' },
            { value: 'Native American', label: 'Native American' },
            { value: 'Native Hawaiian', label: 'Native Hawaiian' },
            { value: 'Multiracial', label: 'Multiracial' },
            { value: 'Not Mentioned', label: 'Not Mentioned' },
          ]}
        />
      </StyledFormItem>
      <StyledFormItem
        label="Emp Status"
        name="empStatus"
        initialValue={formikProps.values.empStatus || undefined}
      >
        <StyledSimpleSelect
          showSearch
          placeholder="Select a Emp Status"
          onChange={(value) => formikProps.setFieldValue('empStatus', value)}
          options={[
            { value: 'Employed full-time', label: 'Employed full-time' },
            { value: 'Employed part-time', label: 'Employed part-time' },
            { value: 'Not employed', label: 'Not employed' },
            { value: 'Self-employed', label: 'Self-employed' },
            { value: 'Retired', label: 'Retired' },
            {
              value: 'On active military duty',
              label: 'On active military duty',
            },
            {
              value: 'Reserved for national duty',
              label: 'Reserved for national duty',
            },
            { value: 'Unknown', label: 'Unknown' },
          ]}
        />
      </StyledFormItem>
      <StyledFormItem
        label="Marital Status"
        name="maritalStatus"
        initialValue={formikProps.values.maritalStatus || undefined}
      >
        <StyledSimpleSelect
          showSearch
          placeholder="Select a Marital Status"
          onChange={(value) =>
            formikProps.setFieldValue('maritalStatus', value)
          }
          options={[
            { value: 'married', label: 'Married' },
            { value: 'divorce', label: 'Divorce' },
            { value: 'partner', label: 'Partner' },
            { value: 'single', label: 'single' },
            { value: 'Widow', label: 'Widow' },
          ]}
        />
      </StyledFormItem>
      <Attorneys {...formikProps} disabled />
    </ShadowedCard>
  );
};
