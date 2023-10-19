import { Button, Card, Form, notification, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import moment from 'moment';
import React, { FC } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { LuClock3 } from 'react-icons/lu';
import {
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { ProviderService } from '../../../Service/Provider';
import { dateFormat, toPascalCase } from '../../../utility';
import { timesArray } from '../../Scheduling/utility';
import { ProviderSchedule, ScheduleType } from '../types';
import { WorkingHourFormWrapper } from './WorkingHourForm.styled';

export interface WorkingHourFormProps {
  className?: string;
  onClose: () => void;
  providerId: string;
  initVal?: ProviderSchedule;
}

export const WorkingHourForm: FC<WorkingHourFormProps> = ({
  onClose,
  className,
  providerId,
  initVal,
}) => {
  const providerService = ProviderService();

  const handleSubmit = async (values: any) => {
    try {
      await providerService.addProviderWorkingSchedule(values);
      notification.success({ message: 'Successfully added working hours' });
      onClose();
    } catch (err) {
      notification.error({ message: 'Error occured adding working hour' });
    }
  };

  const initialValue: ProviderSchedule = {
    title: '',
    facility: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    scheduleType: ScheduleType.WORKING_HOURS,
    lunchStartTime: '',
    lunchEndTime: '',
    days: [],
    providerId,
    // leave
    approvalFlag: true,
    reasonForLeave: '',
    leaveStartTime: '',
    leaveEndTime: '',
  };

  const weekdays = {
    MO: 'MONDAY',
    TU: 'TUESDAY',
    WE: 'WEDNESDAY',
    TH: 'THURSDAY',
    FR: 'FRIDAY',
    SA: 'SATURDAY',
    SU: 'SUNDAY',
  };

  return (
    <WorkingHourFormWrapper className={className}>
      <Typography className="sub-title">Working Hours</Typography>
      <Card>
        <Formik
          initialValues={initialValue}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(formikProps) => (
            <Form onFinish={formikProps.handleSubmit} layout="vertical">
              <StyledFormItem
                label="Title"
                name="title"
                validateStatus={formikProps.errors.title ? 'error' : ''}
                help={formikProps.errors.title}
                initialValue={formikProps.values.title}
              >
                <StyledSimpleInput
                  value={formikProps.values.title}
                  status={formikProps.errors.title ? 'error' : ''}
                  name="title"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a Title"
                />
              </StyledFormItem>
              <StyledFormItem
                label="Facility"
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
                  placeholder="Type a Title"
                />
              </StyledFormItem>
              <Row style={{ justifyContent: 'space-between' }}>
                <StyledFormItem
                  required
                  label="start Date"
                  name="startDate"
                  style={{ width: '48%' }}
                >
                  <StyledSimpleDatePicker
                    defaultValue={
                      formikProps.values.startDate
                        ? dayjs(formikProps.values.startDate, dateFormat)
                        : undefined
                    }
                    style={{ width: '100%' }}
                    name="startDate"
                    onChange={(_value, dateString) =>
                      formikProps.setFieldValue(
                        'startDate',
                        moment(dateString).format('yyyy-MM-DD')
                      )
                    }
                    placeholder="Type a start date"
                    format="MM/DD/YYYY"
                  />
                </StyledFormItem>
                <StyledFormItem
                  required
                  label="End Date"
                  name="dateOfBirth"
                  style={{ width: '48%' }}
                >
                  <StyledSimpleDatePicker
                    defaultValue={
                      formikProps.values.endDate
                        ? dayjs(formikProps.values.endDate, dateFormat)
                        : undefined
                    }
                    style={{ width: '100%' }}
                    name="endDate"
                    onChange={(_value, dateString) =>
                      formikProps.setFieldValue(
                        'endDate',
                        moment(dateString).format('yyyy-MM-DD')
                      )
                    }
                    placeholder="Type a end date"
                    format="MM/DD/YYYY"
                  />
                </StyledFormItem>
              </Row>
              <Row style={{ justifyContent: 'space-between' }}>
                <StyledFormItem
                  label="Start Time"
                  name="startTime"
                  initialValue={formikProps.values.startTime || undefined}
                  style={{ width: '48%' }}
                >
                  <StyledSimpleSelect
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('startTime', value)
                    }
                    options={timesArray.map((time) => ({
                      value: time,
                      label: time,
                    }))}
                    placeholder={
                      <span className="placeholders">
                        <LuClock3 className="clockicon" />
                        Select start time
                      </span>
                    }
                  />
                </StyledFormItem>
                <StyledFormItem
                  label="End Time"
                  name="endTime"
                  initialValue={formikProps.values.endTime || undefined}
                  style={{ width: '48%' }}
                >
                  <StyledSimpleSelect
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('endTime', value)
                    }
                    options={timesArray.map((time) => ({
                      value: time,
                      label: time,
                    }))}
                    placeholder={
                      <span className="placeholders">
                        <LuClock3 className="clockicon" />
                        Select End time
                      </span>
                    }
                  />
                </StyledFormItem>
              </Row>
              <div className="dates-row">
                {Object.keys(weekdays).map((key) => (
                  <div
                    className={`dates ${
                      formikProps?.values.days.includes(
                        weekdays[key as keyof typeof weekdays]
                      )
                        ? 'active'
                        : ''
                    }`}
                    key={key}
                    onClick={() => {
                      const val = weekdays[key as keyof typeof weekdays];
                      if (formikProps?.values?.days?.includes(val)) {
                        // remove
                        const newArr = formikProps.values.days.filter(
                          (e) => e !== val
                        );
                        formikProps.setFieldValue('days', [...newArr]);
                      } else {
                        formikProps?.setFieldValue('days', [
                          ...formikProps.values.days,
                          val,
                        ]);
                      }
                    }}
                  >
                    {toPascalCase(key)}
                  </div>
                ))}
              </div>
              <Typography className="sub-title">Lunch/break time </Typography>
              <Row style={{ justifyContent: 'space-between' }}>
                <StyledFormItem
                  label="Start Time"
                  name="lunchStartTime"
                  initialValue={formikProps.values.lunchStartTime || undefined}
                  style={{ width: '48%' }}
                >
                  <StyledSimpleSelect
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('lunchStartTime', value)
                    }
                    options={timesArray.map((time) => ({
                      value: time,
                      label: time,
                    }))}
                    placeholder={
                      <span className="placeholders">
                        <LuClock3 className="clockicon" />
                        Select start time
                      </span>
                    }
                  />
                </StyledFormItem>
                <StyledFormItem
                  label="End Time"
                  name="lunchEndTime"
                  initialValue={formikProps.values.lunchEndTime || undefined}
                  style={{ width: '48%' }}
                >
                  <StyledSimpleSelect
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('lunchEndTime', value)
                    }
                    options={timesArray.map((time) => ({
                      value: time,
                      label: time,
                    }))}
                    placeholder={
                      <span className="placeholders">
                        <LuClock3 className="clockicon" />
                        Select End time
                      </span>
                    }
                  />
                </StyledFormItem>
              </Row>
              <Row
                style={{ justifyContent: 'space-between', marginTop: '30px' }}
              >
                <Button className="back-btn">
                  <BsArrowLeftShort />
                </Button>
                <Button type="primary" htmlType="submit">
                  {' '}
                  Apply{' '}
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </Card>
    </WorkingHourFormWrapper>
  );
};
