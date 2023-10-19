import { Row, Button } from 'antd';
import dayjs from 'dayjs';
import { FormikProps } from 'formik';
import moment from 'moment';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiUserListBold } from 'react-icons/pi';
import { LuClock3 } from 'react-icons/lu';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
  StyledSimpleDatePicker,
  StyledTextArea,
} from '../../../Component/Form/Form';
import { dateFormat } from '../../../utility';
import { Appointment, timesArray } from '../utility';
import { ViewPatient } from '../ViewPatient/ViewPatient';
import { ViewProvider } from '../ViewProvider/ViewProvider';
import hospitalIcon from '../../../../public/Vector.svg';

export interface BookAppointmentUiProps {
  className?: string;
  formikProps: FormikProps<Appointment>;
  providerModalOpen: boolean;
  setProviderModalOpen: Dispatch<SetStateAction<boolean>>;
  patientModalOpen: boolean;
  setPatientModalOpen: Dispatch<SetStateAction<boolean>>;
  loader: boolean;
}
export const BookAppointmentUi: FC<BookAppointmentUiProps> = ({
  className,
  formikProps,
  providerModalOpen,
  setProviderModalOpen,
  loader,
  patientModalOpen,
  setPatientModalOpen,
}) => {
  console.log('formikProps.values.patientName', formikProps.values.patientName);

  return (
    <div
      className={className}
      style={{
        margin: '30px',
      }}
    >
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StyledFormItem
          label="Patient Name"
          validateStatus={formikProps.errors.patientName ? 'error' : ''}
          help={formikProps.errors.patientName}
          initialValue={formikProps.values.patientName}
          className="responsive"
        >
          <StyledSimpleInput
            readOnly
            name="patientName"
            value={formikProps.values.patientName}
            status={formikProps.errors.patientName ? 'error' : ''}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a Patient Name"
            prefix={<AiOutlineSearch />}
          />
        </StyledFormItem>
        <Button
          onClick={() => {
            formikProps.setFieldValue('typeOfVisit', 'asasaasd');
            setPatientModalOpen((prev) => !prev);
          }}
          type="default"
          className="plus-icon"
        >
          +
        </Button>
      </Row>
      <ViewPatient
        modalOpen={patientModalOpen}
        setModalOpen={setPatientModalOpen}
        submitHandler={(values: any) => {
          setPatientModalOpen(false);
          formikProps.setFieldValue('patientId', values.patientId);
          formikProps.setFieldValue('patientName', values.name);
        }}
      />

      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Type of visit"
          name="typeOfVisit"
          initialValue={formikProps.values.typeOfVisit || undefined}
          className="col-49"
        >
          <StyledSimpleSelect
            showSearch
            onChange={(value) =>
              formikProps.setFieldValue('typeOfVisit', value)
            }
            options={[
              { value: 'Annual visit', label: 'Annual visit' },
              { value: 'Follow-Up', label: 'Follow-Up' },
              { value: 'Injection', label: 'Injection' },
              { value: 'Dental', label: 'Dental' },
              { value: 'Dermatology', label: 'Dermatology' },
              { value: 'Consult', label: 'Consult' },
              {
                value: 'Nurse Practitioner',
                label: 'Nurse Practitioner',
              },
            ]}
            placeholder={
              <span className="placeholders">
                <img
                  src={hospitalIcon}
                  alt="Hospital Icon"
                  style={{ marginRight: '8px' }}
                />
                Type of visit
              </span>
            }
          />
        </StyledFormItem>
        <StyledFormItem
          label="Current Status of visit"
          name="currentStatusOfVisit"
          initialValue={formikProps.values.currentStatusOfVisit || undefined}
          style={{ width: '49%' }}
          className="col-49"
        >
          <StyledSimpleSelect
            showSearch
            onChange={(value) =>
              formikProps.setFieldValue('currentStatusOfVisit', value)
            }
            options={[
              { value: 'Unconfirmed', label: 'Unconfirmed' },
              { value: 'Confirmed', label: 'Confirmed' },
              { value: 'Checked-In', label: 'Checked-In' },
              { value: 'Checked Out', label: 'Checked Out' },
              { value: 'Rescheduled', label: 'Rescheduled' },
              { value: 'Canceled', label: 'Canceled' },
              { value: 'No-Show', label: 'No-Show' },
            ]}
            placeholder={
              <span className="placeholders">Select a licensing state</span>
            }
          />
        </StyledFormItem>
      </Row>
      {/* row3 */}
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Row
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <StyledFormItem
            label="Provider Name"
            validateStatus={formikProps.errors.providerName ? 'error' : ''}
            help={formikProps.errors.providerName}
            initialValue={formikProps.values.providerName}
            className="provider"
          >
            <StyledSimpleInput
              readOnly
              value={formikProps.values.providerName}
              status={formikProps.errors.providerName ? 'error' : ''}
              name="providerName"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              prefix={
                <PiUserListBold
                  style={{
                    color: formikProps.errors.providerName ? 'red' : 'unset',
                    fontSize: '25px',
                  }}
                />
              }
              placeholder="Type a Provider Name"
            />
          </StyledFormItem>
          <Button
            onClick={() => setProviderModalOpen((prev) => !prev)}
            type="default"
            className="plus-icon"
          >
            +
          </Button>
          <ViewProvider
            modalOpen={providerModalOpen}
            setModalOpen={setProviderModalOpen}
            submitHandler={(values: any) => {
              formikProps.setFieldValue('providerId', values.providerId);
              formikProps.setFieldValue('providerName', values.name);
              setProviderModalOpen(false);
            }}
          />
        </Row>
        <Row style={{ width: '49.8%', justifyContent: 'space-between' }}>
          <StyledFormItem label="Date" name="scheduleDate" className="date">
            <StyledSimpleDatePicker
              defaultValue={
                formikProps.values.scheduleDate
                  ? dayjs(formikProps.values.scheduleDate, dateFormat)
                  : undefined
              }
              style={{ width: '100%' }}
              name="scheduleDate"
              onChange={(_value, dateString) =>
                formikProps.setFieldValue(
                  'scheduleDate',
                  moment(dateString).format('yyyy-MM-DD')
                )
              }
              placeholder="Select a date"
              format="MM/DD/YYYY"
            />
          </StyledFormItem>

          <StyledFormItem
            label="Start Time"
            name="scheduleStartTime"
            initialValue={formikProps.values.scheduleStartTime || undefined}
            className="start-end"
          >
            <StyledSimpleSelect
              showSearch
              onChange={(value) =>
                formikProps.setFieldValue('scheduleStartTime', value)
              }
              options={timesArray.map((time) => ({
                value: time,
                label: time,
              }))}
              placeholder={
                <span className="placeholders">
                  <LuClock3 className="clockicon" />
                  Start
                </span>
              }
            />
          </StyledFormItem>
          <StyledFormItem
            label="End Time"
            name="scheduleEndTime"
            initialValue={formikProps.values.scheduleEndTime || undefined}
            className="start-end"
          >
            <StyledSimpleSelect
              showSearch
              onChange={(value) =>
                formikProps.setFieldValue('scheduleEndTime', value)
              }
              options={timesArray.map((time) => ({
                value: time,
                label: time,
              }))}
              placeholder={
                <span className="placeholders">
                  <LuClock3 className="clockicon" />
                  End
                </span>
              }
            />
          </StyledFormItem>
        </Row>
      </Row>
      {/* row4 */}
      <Row style={{ justifyContent: 'space-between' }}>
        <StyledFormItem
          label="Reason for visit"
          name="reasonOfVisit"
          validateStatus={formikProps.errors.reasonOfVisit ? 'error' : ''}
          help={formikProps.errors.reasonOfVisit}
          initialValue={formikProps.values.reasonOfVisit}
          style={{ width: '49%' }}
        >
          <StyledTextArea
            rows={10}
            status={formikProps.errors.reasonOfVisit ? 'error' : ''}
            name="reasonOfVisit"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            placeholder="Type a Reason for visit"
          />
        </StyledFormItem>
        <Row className="submit-btns-wrapper">
          <Row className="inner-wrapper">
            <Button className="submit-btns">Cancel</Button>
            <Button
              className="submit-btns"
              type="primary"
              htmlType="submit"
              loading={loader}
            >
              Book
            </Button>
          </Row>
        </Row>
      </Row>
    </div>
  );
};
