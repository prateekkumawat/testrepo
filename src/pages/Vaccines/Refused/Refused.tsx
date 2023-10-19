import React, { Dispatch, FC, SetStateAction } from 'react';
import { FormikProps } from 'formik';
import dayjs from 'dayjs';
import moment from 'moment';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
  StyledTextArea,
} from '../../../Component/Form/Form';
import { RefusedWrapper } from './Refused.styled';
import { Vaccines, VaccinesFormType } from '../types';

interface RefusedProps {
  className?: string;
  formikProps: FormikProps<VaccinesFormType>;
}

export const Refused: FC<RefusedProps> = ({ className, formikProps }) => {
  return (
    <RefusedWrapper className={className}>
      <div className="refused-row">
        <StyledFormItem
          label="Refusal reason*"
          className="add-vaccine-labels"
          name="refusalReason"
          validateStatus={formikProps.errors.refusalReason ? 'error' : ''}
          help={formikProps.errors.refusalReason}
          initialValue={formikProps.values.refusalReason}
          style={{ width: '140%' }}
        >
          <StyledSimpleSelect
            options={[
              'Immunity',
              'Medical Precuation',
              'Other',
              'Out of stock',
              'Parental descision',
              'Patient descision',
              // TODO
            ].map((e) => ({
              value: e,
              label: e,
            }))}
            className="add-vaccine-input-box"
            //   disabled={activeStep !== 'add'}
            value={formikProps.values.refusalReason}
            status={formikProps.errors.refusalReason ? 'error' : ''}
            onChange={(value) =>
              formikProps.setFieldValue('refusalReason', value)
            }
          />
        </StyledFormItem>
        <StyledFormItem
          label="VIS Provided"
          validateStatus={formikProps.errors.visProvided ? 'error' : ''}
          help={formikProps.errors.visProvided}
          initialValue={formikProps.values.visProvided}
          className="add-vaccine-labels"
          style={{ width: '20%' }}
        >
          <StyledCheckBox
            onChange={(e) =>
              formikProps.setFieldValue('visProvided', e.target.checked)
            }
            checked={formikProps.values.visProvided}
            className="add-vaccine-labels"
            name="visProvided"
            style={{ width: '10px' }}
          />
        </StyledFormItem>
      </div>
      <StyledFormItem
        label="facility"
        className="add-vaccine-labels"
        name="facility"
        validateStatus={formikProps.errors.facility ? 'error' : ''}
        help={formikProps.errors.facility}
        initialValue={formikProps.values.facility}
        style={{ width: '80%' }}
      >
        <StyledSimpleInput
          value={formikProps.values.totalVaccines}
          status={formikProps.errors.totalVaccines ? 'error' : ''}
          name="totalVaccines"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
        />
        {/* <StyledSimpleSelect
          options={[{ value: 'Select One', label: 'Select One' }]}
          className="add-vaccine-input-box"
          //   disabled={activeStep !== 'add'}
          value={formikProps.values.facility}
          status={formikProps.errors.facility ? 'error' : ''}
          onChange={(value) => formikProps.setFieldValue('facility', value)}
        /> */}
      </StyledFormItem>
      <StyledFormItem
        label="Note"
        className="add-vaccine-textbox"
        name="refusalNote"
        validateStatus={formikProps.errors.refusalNote ? 'error' : ''}
        help={formikProps.errors.refusalNote}
        initialValue={formikProps.values.refusalNote}
        style={{ width: '140%' }}
      >
        <StyledTextArea
          rows={10}
          status={formikProps.errors.refusalNote ? 'error' : ''}
          name="refusalNote"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder="Type a Reason for visit"
        />
      </StyledFormItem>
    </RefusedWrapper>
  );
};
