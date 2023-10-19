import React from 'react';
import { Form, Formik } from 'formik';
import {
  StyledFormItem,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { Social } from '../types';
import { AddSocialWrapper } from './AddSocial.styled';
import { Button } from 'antd';

interface AddSocialProps {
  className?: string;
  savedSocial: Social | null;
  addSocial: boolean;
}

export const AddSocial: React.FC<AddSocialProps> = ({
  className,
  savedSocial,
  addSocial,
}) => {
  const initialValues: Social = savedSocial || {
    smokingHistory: '',
    smquantity: '',
    smtime: '',
    tobacco: '',
    tValue: '',
    alcohol: '',
    alStatus: '',
    exercise: '',
    exerciseValues: '',
    marijuana: '',
  };
  return (
    <AddSocialWrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values) => {}}
      >
        {(formikProps) => (
          <Form>
            <div className="form-rows">
              <StyledFormItem
                className="add-medicine-labels"
                //   disabled={!addMedical}
                validateStatus={
                  formikProps.errors.smokingHistory ? 'error' : ''
                }
                help={formikProps.errors.smokingHistory}
                initialValue={formikProps.values.smokingHistory}
                style={{ width: '49%' }}
                name="smokingHistory"
              >
                <StyledSimpleSelect
                  options={[
                    { value: 'Smoking History', label: 'Smoking History' },
                  ]}
                  value={formikProps.values.smokingHistory}
                  onChange={(value) =>
                    formikProps.setFieldValue('smokingHistory', value)
                  }
                />
              </StyledFormItem>

              <StyledFormItem
                label="Pack(S)"
                name="smquantity"
                className="add-medicine-labels"
                //   disabled={!addMedical}
                validateStatus={formikProps.errors.smquantity ? 'error' : ''}
                help={formikProps.errors.smquantity}
                initialValue={formikProps.values.smquantity}
                style={{ width: '25%' }}
              >
                <StyledSimpleSelect
                  options={[{ value: 'Packs', label: 'Pack(S)' }]}
                  value={formikProps.values.smquantity}
                  onChange={(value) =>
                    formikProps.setFieldValue('smquantity', value)
                  }
                />
              </StyledFormItem>

              <StyledFormItem
                label="Per"
                name="smtime"
                className="add-medicine-labels"
                //   disabled={!addMedical}
                validateStatus={formikProps.errors.smtime ? 'error' : ''}
                help={formikProps.errors.smtime}
                initialValue={formikProps.values.smtime}
                style={{ width: '20%' }}
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Day',
                      label: 'Day',
                    },
                  ]}
                  value={formikProps.values.smtime}
                  onChange={(value) =>
                    formikProps.setFieldValue('smtime', value)
                  }
                />
              </StyledFormItem>
            </div>
            <div className="form-rows">
              <StyledFormItem
                className="add-medicine-labels"
                validateStatus={formikProps.errors.tobacco ? 'error' : ''}
                help={formikProps.errors.tobacco}
                initialValue={formikProps.values.tobacco}
                style={{ width: '49%' }}
                name="tobacco"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Tobacco',
                      label: 'Tobacco',
                    },
                  ]}
                  value={formikProps.values.tobacco}
                  onChange={(value) =>
                    formikProps.setFieldValue('tobacco', value)
                  }
                />
              </StyledFormItem>

              <StyledFormItem
                label="Values"
                className="add-medicine-labels"
                validateStatus={formikProps.errors.tValue ? 'error' : ''}
                help={formikProps.errors.tValue}
                initialValue={formikProps.values.tValue}
                style={{ width: '25%' }}
                name="tValue"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Yes',
                      label: 'Yes',
                    },
                  ]}
                  value={formikProps.values.tValue}
                  onChange={(value) =>
                    formikProps.setFieldValue('tValue', value)
                  }
                />
              </StyledFormItem>
            </div>
            <div className="form-rows">
              <StyledFormItem
                className="add-medicine-labels"
                validateStatus={formikProps.errors.alcohol ? 'error' : ''}
                help={formikProps.errors.alcohol}
                initialValue={formikProps.values.alcohol}
                style={{ width: '49%' }}
                name="alcohol"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Alcohol',
                      label: 'Alcohol',
                    },
                  ]}
                  value={formikProps.values.alcohol}
                  onChange={(value) =>
                    formikProps.setFieldValue('alcohol', value)
                  }
                />
              </StyledFormItem>
              <StyledFormItem
                label="Values"
                className="add-medicine-labels"
                validateStatus={formikProps.errors.alStatus ? 'error' : ''}
                help={formikProps.errors.alStatus}
                initialValue={formikProps.values.alStatus}
                style={{ width: '25%' }}
                name="alStatus"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Quit',
                      label: 'Quit',
                    },
                  ]}
                  value={formikProps.values.alStatus}
                  onChange={(value) =>
                    formikProps.setFieldValue('alStatus', value)
                  }
                />
              </StyledFormItem>
            </div>
            <div className="form-rows">
              <StyledFormItem
                className="add-medicine-labels"
                validateStatus={formikProps.errors.exercise ? 'error' : ''}
                help={formikProps.errors.exercise}
                initialValue={formikProps.values.exercise}
                style={{ width: '49%' }}
                name="exercise"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Exercise',
                      label: 'Exercise',
                    },
                  ]}
                  value={formikProps.values.exercise}
                  onChange={(value) =>
                    formikProps.setFieldValue('exercise', value)
                  }
                />
              </StyledFormItem>
              <StyledFormItem
                label="Values"
                className="add-medicine-labels"
                validateStatus={
                  formikProps.errors.exerciseValues ? 'error' : ''
                }
                help={formikProps.errors.exerciseValues}
                initialValue={formikProps.values.exerciseValues}
                style={{ width: '49%' }}
                name="exerciseValues"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Yes',
                      label: 'Yes',
                    },
                  ]}
                  value={formikProps.values.exerciseValues}
                  onChange={(value) =>
                    formikProps.setFieldValue('exerciseValues', value)
                  }
                  style={{ width: '40%' }}
                />
                <span style={{ width: '18%' }}>3 Times Per Week</span>
              </StyledFormItem>
            </div>
            <div className="form-rows">
              <StyledFormItem
                className="add-medicine-labels"
                validateStatus={formikProps.errors.marijuana ? 'error' : ''}
                help={formikProps.errors.marijuana}
                initialValue={formikProps.values.marijuana}
                style={{ width: '49%' }}
                name="marijuana"
              >
                <StyledSimpleSelect
                  options={[
                    {
                      value: 'Marijuana',
                      label: 'Marijuana',
                    },
                  ]}
                  value={formikProps.values.marijuana}
                  onChange={(value) =>
                    formikProps.setFieldValue('marijuana', value)
                  }
                />
              </StyledFormItem>
              <Button className='bttn'>Save</Button>
            </div>
          </Form>
        )}
      </Formik>
    </AddSocialWrapper>
  );
};
