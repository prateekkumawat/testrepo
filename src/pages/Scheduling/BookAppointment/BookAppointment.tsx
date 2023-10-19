import React, { FC, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Button, Form, notification, Row, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import moment from 'moment';
import {
  StyledFormItem,
  StyledSimpleDatePicker,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { AppointmentService } from '../../../Service/Appointment';
import { dateFormat } from '../../../utility';
import { Appointment, timesArray } from '../utility';
import { ViewPatient } from '../ViewPatient/ViewPatient';
import { ViewProvider } from '../ViewProvider/ViewProvider';
import { BookAppointmentWrapper } from './BookAppointment.styled';
import { BookAppointmentUi } from './BookAppointmentUi';

interface AppointmentType {
  patientId: number;
  patientName: string;
  providerId: number;
  providerName: string;
  typeOfVisit: string;
  speciality?: string;
  currentStatusOfVisit: string;
  reasonOfVisit: string;
  scheduleDate: string;
  scheduleStartTime: string;
  scheduleEndTime: string;
}
export const BookAppointment: FC = () => {
  const [patientModalOpen, setPatientModalOpen] = useState<boolean>(false);
  const [providerModalOpen, setProviderModalOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [formValue, setFormValues] = useState<any>();
  const [refresh, setRefresh] = useState<boolean>(false);
  const appointmentServce = AppointmentService();

  const createAppointment = async (value: AppointmentType) => {
    try {
      setLoader(true);
      await appointmentServce.postAppointment(value);
      notification.success({
        message: 'Appointment booked successfully',
      });
      setLoader(false);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err?.response?.data || 'Error occured while creating provider',
      });
    }
  };
  useEffect(() => {
    if (formValue) createAppointment(formValue);
  }, [formValue]);

  const initialValue: Appointment = {
    patientId: 0,
    patientName: '',
    providerId: 0,
    providerName: '',
    typeOfVisit: '',
    currentStatusOfVisit: '',
    reasonOfVisit: '',
    scheduleDate: '',
    scheduleStartTime: '',
    scheduleEndTime: '',
  };
  return (
    <BookAppointmentWrapper>
      <Typography className="book-title">Book Appointment</Typography>
      <Formik
        initialValues={initialValue}
        enableReinitialize
        validationSchema={Yup.object().shape({})}
        validateOnBlur
        validateOnChange
        onSubmit={async (value: AppointmentType, { resetForm }) => {
          await setFormValues(value);
          resetForm();
        }}
      >
        {(formikProps) => (
          <Form onFinish={formikProps.handleSubmit} layout="vertical">
            <BookAppointmentUi
              formikProps={formikProps}
              setProviderModalOpen={setProviderModalOpen}
              providerModalOpen={providerModalOpen}
              patientModalOpen={patientModalOpen}
              setPatientModalOpen={setPatientModalOpen}
              loader={false}
            />
          </Form>
        )}
      </Formik>
    </BookAppointmentWrapper>
  );
};
