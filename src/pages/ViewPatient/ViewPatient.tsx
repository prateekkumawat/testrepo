import { notification, Row, Spin } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PatientService } from '../../Service/Patient';
import { GetPatient } from '../CreatePatient/Types';
import { SideBar } from './SideBar/SideBar';
import { ViewPatientBody } from './ViewPatientBody/ViewPatientBody';
import { ViewPatientWrapper } from './ViewPatient.Styled';

export const ViewPatient: FC = () => {
  const { patientId } = useParams();
  const [patient, setPatient] = useState<Partial<GetPatient>>();
  const [loading, setLoading] = useState<boolean>(true);
  // 'vitals' | 'allergies' | 'meds' | 'visits' | 'vaccines' | 'labs' | 'history' | 'referrals'
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const patientService = PatientService();

  useEffect(() => {
    const getPAtientDetails = async () => {
      try {
        const data = await patientService.getPatientById(patientId!);
        setPatient(data);
      } catch (err) {
        notification.error({
          message: 'Error occurred while fetching patient',
        });
      } finally {
        setLoading(false);
      }
    };
    getPAtientDetails();
  }, [patientId]);

  return (
    <ViewPatientWrapper className="view-patient-wrapper">
      {loading ? (
        <Spin className="loader" size="large" />
      ) : (
        <>
          <SideBar
            patient={patient}
            patientId={patientId}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ViewPatientBody patient={patient} activeTab={activeTab} />
        </>
      )}
    </ViewPatientWrapper>
  );
};
