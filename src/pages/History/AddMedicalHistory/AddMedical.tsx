import { Row } from 'antd';
import { Form, Formik } from 'formik';
import React from 'react';
import dayjs from 'dayjs';
import moment from 'moment';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { dateFormat } from '../../../utility';
import { Medical } from '../types';

interface AddMedicalProps {
  className?: string;
  savedMedical: Medical | null;
  addMedical: boolean;
}

export const AddMedical: React.FC<AddMedicalProps> = ({
  className,
  savedMedical,
  addMedical,
}) => {
  const initialValues: Medical = savedMedical ?? {
    name: '',
    date: '',
    activeFlag: true,
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => {}}
    >
      {(formikProps) => (
        <Form style={{ display: 'flex', gap: '2%', alignItems: 'center' }}>
          <>
            <StyledFormItem
              className="add-medicine-labels"
              name="name"
              //   disabled={!addMedical}
              validateStatus={formikProps.errors.name ? 'error' : ''}
              help={formikProps.errors.name}
              initialValue={formikProps.values.name}
              style={{ width: '49%' }}
            >
              <StyledSimpleSelect
                options={[
                  {
                    value: 'Search By Name/ICD 10',
                    label: 'Search By Name/ICD 10',
                  },
                ]}
                className="add-medicine-input-box"
                value={formikProps.values.name}
                status={formikProps.errors.name ? 'error' : ''}
                onChange={(value) => formikProps.setFieldValue('name', value)}
              />
            </StyledFormItem>
            <StyledFormItem
              className="add-medicine-labels"
              name="date"
              style={{ width: '29%' }}
            >
              <StyledSimpleDatePicker
                className="add-medicine-input-box"
                // disabled={!addMedical}
                defaultValue={
                  formikProps.values.date
                    ? dayjs(formikProps.values.date, dateFormat)
                    : undefined
                }
                style={{ width: '100%' }}
                name="date"
                onChange={(_value, dateString) =>
                  formikProps.setFieldValue(
                    'date',
                    moment(dateString).format('yyyy-MM-DD')
                  )
                }
                placeholder="Since"
                format="MM/DD/YYYY"
              />
            </StyledFormItem>
            <StyledFormItem
              className="add-medicine-labels"
              name="activeFlag"
              validateStatus={formikProps.errors.activeFlag ? 'error' : ''}
              help={formikProps.errors.activeFlag}
              initialValue={formikProps.values.activeFlag}
              style={{ width: '19%' }}
            >
              <StyledCheckBox
                className="add-medicine-input-box"
                // disabled={!addMedical}
                value={formikProps.values.activeFlag}
                // status={formikProps.errors.activeFlag ? 'error' : ''}
                onChange={(value) =>
                  formikProps.setFieldValue('activeFlag', value)
                }
              />
              <span style={{ fontSize: '1.2em', marginLeft: '10px' }}>
                Active
              </span>
            </StyledFormItem>
          </>
        </Form>
      )}
    </Formik>
  );
};
