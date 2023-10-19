import { Button, Row, Typography } from 'antd';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  BsGeoAltFill,
  BsEnvelope,
  BsPerson,
  BsPersonCircle,
  BsTelephone,
  BsHospital,
  BsClock,
  BsCalendar2Week,
} from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { TfiReceipt } from 'react-icons/tfi';
import { GrContactInfo } from 'react-icons/gr';
import { KeyValWrapper, ScheduleDetailWrapper } from './ScheduleDetail.styled';
import { Appointment } from '../utility';
import { GetPatient } from '../../CreatePatient/Types';
import { PatientService } from '../../../Service/Patient';
import { ProviderService } from '../../../Service/Provider';
import { ProviderWithId } from '../../Providers/types';

export interface ScheduleDetailProps {
  className?: string;
  schedule: Appointment;
}

const KeyVal = ({
  keyName,
  value,
}: {
  keyName: string | number | ReactNode;
  value?: string | number | ReactNode;
}) => (
  <KeyValWrapper>
    <Row className="key-name">{keyName}</Row>
    <Row className="value">{value ?? '-'}</Row>
  </KeyValWrapper>
);

export const ScheduleDetail: FC<ScheduleDetailProps> = ({
  schedule,
  className,
}) => {
  const [patient, setPatient] = useState<GetPatient | null>();
  const [provider, setProvider] = useState<ProviderWithId | null>();
  const patientService = PatientService();
  const providerService = ProviderService();

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const data = await patientService.getPatientDetails(
          schedule?.patientId?.toString()
        );
        console.log('data', data);
        setPatient(data);
      } catch (err) {
        console.log('getProviderBySpeciality -> err', err);
      }
    };

    getSchedule();
  }, [schedule]);

  useEffect(() => {
    const getProvider = async () => {
      try {
        const data = await providerService.getProviderById(
          schedule?.providerId?.toString()
        );
        console.log('datas', data);
        setProvider(data);
      } catch (err) {
        console.log('getProviderBySpeciality -> err', err);
      }
    };

    getProvider();
  }, [schedule]);

  return (
    <ScheduleDetailWrapper className={className}>
      <Row className="header">
        <BsPersonCircle />
        <Typography>Patient Booking Details</Typography>
      </Row>
      <Row className="detail-body-wrapper">
        {schedule && patient ? (
          <Row className="edit-wrapper">
            <FaRegEdit />
          </Row>
        ) : null}
        <Row className="detail-body">
          <Row className="left-border" />
          {schedule && patient ? (
            <Row className="content-wrapper">
              <Row className="content">
                <KeyVal
                  keyName={<BsPerson className="icon" />}
                  value={[patient.firstName, patient.lastName].join(' ')}
                />
              </Row>
              <Row className="content">
                <KeyVal keyName="ID:" value={schedule?.patientId} />
                <KeyVal
                  keyName={<BsTelephone className="icon" />}
                  value={patient.primaryPhoneNumber}
                />
              </Row>
              <Row className="content">
                <KeyVal
                  keyName={<BsEnvelope className="icon" />}
                  value={patient.email}
                />
              </Row>
              <Row className="content">
                <KeyVal
                  keyName={<BsGeoAltFill className="icon" />}
                  value={
                    <>
                      <Typography>
                        {`${patient.addressLine1} ${patient.addressLine2}`}
                      </Typography>
                      <Typography>
                        {[patient.city, patient.state, patient.country]
                          .map((e) => e.trim())
                          .join(' ')}
                      </Typography>
                    </>
                  }
                />
              </Row>
              <Row className="content">
                <KeyVal keyName="Visit" value={schedule?.typeOfVisit} />
                <KeyVal
                  keyName="Status"
                  value={schedule?.currentStatusOfVisit}
                />
              </Row>
              <Row className="content">
                <KeyVal
                  keyName={<BsCalendar2Week className="icon" />}
                  value={schedule?.scheduleDate}
                />
                <KeyVal
                  keyName={<BsClock className="icon" />}
                  value={`${schedule?.scheduleStartTime} - ${schedule?.scheduleEndTime}`}
                />
              </Row>
              <Row className="content">
                <KeyVal
                  keyName={<GrContactInfo className="icon" />}
                  value={[provider?.firstName, provider?.lastName].join(' ')}
                />
              </Row>
              <Row className="content">
                <KeyVal
                  keyName={<BsHospital />}
                  value={provider?.primaryPracticeLocation}
                />
              </Row>
              <Row className="content">
                <KeyVal
                  keyName={<TfiReceipt className="icon" />}
                  value="Billing (Insurance details)/ self pay"
                />
              </Row>
            </Row>
          ) : (
            <Row className="content-wrapper" />
          )}
        </Row>
      </Row>{' '}
      {schedule && patient ? (
        <Row>
          <Typography className="detail-title">Reason for visit</Typography>
          <Row className="reason" />
        </Row>
      ) : null}{' '}
    </ScheduleDetailWrapper>
  );
};
