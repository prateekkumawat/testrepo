import React, { FC, useEffect, useState } from 'react';
import { Spin, notification } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { VisitsBodyWrapper } from './VisitsWrapper.styled';
import { StyledFormItem, StyledSimpleSelect } from '../../Component/Form/Form';
import { PatientService } from '../../Service/Patient';
import { temp, Visit } from './type';

export const VisitBodyRow: FC<{
  visits: Visit;
}> = ({ visits }) => {
  return (
    <div className="visit-row">
      <div className="row-detail">
        <div className="first-line">
          <div>{visits.reasonOfVisit}</div>
          <div className="visit-date">
            {moment(visits.scheduleDate).format('DD MMM YYYY')}
          </div>
        </div>
        <div className="second-line">
          <div>
            {[visits.providerName, visits.speciality]
              ?.map((e) => e.trim())
              ?.filter(Boolean)
              ?.join(', ')}
          </div>
        </div>
      </div>
      <div
        className={`row-status ${visits.currentStatusOfVisit?.toLowerCase()}`}
      >
        {visits.currentStatusOfVisit.toLowerCase() === 'completed' ? (
          <img
            src="/completed.png"
            alt="Completed"
            style={{ height: '20px' }}
          />
        ) : null}
        <div
          className={`visits-body-tag ${visits.currentStatusOfVisit.toLowerCase()}`}
        >
          {visits.currentStatusOfVisit}
        </div>
      </div>
    </div>
  );
};

export const VisitsBody: React.FC = () => {
  const [arrangedBy, setArrangedBy] = useState<string>();
  const [loader, setLoader] = useState<boolean>(false);
  const [visits, setVisits] = useState<Visit[]>([]);
  const { patientId } = useParams();
  const patientService = PatientService();

  const getVisits = async () => {
    let methodOfService = 'getVisitByDate';
    if (arrangedBy === 'Speciality') methodOfService = 'getVisitBySpeciality';
    if (arrangedBy === 'Date') methodOfService = 'getVisitByDate';
    // console.log('arrangedBy', arrangedBy);
    try {
      setLoader(true);
      const data = await patientService?.[
        methodOfService as keyof typeof patientService
      ]?.(patientId);
      if (data) setVisits(data);
    } catch (err: any) {
      notification.error({
        message: err.response || 'Error occured while fetching visits ',
      });
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getVisits();
  }, [arrangedBy]);

  return (
    <VisitsBodyWrapper>
      <div className="visit-body-heading">
        <StyledFormItem
          label="Arranged By"
          name="arrangedBy"
          className="form-items"
          initialValue={arrangedBy}
        >
          <StyledSimpleSelect
            options={[
              { value: 'Speciality', label: 'Speciality' },
              { value: 'Date', label: 'Date' },
            ]}
            onChange={(value: any) => setArrangedBy(value)}
            className="arrange-by-dropdown"
            placeholder="Speciality"
          />
        </StyledFormItem>
      </div>

      {loader ? (
        <Spin className="get-visits-loader" />
      ) : (
        <div className="visits-body-content">
          {visits?.map((visit, index) => (
            <VisitBodyRow key={index} visits={visit} />
          ))}
        </div>
      )}
    </VisitsBodyWrapper>
  );
};
