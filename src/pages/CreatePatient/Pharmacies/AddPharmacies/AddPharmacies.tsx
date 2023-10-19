import { Button, Form, Row, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import { Formik } from 'formik';
import React, { FC, useRef, useState } from 'react';
import * as Yup from 'yup';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledInput,
} from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { PharmaSubTtlWrapper } from './AddPharmacies.styled';

export interface AddEmergencyContactProps {
  onSubmit: (value: any) => void;
}

export const AddPharmacies: FC<AddEmergencyContactProps> = ({ onSubmit }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button
        className="add-btn"
        onClick={() => setModalOpen(true)}
        type="primary"
      >
        Add Pharmaciess
      </Button>
      <Popup
        title="Add new pharmacy"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => {
          ref?.current?.click?.();
        }}
        width="55vw"
      >
        <>
          <PharmaSubTtlWrapper className="sub-title pharmacies-subTitle">
            Add new pharmacy
            </PharmaSubTtlWrapper>
          <Formik
            initialValues={{
              name: '',
              addressLine1: '',
              addressLine2: '',
              city: '',
              state: '',
              zip: '',
              phone: '',
              ext: '',
              fax: '',
              ncpdpId: '',
              ePrescription: false,
              eMailEnabled: false,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Store Name is required'),
              addressLine1: Yup.string().required('Address Line is required'),
              addressLine2: Yup.string(),
              city: Yup.string(),
              state: Yup.string(),
              zip: Yup.string(),
              phone: Yup.string(),
              ext: Yup.string(),
              fax: Yup.string(),
              notes: Yup.string(),
              ncpdpId: Yup.string(),
              ePrescription: Yup.boolean(),
              eMailEnabled: Yup.boolean(),
            })}
            onSubmit={(values) => {
              onSubmit(values);
              setModalOpen(false);
            }}
          >
            {(formikProps) => (
              <Form onFinish={formikProps.handleSubmit} layout="vertical">
                <Row style={{ justifyContent: 'space-between' }}>
                  <StyledFormItem
                    label="Store Name"
                    required
                    name="name"
                    validateStatus={formikProps.errors.name ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.name!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.name ? 'error' : ''}
                      name="name"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a first name"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Address Line 1"
                    required
                    name="addressLine1"
                    validateStatus={
                      formikProps.errors.addressLine1 ? 'error' : ''
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.addressLine1!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.addressLine1 ? 'error' : ''}
                      name="addressLine1"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a last name"
                    />
                  </StyledFormItem>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <StyledFormItem
                    label="Phone"
                    name="phone"
                    validateStatus={formikProps.errors.phone ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.phone!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.phone ? 'error' : ''}
                      name="phone"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a phone"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="Address Line 2"
                    name="addressLine2"
                    validateStatus={
                      formikProps.errors.addressLine2 ? 'error' : ''
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.addressLine2!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.addressLine2 ? 'error' : ''}
                      name="addressLine2"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a address line 1"
                    />
                  </StyledFormItem>
                </Row>

                <Row style={{ justifyContent: 'space-between' }}>
                  <Row
                    style={{ justifyContent: 'space-between', width: '49%' }}
                  >
                    <StyledFormItem
                      label="Ext"
                      name="ext"
                      validateStatus={formikProps.errors.ext ? 'error' : ''}
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                      help={<>{formikProps.errors.ext!}</>}
                      style={{ width: '49%' }}
                    >
                      <StyledInput
                        status={formikProps.errors.ext ? 'error' : ''}
                        name="ext"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        placeholder="Type a ext"
                      />
                    </StyledFormItem>
                    <StyledFormItem
                      style={{ width: '49%' }}
                      label="Fax"
                      name="fax"
                      validateStatus={formikProps.errors.fax ? 'error' : ''}
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                      help={<>{formikProps.errors.fax!}</>}
                    >
                      <StyledInput
                        status={formikProps.errors.fax ? 'error' : ''}
                        name="fax"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        placeholder="Type a fax"
                      />
                    </StyledFormItem>
                  </Row>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="City"
                    name="city"
                    validateStatus={formikProps.errors.city ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.city!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.city ? 'error' : ''}
                      name="city"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a city"
                    />
                  </StyledFormItem>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="NCPDP iD"
                    name="ncpdpId"
                    validateStatus={formikProps.errors.ncpdpId ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.ncpdpId!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.ncpdpId ? 'error' : ''}
                      name="ncpdpId"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a NCPDP iD"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="State"
                    name="state"
                    validateStatus={formikProps.errors.state ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.state!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.state ? 'error' : ''}
                      name="state"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Select a state"
                    />
                  </StyledFormItem>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Row
                    style={{
                      justifyContent: 'space-between',
                      width: '49%',
                      alignItems: 'end',
                    }}
                  >
                    <StyledFormItem>
                      <StyledCheckBox
                        onChange={(e: CheckboxChangeEvent) => {
                          formikProps.setFieldValue(
                            'ePrescription',
                            e?.target?.checked || false
                          );
                        }}
                      >
                        e- Prescription Enabled
                      </StyledCheckBox>
                    </StyledFormItem>
                    <StyledFormItem>
                      <StyledCheckBox
                        onChange={(e: CheckboxChangeEvent) => {
                          formikProps.setFieldValue(
                            'eMailEnabled',
                            e?.target?.checked || false
                          );
                        }}
                      >
                        E- Mail Enabled
                      </StyledCheckBox>
                    </StyledFormItem>
                  </Row>

                  <StyledFormItem
                    label="zip"
                    name="zip"
                    validateStatus={formikProps.errors.zip ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.zip!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      placeholder="Type a zip code"
                      status={formikProps.errors.zip ? 'error' : ''}
                      name="zip"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                    />
                  </StyledFormItem>
                  <Button
                    ref={ref}
                    style={{ display: 'none' }}
                    htmlType="submit"
                  >
                    Save
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>
        </>
      </Popup>
    </div>
  );
};
