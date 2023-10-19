import { Form, Row } from 'antd';
import { Formik } from 'formik';
import React, { FC, ReactNode } from 'react';
import { ProviderScreen2 } from '../../types';
import { ProviderBasicInfoValidations } from '../../validations';
import { CreateProviderAddiitonalInfoStyled } from './CreateProviderAdditionalInfo.styled';
import { CreateProviderAdditionalInfoCard1 } from './CreateProviderAdditionalInfoCard1';
import { CreateProviderAdditionalInfoCard2 } from './CreateProviderAdditionalInfoCard2';

export interface IProviderPersonalInfoProps {
  className?: string;
  goNext: (data: ProviderScreen2) => void;
  initialSteps: ProviderScreen2 | null;
  submitButtonLoading: boolean;
  goBack: (data: ProviderScreen2) => void;
  rederTabs: () => ReactNode;
}

export const CreateProviderAdditionalInfo: FC<IProviderPersonalInfoProps> = ({
  className,
  goNext,
  goBack,
  initialSteps,
  submitButtonLoading,
  rederTabs,
}) => {
  const initalValues = initialSteps ?? {
    taxonomyCode: '',
    deaNumber: '',
    deaStartDate: '',
    deaEndDate: '',
    npi: '',
    specialLicense: '',
    licensingSate: '',
    specialLicenseStartDate: '',
    specialLicenseEndDate: '',
    // AnesthesiaLicense: '',
    ssn: '',
    taxIdType: '',
    taxId: '',
    sendProviderCredentials: '',
  };
  return (
    <CreateProviderAddiitonalInfoStyled
      className={`provider-basic-info ${className}`}
    >
      <Formik
        initialValues={initalValues}
        validationSchema={ProviderBasicInfoValidations}
        validateOnBlur
        onSubmit={(value: ProviderScreen2) => {
          goNext(value);
        }}
      >
        {(formikProps) => {
          return (
            <Form onFinish={formikProps.handleSubmit} layout="vertical">
              <CreateProviderAdditionalInfoCard1
                {...formikProps}
                className="small-card"
              />
              <CreateProviderAdditionalInfoCard2
                goBack={goBack}
                {...formikProps}
                className="large-card"
                rederTabs={rederTabs}
                submitButtonLoading={submitButtonLoading}
              />
            </Form>
          );
        }}
      </Formik>
    </CreateProviderAddiitonalInfoStyled>
  );
};
