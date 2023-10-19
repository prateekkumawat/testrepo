import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { FormikProps } from 'formik';
import dayjs from 'dayjs';
import moment from 'moment';
import { Vaccines, VaccinesFormType } from '../types';
import { AdministeredWrapper } from './Adminstered.styled';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { dateFormat } from '../../../utility';

interface AdministeredProps {
  className?: string;
  formikProps: FormikProps<VaccinesFormType>;
}

export const Administered: FC<AdministeredProps> = ({
  className,
  formikProps,
}) => {
  return (
    <AdministeredWrapper className={className}>
      <div className="add-vaccine-column-1">
        <div className="add-vaccine-rows">
          <StyledFormItem
            label="Ordered By*"
            className="add-vaccine-labels"
            name="orderedBy"
            validateStatus={formikProps.errors.orderedBy ? 'error' : ''}
            help={formikProps.errors.orderedBy}
            initialValue={formikProps.values.orderedBy}
            style={{ width: '49%' }}
          >
            <StyledSimpleInput
              value={formikProps.values.orderedBy}
              status={formikProps.errors.orderedBy ? 'error' : ''}
              name="orderedBy"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            {/* <StyledSimpleSelect
              options={[{ value: 'Select One', label: 'Select One' }]}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.orderedBy}
              status={formikProps.errors.orderedBy ? 'error' : ''}
              onChange={(value) =>
                formikProps.setFieldValue('orderedBy', value)
              }
            /> */}
          </StyledFormItem>
          <StyledFormItem
            label="Administred By*"
            className="add-vaccine-labels"
            name="administeredBy"
            validateStatus={formikProps.errors.administeredBy ? 'error' : ''}
            help={formikProps.errors.administeredBy}
            initialValue={formikProps.values.administeredBy}
            style={{ width: '49%' }}
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
        </div>
        <div className="add-vaccine-rows">
          <div className="add-vaccine-rows-1">
            <StyledFormItem
              label="Administreted on*"
              className="add-vaccine-labels"
              name="administeredDate"
              style={{ width: '80%' }}
            >
              <StyledSimpleDatePicker
                className="add-vaccine-input-box"
                // disabled={activeStep !== 'add'}
                defaultValue={
                  formikProps.values.administeredDate
                    ? dayjs(formikProps.values.administeredDate, dateFormat)
                    : undefined
                }
                style={{ width: '100%' }}
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
            <div className="saperator" />
            <StyledFormItem
              className="add-vaccine-labels"
              name="isTodayFlag"
              validateStatus={formikProps.errors.isTodayFlag ? 'error' : ''}
              help={formikProps.errors.isTodayFlag}
              initialValue={formikProps.values.isTodayFlag}
              style={{ width: '30%', paddingLeft: '20px' }}
            >
              <StyledCheckBox
                className="circular-checkbox"
                // disabled={activeStep !== 'add'}
                value={formikProps.values.isTodayFlag}
                //   status={formikProps.errors.vaccineName ? 'error' : ''}
                onChange={(e: any) =>
                  formikProps.setFieldValue('isTodayFlag', e?.target?.checked)
                }
                //   onBlur={formikProps.handleBlur}
              />
              <span className="checkbox-label">Today</span>
            </StyledFormItem>
          </div>
          <div className="add-vaccine-rows-2">
            <StyledFormItem
              label="Time"
              className="add-vaccine-labels-time"
              name="time"
              validateStatus={formikProps.errors.time ? 'error' : ''}
              help={formikProps.errors.time}
              initialValue={formikProps.values.time}
              style={{ width: '85%' }}
            >
              <StyledSimpleSelect
                showSearch
                onChange={(value) => formikProps.setFieldValue('timeHr', value)}
                options={Array.from({ length: 24 }, (_, index) => ({
                  value: index.toString(),
                  label: index.toString(),
                }))}
                value={formikProps.values.timeHr}
                placeholder={<span className="placeholders">hh</span>}
                style={{ width: '30%' }}
              />
              <StyledSimpleSelect
                onChange={(value) =>
                  formikProps.setFieldValue('timeMin', value)
                }
                options={Array.from({ length: 60 }, (_, index) => ({
                  value: index.toString(),
                  label: index.toString(),
                }))}
                value={formikProps.values.timeMin}
                placeholder={<span className="placeholders">mm</span>}
                style={{ width: '30%', margin: ' 0 5px' }}
              />
              <StyledSimpleSelect
                showSearch
                onChange={(value) =>
                  formikProps.setFieldValue('timeSec', value)
                }
                options={Array.from({ length: 60 }, (_, index) => ({
                  value: index.toString(),
                  label: index.toString(),
                }))}
                value={formikProps.values.timeSec}
                placeholder={<span className="placeholders">ss</span>}
                style={{ width: '30%' }}
              />
            </StyledFormItem>
            <div className="saperator" />
            <StyledFormItem
              className="add-vaccine-labels"
              name="isNowFlag"
              validateStatus={formikProps.errors.isNowFlag ? 'error' : ''}
              help={formikProps.errors.isNowFlag}
              initialValue={formikProps.values.isNowFlag}
              style={{ width: '20%', paddingLeft: '10px' }}
            >
              <StyledCheckBox
                className="circular-checkbox"
                // disabled={activeStep !== 'add'}
                value={formikProps.values.isNowFlag}
                //   status={formikProps.errors.vaccineName ? 'error' : ''}
                onChange={(e: any) =>
                  formikProps.setFieldValue('isNowFlag', e?.target?.checked)
                }
                //   onBlur={formikProps.handleBlur}
              />
              <span className="checkbox-label">Now</span>
            </StyledFormItem>
          </div>
        </div>
        <div className="add-vaccine-rows">
          <StyledFormItem
            label="facility"
            className="add-vaccine-labels"
            name="facility"
            validateStatus={formikProps.errors.facility ? 'error' : ''}
            help={formikProps.errors.facility}
            initialValue={formikProps.values.facility}
            style={{ width: '50%' }}
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
        </div>
      </div>{' '}
      <div className="add-vaccine-column-2">
        <div className="add-vaccine-rows">
          <StyledFormItem
            label="Route*"
            className="add-vaccine-labels"
            name="route"
            validateStatus={formikProps.errors.route ? 'error' : ''}
            help={formikProps.errors.route}
            initialValue={formikProps.values.route}
            style={{ width: '100%' }}
          >
            <StyledSimpleSelect
              options={[
                'Intramuscular',
                'Intradermal',
                'Nasal',
                'Intravenous',
                'Oral',
                'Percutaneous',
                'Subcutaneous',
                'Transdermal',
              ].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.route}
              status={formikProps.errors.route ? 'error' : ''}
              onChange={(value) => formikProps.setFieldValue('route', value)}
            />
          </StyledFormItem>
        </div>
        <div className="add-vaccine-rows">
          <StyledFormItem
            label="Site*"
            className="add-vaccine-labels"
            name="site"
            validateStatus={formikProps.errors.site ? 'error' : ''}
            help={formikProps.errors.site}
            initialValue={formikProps.values.site}
            style={{ width: '100%' }}
          >
            <StyledSimpleSelect
              options={[
                'LEFT ARM',
                'LEFT DELTOID',
                'LEFT GLUTEOUS MEDIUS',
                'LEFT LOWER FOREARM',
                'LEFT THIGH',
                'LEFT VASTUS LATERAILS',
                'RIGHT ARM',
                'RIGHT DELTOID',
                'RIGHT GLUTEOUS MEDIUS',
                'RIGHT LOWER FOREARM',
                'RIGHT THIGH',
                'RIGHT VASTUS LATERAILS',
                'BILATERAL NARES',
                'LEFT NARES',
                'RIGHT NARES',
                'MOUTH',
              ].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.site}
              status={formikProps.errors.site ? 'error' : ''}
              onChange={(value) => formikProps.setFieldValue('site', value)}
            />
          </StyledFormItem>
        </div>
        <div className="add-vaccine-rows">
          <StyledFormItem
            label="Dose*"
            className="add-vaccine-labels"
            name="dose"
            validateStatus={formikProps.errors.dose ? 'error' : ''}
            help={formikProps.errors.dose}
            initialValue={formikProps.values.dose}
            style={{ width: '50%' }}
          >
            <StyledSimpleInput
              type="number"
              value={formikProps.values.dose}
              status={formikProps.errors.dose ? 'error' : ''}
              name="dose"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            {/* <StyledSimpleSelect
              options={[{ value: 'Select One', label: 'Select One' }]}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.dose}
              status={formikProps.errors.dose ? 'error' : ''}
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            /> */}
          </StyledFormItem>
          <StyledFormItem
            label="Unit(s)*"
            className="add-vaccine-labels"
            name="units"
            validateStatus={formikProps.errors.units ? 'error' : ''}
            help={formikProps.errors.units}
            initialValue={formikProps.values.units}
            style={{ width: '50%' }}
          >
            <StyledSimpleSelect
              options={['dL', 'g', 'Kg', 'KL', 'L', 'mg', 'mL', 'ug', 'uL'].map(
                (e) => ({
                  value: e,
                  label: e,
                })
              )}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.units}
              status={formikProps.errors.units ? 'error' : ''}
              onChange={(value) => formikProps.setFieldValue('units', value)}
            />
          </StyledFormItem>
        </div>
        <div className="add-vaccine-rows">
          <StyledFormItem
            label="#"
            validateStatus={formikProps.errors.vaccineNumber ? 'error' : ''}
            help={formikProps.errors.vaccineNumber}
            initialValue={formikProps.values.vaccineNumber}
            className="add-vaccine-labels"
          >
            <StyledSimpleInput
              type="number"
              value={formikProps.values.vaccineNumber}
              status={formikProps.errors.vaccineNumber ? 'error' : ''}
              name="vaccineNumber"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
          </StyledFormItem>
          <StyledFormItem
            label="in series of"
            validateStatus={formikProps.errors.totalVaccines ? 'error' : ''}
            help={formikProps.errors.totalVaccines}
            initialValue={formikProps.values.totalVaccines}
            className="add-vaccine-labels"
          >
            <StyledSimpleInput
              type="number"
              value={formikProps.values.totalVaccines}
              status={formikProps.errors.totalVaccines ? 'error' : ''}
              name="totalVaccines"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
          </StyledFormItem>
        </div>
        <div className="add-vaccine-rows-2">
          <div className="or">
            <div className="or-side" />
            <div>OR</div>
            <div className="or-side" />
          </div>
        </div>
        <div className="add-vaccine-rows-3">
          <StyledFormItem
            className="patial-administered-flag"
            validateStatus={formikProps.errors.successFlag ? 'error' : ''}
            help={formikProps.errors.successFlag}
            initialValue={formikProps.values.successFlag}
          >
            <StyledCheckBox
              className="add-vaccine-labels"
              name="successFlag"
              style={{ width: 'auto' }}
            />
            <span className="text">
              Partially (Unsuccessfully) Administered
            </span>
          </StyledFormItem>
        </div>
        <div className="add-vaccine-rows-1" style={{ paddingBottom: '4%' }}>
          <StyledFormItem
            label="VFC class"
            className="add-vaccine-labels"
            name="vfcClass"
            validateStatus={formikProps.errors.vfcClass ? 'error' : ''}
            help={formikProps.errors.vfcClass}
            initialValue={formikProps.values.vfcClass}
            style={{ width: '100%' }}
          >
            <StyledSimpleSelect
              options={['VFC eligible', 'VFC not eligible'].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.vfcClass}
              status={formikProps.errors.vfcClass ? 'error' : ''}
              onChange={(value) => formikProps.setFieldValue('vfcClass', value)}
            />
          </StyledFormItem>
        </div>
        <div className="add-vaccine-rows-1">
          <StyledFormItem
            label="VIS Provided"
            validateStatus={formikProps.errors.visProvided ? 'error' : ''}
            help={formikProps.errors.visProvided}
            initialValue={formikProps.values.visProvided}
            className="add-vaccine-labels"
            style={{ width: '40%' }}
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
          <StyledFormItem
            label="Funding"
            className="add-vaccine-labels"
            name="funding"
            validateStatus={formikProps.errors.funding ? 'error' : ''}
            help={formikProps.errors.funding}
            initialValue={formikProps.values.funding}
            style={{ width: '60%' }}
          >
            <StyledSimpleSelect
              options={['Public', 'Private'].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-vaccine-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.funding}
              status={formikProps.errors.funding ? 'error' : ''}
              onChange={(value: any) => {
                formikProps.setFieldValue('funding', value);
              }}
            />
          </StyledFormItem>
        </div>
      </div>
    </AdministeredWrapper>
  );
};
