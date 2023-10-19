import { Button, Card, Form, notification, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import moment from 'moment';
import React, { FC } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { LuClock3 } from 'react-icons/lu';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
  StyledTextArea,
} from '../../../Component/Form/Form';
import { ProviderService } from '../../../Service/Provider';
import { dateFormat } from '../../../utility';
import { timesArray } from '../../Scheduling/utility';
import { LeaveApplicationWrapper } from './LeaveApplication.styled';

export interface LeaveApplicationProps {
  className?: string;
  onClose: () => void;
  providerId: string;
}

export const LeaveApplication: FC<LeaveApplicationProps> = ({
  className,
  onClose,
  providerId,
}) => {
  const providerService = ProviderService();

  const handleSubmit = async (values: any) => {
    try {
      if (values?.entireDay) values.entireDay = undefined;
      const data = await providerService.addProviderWorkingSchedule(values);
      notification.success({ message: 'Successfully requested leave' });
      onClose();
    } catch (err) {
      notification.error({ message: 'Error occured requesting leave' });
    }
  };

  type ScheduleInit = {
    title: string;
    facility: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    lunchStartTime: string;
    lunchEndTime: string;
    days: Array<string>;
    providerId: string;
    // leave
    approvalFlag: boolean;
    reasonForLeave: string;
    scheduleType: string;
    leaveStartTime: string;
    leaveEndTime: string;
    entireDay?: boolean;
  };

  const initialValue: ScheduleInit = {
    title: '',
    facility: '',
    startDate: '',
    endDate: '',
    startTime: '',
    scheduleType: 'LEAVE',
    leaveStartTime: '',
    leaveEndTime: '',
    endTime: '',
    lunchStartTime: '',
    lunchEndTime: '',
    days: [],
    providerId,
    // leave
    approvalFlag: true,
    reasonForLeave: '',
    entireDay: false,
  };

  return (
    <LeaveApplicationWrapper className={className}>
      <Typography className="sub-title">Leave Application</Typography>
      <Card>
        <Formik
          initialValues={initialValue}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(formikProps) => (
            <Form onFinish={formikProps.handleSubmit} layout="vertical">
              <StyledFormItem required label="start Date" name="startDate">
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
              <StyledFormItem required label="End Date" name="endDate">
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
              <Row style={{ justifyContent: 'space-between' }} />
              <Row style={{ justifyContent: 'space-between' }}>
                <StyledFormItem
                  label="Start Time"
                  name="leaveStartTime"
                  initialValue={formikProps.values.leaveStartTime || undefined}
                  style={{ width: '30%' }}
                >
                  <StyledSimpleSelect
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('leaveStartTime', value)
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
                  name="leaveEndTime"
                  initialValue={formikProps.values.leaveEndTime || undefined}
                  style={{ width: '30%' }}
                >
                  <StyledSimpleSelect
                    showSearch
                    onChange={(value) =>
                      formikProps.setFieldValue('leaveEndTime', value)
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
                <StyledFormItem
                  label="Entire Day"
                  name="entireDay"
                  labelAlign="right"
                  validateStatus={formikProps.errors.entireDay ? 'error' : ''}
                  help={formikProps.errors.entireDay}
                  initialValue={formikProps.values.entireDay}
                  style={{ width: '30%' }}
                >
                  <StyledCheckBox />
                </StyledFormItem>
              </Row>

              <StyledFormItem
                label="Reason for Leave"
                name="reasonForLeave"
                validateStatus={
                  formikProps.errors.reasonForLeave ? 'error' : ''
                }
                help={formikProps.errors.reasonForLeave}
                initialValue={formikProps.values.reasonForLeave}
              >
                <StyledTextArea
                  rows={10}
                  status={formikProps.errors.reasonForLeave ? 'error' : ''}
                  name="reasonForLeave"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  placeholder="Type a Reason for leave"
                />
              </StyledFormItem>
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
    </LeaveApplicationWrapper>
  );
};
