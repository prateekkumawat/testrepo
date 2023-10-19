import React, { FC, useState } from 'react';
import { Button, Typography } from 'antd';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { MdManageSearch } from 'react-icons/md';
import {
  BsCalendarDate,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
} from 'react-icons/bs';
import TextArea from 'antd/es/input/TextArea';
import { ShadowedCard } from '../../../Component/Card/Card';
import { dataOrDash, getAgeFromDate } from '../../../utility';
import { EmergencyContact, GetPatient } from '../../CreatePatient/Types';
import { ViewPatientBodyWrapper } from './ViewPatientBody.styled';
import { Allergies } from '../../Allergies/Allergies';
import { VitalsPage } from '../../Vitals/Vitals';
import { Meds } from '../../Meds/Meds';
import { Visits } from '../../Visits/Visits';
import { VaccinesPage } from '../../Vaccines/VaccinesPage';
import { LabsPage } from '../../Labs/LabsPage';
import { HistoryPage } from '../../History/History';

export interface ViewPatientBodyProps {
  patient?: Partial<GetPatient>;
  activeTab: string | null;
  // 'vitals' | 'allergies' | 'meds' | 'visits' | 'visits' | 'vaccines' | 'labs' | 'history' ;

}

export const ViewPatientBody: FC<ViewPatientBodyProps> = ({
  patient,
  activeTab,
}) => {
  const [showMoreDetails, setShowMoreDetails] = useState<boolean>(false);

  const renderKeyValue = (key: string, value?: string | number | null) => {
    return (
      <div className="key-value-pair">
        <Typography className="key-name">{key}:</Typography>
        <Typography className="key-value">{dataOrDash(value)}</Typography>
      </div>
    );
  };

  const renderEmergenContact = (emergencyContact: EmergencyContact) => {
    return `${[emergencyContact?.firstName, emergencyContact?.lastName]
      ?.map((e) => e?.trim())
      .join(' ')} ${[emergencyContact?.phoneNumber]
      ?.map((e) => e?.trim())
      .join(' ')}`;
  };

  const renderSeparatedKeyValue = (
    key: string,
    value?: string | number | null
  ) => {
    return (
      <div className="key-value-pair-separated">
        <Typography className="key-name">{key ? `${key}:` : ''}</Typography>
        <Typography className="key-value">{dataOrDash(value)}</Typography>
      </div>
    );
  };

  return (
    <ViewPatientBodyWrapper className="view-patient-body">
      <ShadowedCard className="card-1-wrapper">
        <div className="card-1">
          <div className="row1">
            <div>
              <Typography className="key-name">
                {[
                  patient?.firstName,
                  patient?.middleName,
                  patient?.lastName,
                ].join(' ')}
              </Typography>
              {renderKeyValue(
                'Age',
                patient?.dateOfBirth ? getAgeFromDate(patient?.dateOfBirth) : ''
              )}
              {renderKeyValue('Phone', patient?.primaryPhoneNumber)}
            </div>
            <div>
              <Typography className="key-name">
                #{patient?.accountNo}
              </Typography>
              {renderKeyValue('Gender', patient?.gender)}
            </div>
            <div>
              {renderKeyValue(
                'Next Appointments',
                '02/12/2022 02:10 PM At 06 PM'
              )}
              {renderKeyValue(
                'Next Appointments',
                '02/12/2022 02:10 PM At 06 PM'
              )}
            </div>
          </div>
          <Button
            type="default"
            className="view-button"
            onClick={() => setShowMoreDetails((prev: boolean) => !prev)}
          >
            {!showMoreDetails ? (
              <Typography className="view-btn">
                View More
                <BsChevronDoubleDown />
              </Typography>
            ) : (
              <Typography className="view-btn">
                View Less
                <BsChevronDoubleUp />
              </Typography>
            )}
          </Button>
        </div>
      </ShadowedCard>
      {!showMoreDetails && activeTab === 'vitals' ? <VitalsPage /> : null}
      {!showMoreDetails && activeTab === 'allergies' ? (
        <Allergies />
      ) : null}{' '}
      {!showMoreDetails && activeTab === 'meds' ? <Meds /> : null}{' '}
      {!showMoreDetails && activeTab === 'visits' ? <Visits /> : null}{' '}
      {!showMoreDetails && activeTab === 'vaccines' ? <VaccinesPage /> : null}{' '}
      {!showMoreDetails && activeTab === 'labs' ? <LabsPage /> : null}{' '}
      {!showMoreDetails && activeTab === 'history' ? <HistoryPage /> : null}{' '}
      {showMoreDetails ? (
        <div className="more-details">
          <ShadowedCard className="additional-info-card">
            <Typography className="info-card-title">
              Additional Information
            </Typography>
            <div className="col-wrapper">
              <div className="col-1">
                {renderSeparatedKeyValue('SSN', patient?.ssn)}
                {renderSeparatedKeyValue(
                  'preferred Name',
                  patient?.preferredName
                )}
                {renderSeparatedKeyValue('Language', patient?.language)}
                {renderSeparatedKeyValue(
                  'Marital Status',
                  patient?.maritalStatus
                )}
                {renderSeparatedKeyValue('EMP Status', patient?.empStatus)}
                {renderSeparatedKeyValue(
                  'secondary phone',
                  patient?.primaryPhoneNumber
                )}
                {renderSeparatedKeyValue('Email id', patient?.email)}
                {renderSeparatedKeyValue('Address', patient?.addressLine1)}
                {renderSeparatedKeyValue('', patient?.addressLine2)}
                {renderSeparatedKeyValue('City', patient?.city)}
                {renderSeparatedKeyValue('County', patient?.county)}
                {renderSeparatedKeyValue('Zip code', patient?.zip)}
              </div>
              <div className="col-2">
                {patient?.emergencyContacts?.map((emergencyContact, i) => {
                  if (i === 0)
                    return renderSeparatedKeyValue(
                      'Emergency Contact\n',
                      `${i + 1} ${renderEmergenContact(emergencyContact)}`
                    );
                  return renderSeparatedKeyValue(
                    '',
                    `${i + 1} ${renderEmergenContact(emergencyContact)}`
                  );
                })}
                {renderSeparatedKeyValue('PCP', patient?.pcp)}
                {renderSeparatedKeyValue('PCG', patient?.pcg)}
                {renderSeparatedKeyValue('Referring Provider', '')}
                {renderSeparatedKeyValue('Responsible party', '')}
                {renderSeparatedKeyValue('Relation', '')}
                {renderSeparatedKeyValue(
                  'Release of Info',
                  patient?.releaseOfInfo
                )}
                {renderSeparatedKeyValue(
                  'Pres History Con',
                  patient?.prescriptionHistoryConsent
                )}
              </div>
            </div>
          </ShadowedCard>
          <div className="other-info-card">
            <div className="col-wrapper">
              <div className="col-1">
                <ShadowedCard className="billing-details">
                  <Typography className="info-card-title">
                    Billing Details
                  </Typography>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <AiFillDollarCircle className="dollar-icon" />
                    <div className="items">
                      <div className="row">
                        <p className="bold-key">20.00</p>
                        <BiEdit className="edit-icon" />
                      </div>
                      <div className="row">
                        <p className="">Co- pay</p>
                        <p className="">$ 5.00</p>
                      </div>
                      <div className="row">
                        <p className="">insurance</p>
                        <p className="">$ 15.00</p>
                      </div>
                      <div className="row">
                        <p className="bold-key">Total</p>
                        <p className="bold-key">$ 20.00</p>
                      </div>
                      <div className="row">
                        <p className="bold-key">outstanding balance</p>
                        <p className="bold-key">$ 20.00</p>
                      </div>
                    </div>
                  </div>
                  <Button type="default" className="statement-btn">
                    Statement
                  </Button>
                </ShadowedCard>
                <ShadowedCard className="appointment-booking">
                  <Typography className="info-card-title">
                    Appointment Booking
                  </Typography>
                  {renderSeparatedKeyValue(
                    'Upcoming appt',
                    '02/12/2022 02:10 PM at 06 PM'
                  )}
                  {renderSeparatedKeyValue(
                    'Location',
                    '721 cardiologic clinic city, texas, USA'
                  )}
                  {renderSeparatedKeyValue('Provider', 'Dr. Name')}
                  <TextArea
                    placeholder="additional notes"
                    className="text-area"
                  />
                  <div className="footer-btns-wrapper">
                    <div className="footer-btns">
                      <Button type="default" className="book-btn">
                        <BsCalendarDate /> Book Now
                      </Button>
                      <Button type="default" className="book-btn">
                        <MdManageSearch /> History
                      </Button>
                    </div>
                  </div>
                </ShadowedCard>
              </div>
              <div className="col-2">
                <ShadowedCard className="padded-card">
                  <div className="title-row">
                    <Typography className="info-card-title">
                      Insurance Details
                    </Typography>
                    <ShadowedCard className="icon-card">
                      <BiEdit className="edit-icon" />
                    </ShadowedCard>
                  </div>
                  {renderKeyValue('Primary', 'Insurance Primary data here')}
                  {renderKeyValue('Secondary', 'Insurance Secondary data here')}
                </ShadowedCard>
                <ShadowedCard className="padded-card">
                  <div className="title-row">
                    <Typography className="info-card-title">
                      Pharmacies: Details
                    </Typography>
                    <ShadowedCard className="icon-card">
                      <BiEdit className="edit-icon" />
                    </ShadowedCard>
                  </div>
                  {renderKeyValue('Primary', 'Precipitation Primary data here')}
                  {renderKeyValue(
                    'Secondary',
                    'Precipitation Secondary data here'
                  )}
                </ShadowedCard>
                <ShadowedCard className="padded-card">
                  <div className="title-row">
                    <Typography className="info-card-title">
                      Attorney Details
                    </Typography>
                    <ShadowedCard className="icon-card">
                      <BiEdit className="edit-icon" />
                    </ShadowedCard>
                  </div>
                  {renderKeyValue('Primary', 'Attorney Primary data here')}
                  {renderKeyValue('Secondary', 'Attorney Secondary data here')}
                </ShadowedCard>
                <ShadowedCard className="padded-card">
                  <div className="title-row">
                    <Typography className="info-card-title">
                      Additional Notes
                    </Typography>
                    <ShadowedCard className="icon-card">
                      <BiEdit className="edit-icon" />
                    </ShadowedCard>
                  </div>
                  <TextArea
                    placeholder="Additional Notes"
                    className="text-area"
                    rows={5}
                  />
                </ShadowedCard>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ViewPatientBodyWrapper>
  );
};
