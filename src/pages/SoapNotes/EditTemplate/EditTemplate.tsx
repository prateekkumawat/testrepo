import { Button, Form, notification } from 'antd';
import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { SOAPUITemplate, VisibilityEnums } from '../types';
import { EditTemplateWrapper } from './EditTemplate.styled';
import { RoutesPath } from '../../../Routes/Routes';
import { SOAPService } from '../../../Service/SOAP';

export const EditTemplate: FC<{
  template: SOAPUITemplate;
}> = ({ template }) => {
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const soapService = SOAPService();

  const handleSubmit = async (values: SOAPUITemplate) => {
    try {
      if (!template?.templateId) return;
      setLoader(true);
      await soapService.editTemplate(
        template.templateId,
        {
          ...values,
          templateId: undefined,
        },
        { category: 'Subjective', subCategory: 'Chief Complaint' }
      );
      setLoader(false);
      notification.success({
        message: 'Saved Successfully',
      });
      setLoader(false);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err.response || 'Error occured while saving Template details',
      });
    }
  };

  return (
    <EditTemplateWrapper>
      <div className="card bg-gray-200 border shadow-none">
        <div className="card-body">
          <Formik
            initialValues={template}
            enableReinitialize
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(formikProps) => {
              console.log('formikProps', formikProps.values);
              return (
                <>
                  <Form layout="vertical" onFinish={formikProps?.handleSubmit}>
                    <StyledFormItem
                      label="Template Name"
                      name="templatename"
                      validateStatus={formikProps.errors.name ? 'error' : ''}
                      help={formikProps.errors.name}
                      initialValue={formikProps.values.name}
                    >
                      <StyledSimpleInput
                        name="templatename"
                        placeholder="Template Name"
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
                        onChange={(value) =>
                          formikProps.setFieldValue('status', value)
                        }
                        onBlur={formikProps.handleBlur}
                      />
                    </StyledFormItem>

                    <StyledFormItem
                      label="Visibility"
                      className="add-injection-labels"
                      name="visibility"
                      validateStatus={
                        formikProps.errors.visibility ? 'error' : ''
                      }
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
                        //   disabled={activeStep !== 'add'}
                        value={formikProps.values.visibility}
                        status={formikProps.errors.visibility ? 'error' : ''}
                        onChange={(value) =>
                          formikProps.setFieldValue('visibility', value)
                        }
                        onBlur={formikProps.handleBlur}
                      />
                    </StyledFormItem>

                    <div className="btn-container center">
                      <Button
                        className="btn-secondary"
                        onClick={() => {
                          if (template?.templateId)
                            navigate(
                              RoutesPath.EDIT_SOAP_NOTES?.replace(
                                ':templateId',
                                template?.templateId
                              )
                            );
                        }}
                      >
                        Go To Edit
                        <IoIosArrowRoundForward className="icon" />
                      </Button>
                      <Button
                        className="btn-primary"
                        loading={loader}
                        htmlType="submit"
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </EditTemplateWrapper>
  );
};
