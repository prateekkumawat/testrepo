import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { FormikProps } from 'formik';
import dayjs from 'dayjs';
import moment from 'moment';
import { InjectionAdministeredWrapper } from './InjectionAdminstered.styled';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
  StyledTextArea,
} from '../../../../Component/Form/Form';
import { Injection } from '../../types';
import { dateFormat } from '../../../../utility';

interface AdministeredProps {
  className?: string;
  formikProps: FormikProps<Injection>;
}

export const InjectionAdministered: FC<AdministeredProps> = ({
  className,
  formikProps,
}) => {
  return (
    <InjectionAdministeredWrapper className={className}>
      <div className="add-injection-column-1">
        <div className="add-injection-rows">
          <StyledFormItem
            label="Ordered By*"
            className="add-injection-labels"
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
              className="add-injection-input-box"
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
            className="add-injection-labels"
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
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.administeredBy}
              status={formikProps.errors.administeredBy ? 'error' : ''}
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            /> */}
          </StyledFormItem>
        </div>
        <div className="add-injection-rows">
          <div className="add-injection-rows-1">
            <StyledFormItem
              label="Administreted on*"
              className="add-injection-labels"
              name="administeredOn"
              style={{ width: '75%' }}
            >
              <StyledSimpleDatePicker
                className="add-injection-input-box"
                // disabled={activeStep !== 'add'}
                defaultValue={
                  formikProps.values.administeredOn
                    ? dayjs(formikProps.values.administeredOn, dateFormat)
                    : undefined
                }
                style={{ width: '100%' }}
                name="administeredOn"
                onChange={(_value, dateString) =>
                  formikProps.setFieldValue(
                    'administeredOn',
                    moment(dateString).format('yyyy-MM-DD')
                  )
                }
                placeholder="Type a earliest Date"
                format="MM/DD/YYYY"
              />
            </StyledFormItem>
            <div className="saperator" />
            <StyledFormItem
              className="add-injection-labels"
              name="isTodayFlag"
              // validateStatus={formikProps.errors.isTodayFlag ? 'error' : ''}
              // help={formikProps.errors.isTodayFlag}
              // initialValue={formikProps.values.isTodayFlag}
              style={{ width: '22%', paddingLeft: '10px' }}
            >
              <StyledCheckBox
                className="circular-checkbox"
                // disabled={activeStep !== 'add'}
                // value={formikProps.values.isTodayFlag}
                //   status={formikProps.errors.vaccineName ? 'error' : ''}
                onChange={(e: any) =>
                  formikProps.setFieldValue('isTodayFlag', e?.target?.checked)
                }
                //   onBlur={formikProps.handleBlur}
              />
              <span className="checkbox-label">Today</span>
            </StyledFormItem>
          </div>
          <div className="add-injection-rows-2">
            <StyledFormItem
              label="Time"
              className="add-injection-labels-time"
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
              className="add-injection-labels"
              name="isNowFlag"
              // validateStatus={formikProps.errors.isNowFlag ? 'error' : ''}
              // help={formikProps.errors.isNowFlag}
              // initialValue={formikProps.values.isNowFlag}
              style={{ width: '21%', paddingLeft: '10px' }}
            >
              <StyledCheckBox
                className="circular-checkbox"
                // disabled={activeStep !== 'add'}
                // value={formikProps.values.isNowFlag}
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
        <div className="add-injection-rows">
          <StyledFormItem
            label="Expiration Date*"
            className="add-injection-labels"
            name="expirationDate"
            style={{ width: '49%' }}
          >
            <StyledSimpleDatePicker
              className="add-injection-input-box"
              // disabled={activeStep !== 'add'}
              defaultValue={
                formikProps.values.expirationDate
                  ? dayjs(formikProps.values.expirationDate, dateFormat)
                  : undefined
              }
              style={{ width: '100%' }}
              name="expirationDate"
              onChange={(_value, dateString) =>
                formikProps.setFieldValue(
                  'expirationDate',
                  moment(dateString).format('yyyy-MM-DD')
                )
              }
              format="MM/DD/YYYY"
            />
          </StyledFormItem>
          <StyledFormItem
            label="Location"
            className="add-vaccine-labels"
            name="location"
            validateStatus={formikProps.errors.location ? 'error' : ''}
            help={formikProps.errors.location}
            initialValue={formikProps.values.location}
            style={{ width: '49%' }}
          >
            <StyledSimpleInput
              value={formikProps.values.location}
              status={formikProps.errors.location ? 'error' : ''}
              name="location"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
          </StyledFormItem>
        </div>
      </div>{' '}
      <div className="add-injection-column-2">
        <div className="add-injection-rows">
          <StyledFormItem
            label="Route*"
            className="add-injection-labels"
            name="route"
            validateStatus={formikProps.errors.route ? 'error' : ''}
            help={formikProps.errors.route}
            initialValue={formikProps.values.route}
            style={{ width: '100%' }}
          >
            <StyledSimpleSelect
              options={[
                'Intravenous',
                'Intramuscular',
                'Subcutaneous',
                'Intraosseous',
                'Intradermal',
                'Intrathecal',
              ].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.route}
              status={formikProps.errors.route ? 'error' : ''}
              onChange={(value) => formikProps.setFieldValue('route', value)}
            />
          </StyledFormItem>
        </div>
        <div className="add-injection-rows">
          <StyledFormItem
            label="Site*"
            className="add-injection-labels"
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
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.site}
              status={formikProps.errors.site ? 'error' : ''}
              onChange={(value) => formikProps.setFieldValue('site', value)}
            />
          </StyledFormItem>
        </div>
        <div className="add-injection-rows">
          <StyledFormItem
            label="Dose*"
            className="add-injection-labels"
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
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.dose}
              status={formikProps.errors.dose ? 'error' : ''}
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            /> */}
          </StyledFormItem>
          <StyledFormItem
            label="Unit(s)*"
            className="add-injection-labels"
            name="doseUnits"
            validateStatus={formikProps.errors.doseUnits ? 'error' : ''}
            help={formikProps.errors.doseUnits}
            initialValue={formikProps.values.doseUnits}
            style={{ width: '50%' }}
          >
            <StyledSimpleSelect
              options={['dL', 'g', 'Kg', 'KL', 'L', 'mg', 'mL', 'ug', 'uL'].map(
                (e) => ({
                  value: e,
                  label: e,
                })
              )}
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.doseUnits}
              status={formikProps.errors.doseUnits ? 'error' : ''}
              onChange={(value) =>
                formikProps.setFieldValue('doseUnits', value)
              }
            />
          </StyledFormItem>
        </div>
        <div className="add-injection-rows">
          <StyledFormItem
            label="Frequency"
            className="add-injection-labels"
            name="frequency"
            validateStatus={formikProps.errors.frequency ? 'error' : ''}
            help={formikProps.errors.frequency}
            initialValue={formikProps.values.frequency}
          >
            <StyledSimpleSelect
              options={[
                'once a day',
                'once',
                'once a week',
                'once a month',
                'every other day',
                '2 times a day',
                'twice',
                '2 times a week',
                '2 times a month',
                '3 times a day',
                '3 times',
                '3 times a week',
                '4 times a day',
                '4 times a week',
                '5 times a day',
                'every 4 hours',
                '5 times a week',
                'As needed',
              ].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.frequency}
              status={formikProps.errors.frequency ? 'error' : ''}
              onChange={(value) =>
                formikProps.setFieldValue('frequency', value)
              }
            />
          </StyledFormItem>
        </div>
        <div className="add-injection-rows">
          <StyledFormItem
            label="Duration"
            className="add-injection-labels"
            name="duration"
            validateStatus={formikProps.errors.duration ? 'error' : ''}
            help={formikProps.errors.duration}
            initialValue={formikProps.values.duration}
            style={{ width: '56%' }}
          >
            <StyledSimpleInput
              type="number"
              value={formikProps.values.duration}
              status={formikProps.errors.duration ? 'error' : ''}
              name="duration"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
          </StyledFormItem>
          <StyledFormItem
            validateStatus={formikProps.errors.durationUnits ? 'error' : ''}
            help={formikProps.errors.durationUnits}
            initialValue={formikProps.values.durationUnits}
            className="add-injection-labels"
            style={{ width: '50%', marginLeft: '5%' }}
          >
            <StyledSimpleSelect
              options={['Day(s)', 'week(s)', 'month(s)'].map((e) => ({
                value: e,
                label: e,
              }))}
              className="add-injection-input-box"
              //   disabled={activeStep !== 'add'}
              value={formikProps.values.durationUnits}
              status={formikProps.errors.durationUnits ? 'error' : ''}
              onChange={(value) =>
                formikProps.setFieldValue('durationUnits', value)
              }
            />
          </StyledFormItem>
        </div>
        <div className="add-injection-rows">
          <StyledFormItem
            label="Notes"
            className="add-injection-textbox"
            name="notes"
            validateStatus={formikProps.errors.notes ? 'error' : ''}
            help={formikProps.errors.notes}
            initialValue={formikProps.values.notes}
            style={{ width: '100%' }}
          >
            <StyledTextArea
              rows={3}
              status={formikProps.errors.notes ? 'error' : ''}
              name="notes"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              placeholder="Type a Reason for visit"
            />
          </StyledFormItem>
        </div>
      </div>
    </InjectionAdministeredWrapper>
  );
};
