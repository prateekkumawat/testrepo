import { FormikProps } from 'formik';
import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { languages } from '../../../../CommonData';
import { ShadowedCard } from '../../../../Component/Card/Card';
import {
  StyledFormItem,
  StyledSimpleSelect,
} from '../../../../Component/Form/Form';
import { EmergencyContactComponent } from '../../EmergencyContact/EmergencyContact';
import { PCP } from '../../PCP/PCP';
import { CreatePatientScreen2 } from '../../Types';

export const PatientAdditionalInfoCard1: FC<
  FormikProps<CreatePatientScreen2>
> = (formikProps) => {
  return (
    <ShadowedCard className="adFirst-section">
      <EmergencyContactComponent {...formikProps} />
      <PCP {...formikProps} disabled />
      <StyledFormItem
        label="PCG"
        name="PCG"
        initialValue={formikProps.values.pcg || undefined}
      >
        <StyledSimpleSelect
          disabled
          showSearch
          placeholder="Select a PCG"
          onChange={(value) => formikProps.setFieldValue('PCG', value)}
          options={[
            { value: 'Alavi Amir', label: 'Alavi Amir' },
            { value: 'Hamilton, Shamantha', label: 'Hamilton, Shamantha' },
            { value: 'RUSH, JACQUELYN N', label: 'RUSH, JACQUELYN N' },
            {
              value: 'Select a primary care physician',
              label: 'Select a primary care physician',
            },
            {
              value: 'Select a primary care physician',
              label: 'Select a primary care physician',
            },
            // { value: 'Unknown', label: 'Unknown' },
            // { value: 'Unknown', label: 'Unknown' },
          ]}
        />
      </StyledFormItem>
      <StyledFormItem
        label="Language"
        name="language"
        initialValue={formikProps.values.language || undefined}
      >
        <StyledSimpleSelect
          showSearch
          placeholder="Select a language"
          onChange={(value) => formikProps.setFieldValue('language', value)}
          options={languages?.map((key) => ({
            value: key,
            label: key,
          }))}
        />
      </StyledFormItem>
    </ShadowedCard>
  );
};
