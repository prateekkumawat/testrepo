import { Button, Form, Row, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Formik } from 'formik';
import React, { FC, useRef, useState } from 'react';
import * as Yup from 'yup';
import { StyledFormItem, StyledInput } from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { AttorneySubTitle } from './AddAttorney.styled';

export interface AddAttorneysProps {
  onSubmit: (value: any) => void;
}

export const AddAttorneys: FC<AddAttorneysProps> = ({ onSubmit }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button
        className="add-btn"
        onClick={() => setModalOpen(true)}
        type="primary"
      >
        Add Attorneys
      </Button>
      <Popup
        title="Add Attorneys"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => {
          ref?.current?.click?.();
        }}
        width="55vw"
      >
        <>
          <AttorneySubTitle className="sub-title attorney-subTitle">
            Add new attorney
            </AttorneySubTitle>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              officeAddress: '',
              city: '',
              state: '',
              country: '',
              zip: '',
              notes: '',
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required('firstName is required'),
              lastName: Yup.string().required('lastName is required'),
              phone: Yup.string(),
              officeAddress: Yup.string(),
              city: Yup.string(),
              state: Yup.string(),
              country: Yup.string(),
              zip: Yup.string(),
              notes: Yup.string(),
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
                    label="First Name"
                    required
                    name="firstName"
                    validateStatus={formikProps.errors.firstName ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.firstName!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.firstName ? 'error' : ''}
                      name="firstName"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a first name"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Last Name"
                    required
                    name="lastName"
                    validateStatus={formikProps.errors.lastName ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.lastName!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.lastName ? 'error' : ''}
                      name="lastName"
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
                    label="Office Add"
                    name="officeAddress"
                    validateStatus={
                      formikProps.errors.officeAddress ? 'error' : ''
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.officeAddress!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.officeAddress ? 'error' : ''}
                      name="officeAddress"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a address line 1"
                    />
                  </StyledFormItem>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
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
                  <StyledFormItem
                    label="Country"
                    name="country"
                    validateStatus={formikProps.errors.country ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.country!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.country ? 'error' : ''}
                      name="country"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Select a country"
                    />
                  </StyledFormItem>
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
                  <StyledFormItem
                    label="Notes"
                    name="notes"
                    validateStatus={formikProps.errors.notes ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.notes!}</>}
                    style={{ width: '100%' }}
                  >
                    <TextArea
                      className="custom-scrolbar"
                      status={formikProps.errors.notes ? 'error' : ''}
                      name="notes"
                      showCount
                      size="large"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a additional notes"
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
