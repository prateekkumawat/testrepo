import { Row, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { FormikProps } from 'formik';
import React, { FC } from 'react';
import { ShadowedCard } from '../../../Component/Card/Card';
import { StyledCheckBox } from '../../../Component/Form/Form';
import { CreatePatientScreen1 } from '../Types';
import { AnotherPatient } from './AnotherPatient/AnotherPatient';
import { Other } from './Other/Other';
import { Relation } from './Relation/Relation';
import { ResponsilvePartyWrapper } from './ResponsibleParty.styled';

export interface ResponsiblePartyProps {
  formikProps: FormikProps<CreatePatientScreen1>;
}
export const ResponsibleParty: FC<ResponsiblePartyProps> = ({
  formikProps,
}) => {
  return (
    <ResponsilvePartyWrapper>
      <Row className="responsilve-party-wrapper">
        <ShadowedCard
          className={`${
            formikProps.values.selfResponsibleFlag ? 'disable-selection' : ''
          }`}
          title={
            <Row className="responsible-party-title">
              <Typography>Responsible party*</Typography>
              <StyledCheckBox
                checked={formikProps.values.selfResponsibleFlag}
                onChange={(e: CheckboxChangeEvent) => {
                  formikProps.setFieldValue(
                    'selfResponsibleFlag',
                    e?.target?.checked || false
                  );
                }}
              >
                self
              </StyledCheckBox>
            </Row>
          }
        >
          <Row className="responsible-party-popups">
            <AnotherPatient {...formikProps} />
            <Other {...formikProps} />
            <Relation {...formikProps} />
          </Row>
        </ShadowedCard>
      </Row>
    </ResponsilvePartyWrapper>
  );
};
