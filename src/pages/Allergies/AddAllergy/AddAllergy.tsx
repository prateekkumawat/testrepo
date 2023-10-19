import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, notification, Row } from 'antd';
import { ImSearch } from 'react-icons/im';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { AddAllergyWrapper } from './AddAllergy.styled';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { Allergy } from '../AllergyType';
import { PatientService } from '../../../Service/Patient';
import { reactionType, severityType } from '../types';

interface AddAllergyValues {
  searchAllergy: string;
  isDrugAllergy: boolean;
  reaction: string;
  severity: string;
  onset: Date | null;
}

interface AddAllergyProps {
  className?: string;
}
export const AddAllergy: React.FC<AddAllergyProps> = ({ className }) => {
  const { patientId } = useParams();
  const [loader, setLoader] = useState<boolean>(false);

  const patientService = PatientService();
  const handleSubmit = async (values: AddAllergyValues, actions: any) => {
    try {
      console.log('values', values);
      setLoader(true);
      await patientService.addAllergies({ ...values, patientId });
      actions.resetForm();
      notification.success({
        message: 'Successfully added allergy',
      });
    } catch (error: any) {
      notification.error({
        message: error?.response || 'Error occured while adding allergy',
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <AddAllergyWrapper className={className}>
      <Formik
        initialValues={{
          searchAllergy: '',
          // allergyId: '',
          // allergyName: '',
          isDrugAllergy: false,
          reaction: '',
          severity: '',
          onset: null,
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="form">
            <Row className="items">Add Allergy</Row>
            <StyledFormItem
              label="Search Allergy"
              name="searchAllergy"
              className="form-items"
              initialValue={formikProps.values.searchAllergy}
              help={formikProps.errors.searchAllergy}
              validateStatus={formikProps.errors.searchAllergy ? 'error' : ''}
            >
              <StyledSimpleInput
                prefix={<ImSearch />}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.searchAllergy}
                status={formikProps.errors.searchAllergy ? 'error' : ''}
                placeholder="Type here"
                name="searchAllergy"
                className="form-inputs"
              />
            </StyledFormItem>
            <StyledFormItem
              name="isDrugAllergy"
              className="form-items"
              initialValue={formikProps.values.isDrugAllergy}
              help={formikProps.errors.isDrugAllergy}
              validateStatus={formikProps.errors.isDrugAllergy ? 'error' : ''}
            >
              <StyledCheckBox className="form-checkbox" />
              This is a Drug Allergy
            </StyledFormItem>

            <StyledFormItem
              label="Reaction"
              name="reaction"
              className="form-items"
              initialValue={formikProps.values.reaction}
              help={formikProps.errors.reaction}
              validateStatus={formikProps.errors.reaction ? 'error' : ''}
            >
              <StyledSimpleSelect
                options={reactionType}
                onChange={(value) =>
                  formikProps.setFieldValue('reaction', value)
                }
                placeholder="Select a Reaction type"
                className="form-inputs"
              />
            </StyledFormItem>

            <StyledFormItem
              label="Severity"
              name="severity"
              className="form-items"
              initialValue={formikProps.values.severity}
              help={formikProps.errors.severity}
              validateStatus={formikProps.errors.severity ? 'error' : ''}
            >
              <StyledSimpleSelect
                options={severityType}
                onChange={(value) =>
                  formikProps.setFieldValue('severity', value)
                }
                placeholder="Select a Severity type"
                className="form-inputs"
              />
            </StyledFormItem>

            <StyledFormItem label="Onset" name="onset" className="form-items">
              <StyledSimpleDatePicker
                onChange={(_value, dateString) =>
                  formikProps.setFieldValue(
                    'onset',
                    moment(dateString).format('yyyy-MM-DD')
                  )
                }
                placeholder="Select a onset date"
                name="onset"
                className="form-inputs"
                style={{ width: '100%' }}
              />
            </StyledFormItem>

            <div className="allergies-bttns">
              <Button className="allergies-bttns-cancel">Cancel</Button>
              <Button
                className="allergies-bttns-submit"
                htmlType="submit"
                loading={loader}
              >
                Add
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AddAllergyWrapper>
  );
};
