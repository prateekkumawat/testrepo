import { Row, Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import moment from 'moment';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
  StyledSimpleDatePicker,
} from '../../../../Component/Form/Form';

import { dateFormat } from '../../../../utility';
import { AddMedicineFormWrapper } from '../../MedsWrapper.styled';
import { AllergiesTab, Meds } from '../../types';

export interface AddMedsScreen1Props {
  className?: string;
  handleERx: (value: Meds) => void;
  drugId: string;
  drugName: string;
  activeStep: string;
  setActiveStep: Dispatch<SetStateAction<string>>;
  savedPrescription: Meds | null;
  handleSubmit: () => void;
  submitBtnLoader: boolean;
  onCancel: () => void;
  onSave: (val: Meds) => void;
}
export const AddMedsScreen1: FC<AddMedsScreen1Props> = ({
  className,
  handleERx,
  drugId,
  drugName,
  savedPrescription,
  activeStep,
  setActiveStep,
  submitBtnLoader,
  handleSubmit,
  onCancel,
  onSave,
}) => {
  const { patientId } = useParams();

  const initialValues: Meds = savedPrescription ?? {
    quantity: '',
    when: '',
    dispense: '',
    additionalRefills: '',
    direction: '',
    earliestFillDate: '',
    frequency: '',
    duration: '',
    patientId: patientId!,
    drugId,
    drugName,
    activeFlag: true,
    prescribedFlag: true,
    supplementsFlag: activeStep !== AllergiesTab.Meds,
  };
  console.log('savedPrescription', savedPrescription, initialValues);

  return (
    <AddMedicineFormWrapper className={className}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values) => {
          handleERx(values);
        }}
      >
        {(formikProps) => (
          <Form onFinish={formikProps?.handleSubmit}>
            <>
              <Row>
                <Row className="add-medicine-column-1">
                  <Row className="add-medicine-types">
                    <Row className="types">Interaction</Row>
                    <Row className="types">Food</Row>
                    <Row className="types">Drug</Row>
                    <Row className="types">Allergy</Row>
                  </Row>
                  <Row className="add-medicine-dosage">Dosage</Row>
                  <Row className="dosage-content">
                    <StyledFormItem
                      label="Quantity"
                      className="add-medicine-labels"
                      name="quantity"
                      validateStatus={
                        formikProps.errors.quantity ? 'error' : ''
                      }
                      help={formikProps.errors.quantity}
                      initialValue={formikProps.values.quantity}
                    >
                      <StyledSimpleInput
                        name="quantity"
                        className="add-medicine-input-box"
                        disabled={activeStep !== 'add'}
                        value={formikProps.values.quantity}
                        status={formikProps.errors.quantity ? 'error' : ''}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                      />
                      <span>Units: Tablet,Orally</span>
                    </StyledFormItem>
                    <StyledFormItem
                      label="When"
                      className="add-medicine-labels"
                      name="when"
                      validateStatus={formikProps.errors.when ? 'error' : ''}
                      help={formikProps.errors.when}
                      initialValue={formikProps.values.when}
                    >
                      <StyledSimpleSelect
                        options={[
                          'before a meal',
                          'after a meal',
                          'with meal',
                          'in the morning',
                          'in the evening',
                          'at bedtime',
                          'in the morning before meal',
                          'at bedtime before meal',
                        ].map((e) => ({
                          value: e,
                          label: e,
                        }))}
                        className="add-medicine-input-box"
                        disabled={activeStep !== 'add'}
                        value={formikProps.values.when}
                        status={formikProps.errors.when ? 'error' : ''}
                        onChange={(value) =>
                          formikProps.setFieldValue('when', value)
                        }
                      />
                      <span>Day(S)</span>
                    </StyledFormItem>
                    <StyledFormItem
                      label="Dispense"
                      className="add-medicine-labels"
                      name="dispense"
                      validateStatus={
                        formikProps.errors.dispense ? 'error' : ''
                      }
                      help={formikProps.errors.dispense}
                      initialValue={formikProps.values.dispense}
                    >
                      <StyledSimpleInput
                        name="dispense"
                        className="add-medicine-input-box"
                        disabled={activeStep !== 'add'}
                        value={formikProps.values.dispense}
                        status={formikProps.errors.dispense ? 'error' : ''}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                      />
                    </StyledFormItem>
                    <StyledFormItem
                      label="Additional Refills"
                      className="add-medicine-labels"
                      name="additionalRefills"
                      validateStatus={
                        formikProps.errors.additionalRefills ? 'error' : ''
                      }
                      help={formikProps.errors.additionalRefills}
                      initialValue={formikProps.values.additionalRefills}
                    >
                      <StyledSimpleInput
                        name="additionalRefills"
                        className="add-medicine-input-box"
                        disabled={activeStep !== 'add'}
                        value={formikProps.values.additionalRefills}
                        status={
                          formikProps.errors.additionalRefills ? 'error' : ''
                        }
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                      />
                    </StyledFormItem>
                  </Row>
                </Row>
                <Row className="add-medicine-column-2">
                  <StyledFormItem
                    label="Direction"
                    className="add-medicine-labels"
                    name="direction"
                    validateStatus={formikProps.errors.direction ? 'error' : ''}
                    help={formikProps.errors.direction}
                    initialValue={formikProps.values.direction}
                  >
                    <TextArea
                      name="direction"
                      rows={5}
                      className="add-medicine-input-box"
                      disabled={activeStep !== 'add'}
                      value={formikProps.values.direction}
                      status={formikProps.errors.direction ? 'error' : ''}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      style={{ height: '120px' }}
                      placeholder="<Qty.><Units><Freq.><When> for <Duration> day(s), <Route>"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Earliest Fill Date"
                    className="add-medicine-labels"
                    name="earliestFillDate"
                  >
                    <StyledSimpleDatePicker
                      className="add-medicine-input-box"
                      disabled={activeStep !== 'add'}
                      defaultValue={
                        formikProps.values.earliestFillDate
                          ? dayjs(
                              formikProps.values.earliestFillDate,
                              dateFormat
                            )
                          : undefined
                      }
                      style={{ width: '100%' }}
                      name="earliestFillDate"
                      onChange={(_value, dateString) =>
                        formikProps.setFieldValue(
                          'earliestFillDate',
                          moment(dateString).format('yyyy-MM-DD')
                        )
                      }
                      placeholder="Type a earliest Date"
                      format="MM/DD/YYYY"
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Frequency"
                    className="add-medicine-labels"
                    name="frequency"
                    validateStatus={formikProps.errors.frequency ? 'error' : ''}
                    help={formikProps.errors.frequency}
                    initialValue={formikProps.values.frequency}
                  >
                    <StyledSimpleSelect
                      options={[
                        'once a day',
                        'once',
                        'once a week',
                        'once a month',
                        'every other day',
                        '2 times a day',
                        'twice',
                        '2 times a week',
                        '2 times a month',
                        '3 times a day',
                        '3 times',
                        '3 times a week',
                        '4 times a day',
                        '4 times a week',
                        '5 times a day',
                        'every 4 hours',
                        '5 times a week',
                        'As needed',
                      ].map((e) => ({
                        value: e,
                        label: e,
                      }))}
                      className="add-medicine-input-box"
                      disabled={activeStep !== 'add'}
                      value={formikProps.values.frequency}
                      status={formikProps.errors.frequency ? 'error' : ''}
                      onChange={(value) =>
                        formikProps.setFieldValue('frequency', value)
                      }
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Duration"
                    className="add-medicine-labels"
                    name="duration"
                    validateStatus={formikProps.errors.duration ? 'error' : ''}
                    help={formikProps.errors.duration}
                    initialValue={formikProps.values.duration}
                  >
                    <StyledSimpleInput
                      name="duration"
                      className="add-medicine-input-box"
                      disabled={activeStep !== 'add'}
                      value={formikProps.values.duration}
                      status={formikProps.errors.duration ? 'error' : ''}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      style={{ width: '50%' }}
                    />
                    <span>Day(S)</span>
                  </StyledFormItem>
                </Row>
              </Row>
              {activeStep === 'add' ? (
                <Row
                  style={{
                    borderTop: '1px solid grey',
                    width: '100%',
                    padding: '20px 0',
                  }}
                >
                  <Row style={{ width: '73%' }}>
                    <Button className="bttns" onClick={() => onCancel()}>
                      Cancel
                    </Button>
                  </Row>
                  <Row style={{ gap: '1%', width: '27%' }}>
                    <Button
                      className="bttns"
                      disabled={!!Object.keys(formikProps.errors)?.length}
                      onClick={() => {
                        onSave(formikProps.values);
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      className="bttns"
                      style={{ backgroundColor: '#273C91', color: 'white' }}
                    >
                      Paper Rx
                    </Button>
                    <Button
                      htmlType="submit"
                      className="bttns"
                      style={{ backgroundColor: '#972587', color: 'white' }}
                    >
                      eRX
                    </Button>
                  </Row>
                </Row>
              ) : (
                <Row
                  style={{
                    borderTop: '1px solid grey',
                    width: '100%',
                    padding: '20px 0',
                  }}
                >
                  <Row
                    style={{
                      width: '70%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button className="bttns" onClick={() => onCancel()}>
                      Cancel
                    </Button>
                    <StyledFormItem
                      label="Enter your Password"
                      style={{ width: '60%' }}
                    >
                      <StyledSimpleInput
                        className="add-medicine-input-box"
                        disabled={activeStep !== 'add'}
                        style={{ width: '80%' }}
                      />
                    </StyledFormItem>
                  </Row>
                  <Row
                    style={{
                      width: '30%',
                      display: 'flex',
                      gap: '5px',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      className="bttns"
                      style={{ backgroundColor: '#273C91', color: 'white' }}
                      onClick={() => setActiveStep('add')}
                    >
                      Back
                    </Button>
                    <Button
                      loading={submitBtnLoader}
                      onClick={handleSubmit}
                      className="bttns"
                      htmlType="submit"
                      style={{
                        backgroundColor: '#972587',
                        color: 'white',
                        fontSize: '0.9em',
                      }}
                    >
                      Sign & Send
                    </Button>
                  </Row>
                </Row>
              )}
            </>
          </Form>
        )}
      </Formik>
    </AddMedicineFormWrapper>
  );
};
