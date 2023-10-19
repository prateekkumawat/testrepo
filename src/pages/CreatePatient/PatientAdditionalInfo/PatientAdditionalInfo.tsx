import { Form, Row } from 'antd';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { CreatePatientScreen2 } from '../Types';
import { PatientAdditionalInfoValidations } from '../validations';
import { PatientAdditionalInfoCard1 } from './PatientAdditionalInfoCard1/PatientAdditionalInfoCard1';
import { PatientAdditionalInfoCard2 } from './PatientAdditionalInfoCard2/PatientAdditionalInfoCard2';
import { PatientAdditionalInfoCard3 } from './PatientAdditionalInfoCard3/PatientAdditionalInfoCard3';
import { PatientAddInfoWrapper, StyledPatientAdditionalInfoCard } from './PatientAdditionalInfo.styled';

export interface PatientAdditionalInfoProps {
  goNext: (data: CreatePatientScreen2) => void;
  goBack: (data: CreatePatientScreen2) => void;
  initialSteps: CreatePatientScreen2 | null;
  submitButtonLoading: boolean;
}
export const PatientAdditionalInfo: FC<PatientAdditionalInfoProps> = ({
  goNext,
  goBack,
  initialSteps,
  submitButtonLoading,
}) => {
  const initialValues: CreatePatientScreen2 = initialSteps ?? {
    empStatus: '',
    ethnicity: '',
    language: '',
    pcp: '',
    pcg: '',
    maritalStatus: '',
    outStandingBalance: 0,
    emergencyContacts: [],
    Pharmacies: {
      name:'',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      state: '',
      zipCode: '',
      phone: '',
      "ext.": '',
      notes: '',
      ncpdpId: '',
      fax: '',
      ePrescription: false,
      eMailEnabled: false,
    },
    Attorneys: {
      firstName: '',
      lastName: '',
      officeAddress: '',
      primaryPhoneNumber: '',
      additionalNotes: '',
    },
    emailPermission: 'Yes',
    textPermission: 'Yes',
    voicePermission: 'Yes',
    preferredModeOfCommunication: '',
  };
  console.log('initialValues', { initialValues, initialSteps });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PatientAdditionalInfoValidations}
      onSubmit={(value) => {
        console.log('value', value);
        goNext(value);
      }}
    >
      {(formikProps) => (
        <Form onFinish={formikProps.handleSubmit} layout="vertical">
          <PatientAddInfoWrapper>
            <StyledPatientAdditionalInfoCard>
            <PatientAdditionalInfoCard1 {...formikProps} />
            </StyledPatientAdditionalInfoCard>
            
            <StyledPatientAdditionalInfoCard><PatientAdditionalInfoCard2 {...formikProps} /></StyledPatientAdditionalInfoCard>
            
            <StyledPatientAdditionalInfoCard><PatientAdditionalInfoCard3
              {...formikProps}
              goBack={goBack}
              submitButtonLoading={submitButtonLoading}
            /></StyledPatientAdditionalInfoCard>
            
          </PatientAddInfoWrapper>
        </Form>
      )}
    </Formik>
  );
};
