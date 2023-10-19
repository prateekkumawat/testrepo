import { Typography, Row } from 'antd';
import { FormikProps } from 'formik';
import React, { useState, FC, useEffect } from 'react';
import { FaRegClone } from 'react-icons/fa';
import { StyledFormItem } from '../../../Component/Form/Form';
import { CreatePatientScreen1, RefferingProvider } from '../Types';
import { ReferringProviderWithKey } from './common';
import { ViewReferringProviders } from './ViewReferringProvider/ViewReferringProvider';
import { ReferringProviderWrapper } from './ReferringProvider.styled';

export const ReferringProvider: FC<FormikProps<CreatePatientScreen1> & {disabled?:boolean}> = (
  {disabled, ...formikProps}
) => {
  const [selectedProvider, setSelectedProvider] = useState<ReferringProviderWithKey>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const renderText = (referingObj: RefferingProvider): string => {
    if (!referingObj) return '';
    return [
      referingObj?.npi,
      referingObj?.npiType,
      referingObj?.specialty,
      referingObj?.organisationName,
      referingObj?.providerFirstName,
      referingObj?.providerLastName,
    ]
      .map((e) => e?.trim())
      .filter(Boolean)
      .join(', ');
  };


  return (
    <ReferringProviderWrapper className={`referring-provider-wrapper ${disabled ? 'disabled-input' : ''}`} style={{ width: '100%' }}>
      <StyledFormItem
        label="Referring Provider"
        name="referringProvider"
        style={{ width: '100%' }}
        // rules={[{ required: true, message: 'Referring Provider is required' }]}
      >
        <div className="copied-input">
          <Typography className="provider-text">
            {renderText(formikProps?.values?.referringProvider)}
          </Typography>
          <FaRegClone
            onClick={() => {if(!disabled) setModalOpen(true)}}
            className="open-popup-icon"
          />
        </div>
      </StyledFormItem>
      <ViewReferringProviders
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectedProvider={selectedProvider ? [selectedProvider] : []}
        onSubmit={(values) => {
          setSelectedProvider(values[0]);
          formikProps.setFieldValue('referringProvider', values[0]);
          setModalOpen(false);
        }}
      />
      </ReferringProviderWrapper>
  );
};
