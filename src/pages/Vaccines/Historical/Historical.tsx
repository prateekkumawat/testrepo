import React, { Dispatch, FC, SetStateAction } from 'react';
import { FormikProps } from 'formik';
import dayjs from 'dayjs';
import moment from 'moment';
import {
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { Vaccines, VaccinesFormType } from '../types';
import { dateFormat } from '../../../utility';
import { HistoricalWrapper } from './Historical.styled';

interface HistoricalProps {
  className?: string;
  formikProps: FormikProps<VaccinesFormType>;
}

export const Historical: FC<HistoricalProps> = ({ className, formikProps }) => {
  return (
    <HistoricalWrapper className={className}>
      <StyledFormItem
        label="Administred By*"
        className="add-vaccine-labels"
        name="administeredBy"
        validateStatus={formikProps.errors.administeredBy ? 'error' : ''}
        help={formikProps.errors.administeredBy}
        initialValue={formikProps.values.administeredBy}
      >
        <StyledSimpleInput
          value={formikProps.values.administeredBy}
          status={formikProps.errors.administeredBy ? 'error' : ''}
          name="administeredBy"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
        />
        {/* <StyledSimpleSelect
          options={[{ value: 'Select One', label: 'Select One' }]}
          className="add-vaccine-input-box"
          //   disabled={activeStep !== 'add'}
          value={formikProps.values.administeredBy}
          status={formikProps.errors.administeredBy ? 'error' : ''}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
        /> */}
      </StyledFormItem>
      <StyledFormItem
        label="Administreted on*"
        className="add-vaccine-labels"
        name="administeredDate"
      >
        <StyledSimpleDatePicker
          className="add-vaccine-input-box"
          //   disabled={activeStep !== 'add'}
          defaultValue={
            formikProps.values.administeredDate
              ? dayjs(formikProps.values.administeredDate, dateFormat)
              : undefined
          }
          name="administeredDate"
          onChange={(_value, dateString) =>
            formikProps.setFieldValue(
              'administeredDate',
              moment(dateString).format('yyyy-MM-DD')
            )
          }
          placeholder="Type a earliest Date"
          format="MM/DD/YYYY"
        />
      </StyledFormItem>
      <StyledFormItem
        label="facility"
        className="add-vaccine-labels"
        name="facility"
        validateStatus={formikProps.errors.facility ? 'error' : ''}
        help={formikProps.errors.facility}
        initialValue={formikProps.values.facility}
      >
        <StyledSimpleInput
          value={formikProps.values.facility}
          status={formikProps.errors.facility ? 'error' : ''}
          name="facility"
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
        label="Source*"
        className="add-vaccine-labels"
        name="source"
        validateStatus={formikProps.errors.source ? 'error' : ''}
        help={formikProps.errors.source}
        initialValue={formikProps.values.source}
      >
        <StyledSimpleSelect
          options={[
            'Administered by Another Provider',
            'Birth Certificate',
            'Immunization/public Registry',
            'Patient / Parent’s recall',
            'School Record',
            'Source unspecified',
          ].map((e) => ({
            value: e,
            label: e,
          }))}
          className="add-vaccine-input-box"
          value={formikProps.values.source}
          status={formikProps.errors.source ? 'error' : ''}
          onChange={(value) => formikProps.setFieldValue('source', value)}
        />
      </StyledFormItem>
    </HistoricalWrapper>
  );
};
