import { Button, Form, Row, Typography } from 'antd';
import { Formik } from 'formik';
import React, { FC, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import * as Yup from 'yup';
import { StyledFormItem, StyledInput } from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { EmergencyContact } from '../../Types';
import { PhoneNumber } from '../../../../Component/PhoneNumber/PhoneNumber';

export interface AddEmergencyContactProps {
  onSubmit: (value: any) => void;
}

export const AddEmergencyContact: FC<AddEmergencyContactProps> = ({
  onSubmit,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  const initialValue: EmergencyContact = {
    firstName: '',
    lastName: '',
    relation: '',
    phoneNumber: '',
    ext: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  };

  return (
    <div>
      <Button className="add-btn" onClick={() => setModalOpen(true)}>
        <AiOutlinePlus className="add-icon" />
      </Button>
      <Popup
        title="Emergency Contact"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => {
          ref?.current?.click?.();
        }}
        width="55vw"
      >
        <>
          <Typography>Fill the Emergency Contact details</Typography>
          <Formik
            initialValues={initialValue}
            validationSchema={Yup.object({
              firstName: Yup.string().required('firstName is required'),
              lastName: Yup.string(),
              relation: Yup.string(),
              phoneNumber: Yup.string()
                .required('Phone Number is required')
                .min(10, 'Phone Number needs to be 10 digits'),
              ext: Yup.string(),
              addressLine1: Yup.string(),
              addressLine2: Yup.string(),
              city: Yup.string(),
              state: Yup.string(),
              country: Yup.string(),
              zipCode: Yup.string(),
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
                    label="Relation"
                    required
                    name="relation"
                    validateStatus={formikProps.errors.relation ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.relation!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      status={formikProps.errors.relation ? 'error' : ''}
                      name="relation"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Select a relation"
                    />
                  </StyledFormItem>
                  <Row
                    style={{ justifyContent: 'space-between', width: '49%' }}
                  >
                    <StyledFormItem
                      label="Phone"
                      required
                      name="phoneNumber"
                      validateStatus={
                        formikProps.errors.phoneNumber ? 'error' : ''
                      }
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                      help={<>{formikProps.errors.phoneNumber!}</>}
                      style={{ width: '69%' }}
                    >
                      <PhoneNumber
                        name="phoneNumber"
                        error={formikProps.errors.phoneNumber ? 'error' : ''}
                        onValueChange={(value) =>
                          formikProps.setFieldValue(
                            'phoneNumber',
                            value?.floatValue?.toString()
                          )
                        }
                      />
                    </StyledFormItem>
                    <StyledFormItem
                      label="ext"
                      required
                      name="ext"
                      validateStatus={formikProps.errors.ext ? 'error' : ''}
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                      help={<>{formikProps.errors.ext!}</>}
                      style={{ width: '30%' }}
                    >
                      <StyledInput
                        status={formikProps.errors.ext ? 'error' : ''}
                        name="ext"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        placeholder="Extensions"
                      />
                    </StyledFormItem>
                  </Row>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="Address1"
                    name="addressLine1"
                    validateStatus={
                      formikProps.errors.addressLine1 ? 'error' : ''
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.addressLine1!}</>}
                  >
                    <StyledInput
                      status={formikProps.errors.addressLine1 ? 'error' : ''}
                      name="addressLine1"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      placeholder="Type a address line 1"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    style={{ width: '49%' }}
                    label="Address2"
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
                      placeholder="Type a address line 2"
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
                    required
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
                    label="zipCode"
                    required
                    name="zipCode"
                    validateStatus={formikProps.errors.zipCode ? 'error' : ''}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react/jsx-no-useless-fragment
                    help={<>{formikProps.errors.zipCode!}</>}
                    style={{ width: '49%' }}
                  >
                    <StyledInput
                      placeholder="Type a zipCode code"
                      status={formikProps.errors.zipCode ? 'error' : ''}
                      name="zipCode"
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
