import React, { FC } from 'react';
import { Form, Row } from 'antd';
import { Formik } from 'formik';
import { CreatePatientScreen1 } from '../Types';
import { PatientBasicDetailValidations } from '../validations';
import { PatientInfoBasicCard1 } from './PatientInfoBasicCard1/PatientInfoBasicCard1';
import { PatientInfoBasicCard2 } from './PatientInfoBasicCard2/PatientInfoBasicCard2';
import { PatientInfoBasicCard3 } from './PatientInfoBasicCard3/PatientInfoBasicCard3';
import { PatientPersonalWrapper } from './PatientPersonalInfo.styled';

export interface IPatientPersonalInfoProps {
  className?: string;
  goNext: (data: CreatePatientScreen1) => void;
  initialSteps: CreatePatientScreen1 | null;
}

export const PatientPersonalInfo: FC<IPatientPersonalInfoProps> = ({
  className = '',
  goNext,
  initialSteps,
}) => {
  const initialValue: CreatePatientScreen1 = initialSteps ?? {
    profileImage: '',
    ssn: '',
    primaryPhoneNumber: '',
    secondaryPhoneNumber: '',
    email: '',
    dateOfBirth: '',
    accountNo: '',
    gender: '',
    firstName: '',
    prefix: '',
    middleName: '',
    lastName: '',
    suffix: '',
    preferredName: '',
    selfResponsibleFlag: true,
    addressLine1: '',
    addressLine2: '',
    county: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    referringProvider: {
      npi: '',
      npiType: '',
      specialty: '',
      providerFirstName: '',
      providerLastName: '',
      organisationName: '',
    },
    releaseOfInfo: '',
    prescriptionHistoryConsent: '',
  };

  return (
    <PatientPersonalWrapper className={`patient-personal-wrapper ${className}`}>
      <Formik
        initialValues={initialValue}
        validationSchema={PatientBasicDetailValidations}
        validateOnBlur
        onSubmit={(value: CreatePatientScreen1) => {
          goNext(value);
        }}
      >
        {(formikProps) => (
          <Form
            className="formcard"
            onFinish={formikProps.handleSubmit}
            layout="vertical"
          >
            <div className="row g-3">
              <div className="col-lg-4">
                <PatientInfoBasicCard1 {...formikProps} />
              </div>
              <div className="col-lg-4">
                <PatientInfoBasicCard2 {...formikProps} />
              </div>
              <div className="col-lg-4">
                <PatientInfoBasicCard3 {...formikProps} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </PatientPersonalWrapper>
  );
};
