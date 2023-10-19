import { Form, notification } from 'antd';
import React, { FC } from 'react';
import { FormikProps } from 'formik';
import { AddTemplateWrapper } from './AddTemplate.styled';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { VisibilityEnums } from '../types';

export const AddTemplate: FC<{
  formikProps: FormikProps<{
    name: string;
    status: string;
    visibility: string;
  }>;
}> = ({ formikProps }) => {
  return (
    <AddTemplateWrapper className="h-100">
      <div className="card h-100 card bg-gray-200 border shadow-none">
        <div className="card-header">
          {' '}
          <p className="title">Add New Template</p>
        </div>
        <div className="card-body">
          <Form layout="vertical" onFinish={formikProps?.handleSubmit}>
            <StyledFormItem
              label="Template Name"
              className="add-injection-labels"
              name="name"
              validateStatus={formikProps.errors.name ? 'error' : ''}
              help={formikProps.errors.name}
              initialValue={formikProps.values.name}
            >
              <StyledSimpleInput
                className="add-injection-input-box"
                value={formikProps.values.name}
                status={formikProps.errors.name ? 'error' : ''}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
              />
            </StyledFormItem>
            <StyledFormItem
              label="Status"
              className="add-injection-labels"
              name="status"
              validateStatus={formikProps.errors.status ? 'error' : ''}
              help={formikProps.errors.status}
              initialValue={formikProps.values.status}
            >
              <StyledSimpleSelect
                showSearch
                options={[
                  {
                    value: 'Pending',
                    label: 'Pending',
                  },
                  {
                    value: 'Available',
                    label: 'Available',
                  },
                  {
                    value: 'Not Available',
                    label: 'Not Available',
                  },
                ]}
                className="add-injection-input-box"
                //   disabled={activeStep !== 'add'}
                value={formikProps.values.status}
                status={formikProps.errors.status ? 'error' : ''}
                onChange={(value) => formikProps.setFieldValue('status', value)}
                onBlur={formikProps.handleBlur}
              />
            </StyledFormItem>
            <StyledFormItem
              label="Visibility"
              className="add-injection-labels"
              name="visibility"
              validateStatus={formikProps.errors.visibility ? 'error' : ''}
              help={formikProps.errors.visibility}
              initialValue={formikProps.values.visibility}
            >
              <StyledSimpleSelect
                showSearch
                options={VisibilityEnums?.map((e) => ({
                  label: e,
                  value: e,
                }))}
                className="add-injection-input-box"
                value={formikProps.values.visibility}
                status={formikProps.errors.visibility ? 'error' : ''}
                onChange={(value) =>
                  formikProps.setFieldValue('visibility', value)
                }
                onBlur={formikProps.handleBlur}
              />
            </StyledFormItem>
          </Form>
        </div>
      </div>
    </AddTemplateWrapper>
  );
};
