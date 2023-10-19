import React, { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Button, Row, Form, notification } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../Component/Form/Form';
import { Vitals } from '../VitalsType';
import { ShadowedCard } from '../../../Component/Card/Card';
import { AddVitalsWrapper } from './AddVitals.styled';
import { PatientService } from '../../../Service/Patient';

interface AddVitalsProps {
  className?: string;
}

export const AddVitals: React.FC<AddVitalsProps> = ({ className }) => {
  const { patientId } = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const patientService = PatientService();

  const calculateBMI = (values: Vitals): number | null => {
    if (values.weight > 0 && values.heightFt > 0 && values.heightInch >= 0) {
      const heightMeters =
        values.heightFt * 0.3048 + values.heightInch * 0.0254;
      const weightKg = values.weight * 0.453592;
      return weightKg / (heightMeters * heightMeters);
    }
    return null;
  };

  const handleSubmit = async (
    values: Vitals,
    actions: FormikHelpers<Vitals>
  ) => {
    try {
      setLoader(true);
      const payload = {
        patientId,
        assessmentDate: moment(new Date()).format('YYYY-MM-DD'),
        weight: values.weight,
        height: `${values.heightFt}.${values.heightInch}`,
        bloodPressure: `${values.systolicBP}/${values.diastolicBP}`,
        pulseRate: values.pulseRate,
        o2Saturation: values.o2Saturation,
        temperature: values.temperature,
        respirationRate: values.respirationRate,
        bmi: calculateBMI(values),
      };
      await patientService.addVitalsForPatient(payload);
      notification.success({
        message: 'Successfully added vitals',
      });
      actions.resetForm();
    } catch (error: any) {
      notification.error({
        message: error?.response || 'Error occured while adding vitals',
      });
    } finally {
      setLoader(false);
    }
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <AddVitalsWrapper className={className}>
      <Formik
        initialValues={{
          heightFt: 0,
          heightInch: 0,
          weight: 0,
          systolicBP: 0,
          diastolicBP: 0,
          pulseRate: '',
          o2Saturation: '',
          temperature: '',
          respirationRate: '',
          assessmentDate: currentDate,
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const bmi = calculateBMI(formikProps.values);
          return (
            <Form className="form" onFinish={formikProps.handleSubmit}>
              <div className="date-container">
                <span className="date-items">{currentDate}</span>
              </div>
              <ShadowedCard style={{ padding: '10px !important' }}>
                <Row className="form_items">
                  <Row className="form-item-group-1">
                    <StyledFormItem
                      label="Height"
                      name="heightFt"
                      className="form-items"
                      initialValue={formikProps.values.heightFt}
                      help={formikProps.errors.heightFt}
                      validateStatus={
                        formikProps.errors.heightFt ? 'error' : ''
                      }
                    >
                      <StyledSimpleInput
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        value={formikProps.values.heightFt}
                        status={formikProps.errors.heightFt ? 'error' : ''}
                        className="vitals_input"
                        placeholder="Feet"
                        name="heightFt"
                        type="number"
                      />
                      <span className="form-items-sidelabel">Ft.</span>
                    </StyledFormItem>
                    <StyledFormItem
                      name="heightInch"
                      initialValue={formikProps.values.heightInch}
                      help={formikProps.errors.heightInch}
                      validateStatus={
                        formikProps.errors.heightInch ? 'error' : ''
                      }
                    >
                      <StyledSimpleInput
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        value={formikProps.values.heightInch}
                        status={formikProps.errors.heightInch ? 'error' : ''}
                        className="vitals_input"
                        placeholder="Inches"
                        name="heightInch"
                        type="number"
                      />
                      <span className="form-items-sidelabel">In.</span>
                    </StyledFormItem>
                  </Row>
                  <Row>
                    <StyledFormItem
                      label="Weight"
                      name="weight"
                      initialValue={formikProps.values.weight}
                      help={formikProps.errors.weight}
                      validateStatus={formikProps.errors.weight ? 'error' : ''}
                    >
                      <StyledSimpleInput
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        value={formikProps.values.weight}
                        status={formikProps.errors.weight ? 'error' : ''}
                        className="vitals_input"
                        placeholder="Weight"
                        name="weight"
                        type="number"
                      />
                      <span className="form-items-sidelabel">Lbs.</span>
                    </StyledFormItem>
                  </Row>
                </Row>
                <span className="form-items-sidelabel">
                  Body mass index (BMI): {bmi ? Math.floor(bmi) : null}
                </span>
              </ShadowedCard>

              <ShadowedCard>
                <div className="form_items_heading">Blood Pressure</div>
                <Row className="form_items">
                  <Row className="form-item-group-2">
                    <StyledFormItem
                      label="Systolic"
                      name="systolicBP"
                      initialValue={formikProps.values.systolicBP}
                      help={formikProps.errors.systolicBP}
                      validateStatus={
                        formikProps.errors.systolicBP ? 'error' : ''
                      }
                    >
                      <StyledSimpleInput
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        value={formikProps?.values?.systolicBP}
                        status={formikProps.errors.systolicBP ? 'error' : ''}
                        className="vitals_input"
                        placeholder="Systolic"
                        name="systolicBP"
                        type="number"
                      />
                    </StyledFormItem>
                  </Row>
                  <Row className="form-items-bp">
                    <StyledFormItem
                      label="Diastolic"
                      name="diastolicBP"
                      initialValue={formikProps.values.diastolicBP}
                      help={formikProps.errors.diastolicBP}
                      validateStatus={
                        formikProps.errors.diastolicBP ? 'error' : ''
                      }
                    >
                      <StyledSimpleInput
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        value={formikProps.values.diastolicBP}
                        status={formikProps.errors.diastolicBP ? 'error' : ''}
                        className="vitals_input"
                        placeholder="Diastolic"
                        name="diastolicBP"
                        type="number"
                      />
                    </StyledFormItem>
                  </Row>
                </Row>
              </ShadowedCard>

              <ShadowedCard>
                <Row className="form_items">
                  <StyledFormItem
                    label="Pulse Rate"
                    name="pulseRate"
                    initialValue={formikProps.values.pulseRate}
                    help={formikProps.errors.pulseRate}
                    validateStatus={formikProps.errors.pulseRate ? 'error' : ''}
                  >
                    <StyledSimpleInput
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.pulseRate}
                      status={formikProps.errors.pulseRate ? 'error' : ''}
                      className="vitals_input"
                      placeholder="Pulse Rate"
                      name="pulseRate"
                      type="text"
                    />
                    <span className="form-items-sidelabel-bold">bpm</span>
                  </StyledFormItem>
                </Row>
              </ShadowedCard>

              <ShadowedCard>
                <Row className="form_items">
                  <StyledFormItem
                    label="O2 Sat."
                    name="o2Saturation"
                    initialValue={formikProps.values.o2Saturation}
                    help={formikProps.errors.o2Saturation}
                    validateStatus={
                      formikProps.errors.o2Saturation ? 'error' : ''
                    }
                  >
                    <StyledSimpleInput
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.o2Saturation}
                      status={formikProps.errors.o2Saturation ? 'error' : ''}
                      className="vitals_input"
                      placeholder="O2 Saturation"
                      name="o2Saturation"
                      type="text"
                    />
                    <span className="form-items-sidelabel">%</span>
                  </StyledFormItem>
                </Row>
              </ShadowedCard>

              <ShadowedCard>
                <Row className="form_items">
                  <StyledFormItem
                    label="Temp."
                    name="temperature"
                    initialValue={formikProps.values.temperature}
                    help={formikProps.errors.temperature}
                    validateStatus={
                      formikProps.errors.temperature ? 'error' : ''
                    }
                  >
                    <StyledSimpleInput
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.temperature}
                      status={formikProps.errors.temperature ? 'error' : ''}
                      className="vitals_input"
                      placeholder="Temperature"
                      name="temperature"
                      type="text"
                    />
                    <span className="form-items-sidelabel">°F</span>
                  </StyledFormItem>
                </Row>
              </ShadowedCard>

              <ShadowedCard>
                <Row className="form_items">
                  <StyledFormItem
                    label="Resp. Rate"
                    name="respirationRate"
                    initialValue={formikProps.values.respirationRate}
                    help={formikProps.errors.respirationRate}
                    validateStatus={
                      formikProps.errors.respirationRate ? 'error' : ''
                    }
                  >
                    <StyledSimpleInput
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.respirationRate}
                      status={formikProps.errors.respirationRate ? 'error' : ''}
                      className="vitals_input"
                      placeholder="Respiratory Rate"
                      name="respirationRate"
                      type="text"
                    />
                    <span className="form-items-sidelabel-bold">
                      Breathe per min
                    </span>
                  </StyledFormItem>
                </Row>
              </ShadowedCard>

              <Row className="vitals-buttons">
                <Button className="vitals-buttons-cancel">Cancel</Button>
                <Button
                  className="vitals-buttons-submit"
                  htmlType="submit"
                  loading={loader}
                >
                  Add
                </Button>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </AddVitalsWrapper>
  );
};
