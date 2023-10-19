import { Row } from 'antd';
import { Form, Formik } from 'formik';
import React from 'react';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import dayjs from 'dayjs';
import { dateFormat } from '../../../utility';
import moment from 'moment';
import { Surgical } from '../types';

interface AddSurgicalProps {
  className?: string;
  savedSurgical: Surgical | null;
  addSurgical: boolean;
}

export const AddSurgical: React.FC<AddSurgicalProps> = ({
  className,
  savedSurgical,
  addSurgical,
}) => {
  const initialValues: Surgical = savedSurgical ?? {
    name: '',
    date: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => {
        // handleERx(values);
      }}
    >
      {(formikProps) => (
        <Form
          //   onFinish={formikProps?.handleSubmit}
          style={{ display: 'flex', gap: '2%', alignItems: 'center' }}
        >
          <>
            <StyledFormItem
              className="add-medicine-labels"
              name="name"
            //   disabled={!addSurgical}
              validateStatus={formikProps.errors.name ? 'error' : ''}
              help={formikProps.errors.name}
              initialValue={formikProps.values.name}
              style={{ width: '65%' }}
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
              style={{ width: '34%' }}
            >
              <StyledSimpleDatePicker
                className="add-medicine-input-box"
                // disabled={!addSurgical}
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
          </>
        </Form>
      )}
    </Formik>
  );
};
