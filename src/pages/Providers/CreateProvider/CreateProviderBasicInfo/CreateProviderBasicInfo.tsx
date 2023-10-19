import { Form, Row } from 'antd';
import { Formik } from 'formik';
import React, { FC, ReactNode } from 'react';
import { ProviderScreen1 } from '../../types';
import { ProviderBasicInfoValidations } from '../../validations';
import { CreateProviderBasicInfoStyled } from './CreateProviderBasicInfo.styled';
import { CreateProviderBasicInfoCard1 } from './CreateProviderBasicInfoCard1';
import { CreateProviderBasicInfoCard2 } from './CreateProviderBasicInfoCard2';

export interface IProviderPersonalInfoProps {
  className?: string;
  goNext: (data: ProviderScreen1) => void;
  initialSteps: ProviderScreen1 | null;
  rederTabs: () => ReactNode;
}

export const CreateProviderBasicInfo: FC<IProviderPersonalInfoProps> = ({
  className,
  rederTabs,
  goNext,
  initialSteps,
}) => {
  const initalValues = initialSteps ?? {
    firstName: '',
    lastName: '',
    prefix: '',
    degree: '',
    dateOfBirth: '',
    gender: '',
    primaryNumber: '',
    secondaryNumber: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    primaryPracticeLocation: '',
    pagerCode: '',
  };
  return (
    <CreateProviderBasicInfoStyled
      className={`provider-basic-info ${className}`}
    >
      <Formik
        initialValues={initalValues}
        validationSchema={ProviderBasicInfoValidations}
        validateOnBlur
        onSubmit={(value: ProviderScreen1) => {
          goNext(value);
        }}
      >
        {(formikProps) => (
          <Form onFinish={formikProps.handleSubmit} layout="vertical">
            <CreateProviderBasicInfoCard1
              {...formikProps}
              className="small-card"
            />
            <CreateProviderBasicInfoCard2
              rederTabs={rederTabs}
              {...formikProps}
              className="large-card"
            />
          </Form>
        )}
      </Formik>
    </CreateProviderBasicInfoStyled>
  );
};
