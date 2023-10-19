import { notification, Typography } from 'antd';
import React, { FC, useState } from 'react';
import moment from 'moment';
import { ShadowedCard } from '../../Component/Card/Card';
import { PatientService } from '../../Service/Patient';
import { Navigation } from '../Layout/Navigation/Navigation';
import { PatientAdditionalInfo } from './PatientAdditionalInfo/PatientAdditionalInfo';
import { PatientPersonalInfo } from './PatientPersonalInfo/PatientPersonalInfo';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { CreatePatientScreen1, CreatePatientScreen2 } from './Types';
import { SubmitScreen } from '../../Component/SubmitScreen/SubmitScreen';
import { CreatePatientWrapper } from './CreatePatient.styled';

enum PatientSteps {
  BASIC_INFO = 'BASIC_INFO',
  ADDITIONAL_INFO = 'ADDITIONAL_INFO',
  SUBMIT = 'SUBMIT',
}
export const CreatePatient: FC = () => {
  const [currentStep, setCurrentStep] = useState<PatientSteps>(
    PatientSteps.BASIC_INFO
  );
  const [initialSteps, setInitialSteps] = useState<{
    [PatientSteps.BASIC_INFO]: CreatePatientScreen1 | null;
    [PatientSteps.ADDITIONAL_INFO]: CreatePatientScreen2 | null;
  }>({
    [PatientSteps.BASIC_INFO]: null,
    [PatientSteps.ADDITIONAL_INFO]: null,
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [createdPatient, setCreatedPatient] = useState<string>('');

  const patientService = PatientService();

  const goNext = (data: CreatePatientScreen1) => {
    setInitialSteps((prev) => ({
      ...prev,
      [PatientSteps.BASIC_INFO]: data,
    }));
    setCurrentStep(PatientSteps.ADDITIONAL_INFO);
  };

  const createPatient = async (screen2Data: CreatePatientScreen2) => {
    try {
      setLoader(false);
      setInitialSteps((prev) => ({
        ...prev,
        [PatientSteps.ADDITIONAL_INFO]: screen2Data,
      }));
      const payload = {
        ...initialSteps[PatientSteps.BASIC_INFO],
        ...screen2Data,
      };
      payload.dateOfBirth = moment(payload.dateOfBirth).format('yyyy-MM-DD');
      const data = await patientService.postPatient(payload);
      setCreatedPatient(data);
      notification.success({
        message: 'Patient created Successfully',
      });
      setInitialSteps({
        ADDITIONAL_INFO: null,
        BASIC_INFO: null,
      });
      setLoader(false);
      setCurrentStep(PatientSteps.SUBMIT);
    } catch (err) {
      setLoader(false);
      console.log('err', err);
      notification.error({
        message: 'Error occured while creating patient',
      });
    }
  };

  const goBack = (data: CreatePatientScreen2) => {
    setInitialSteps((prev) => ({
      ...prev,
      [PatientSteps.ADDITIONAL_INFO]: data,
    }));
    setCurrentStep(PatientSteps.BASIC_INFO);
  };
  const render = () => {
    switch (currentStep) {
      case PatientSteps.BASIC_INFO:
        return (
          <PatientPersonalInfo
            goNext={goNext}
            initialSteps={initialSteps[PatientSteps.BASIC_INFO]}
          />
        );
      case PatientSteps.ADDITIONAL_INFO:
        return (
          <PatientAdditionalInfo
            submitButtonLoading={loader}
            goNext={createPatient}
            goBack={goBack}
            initialSteps={initialSteps[PatientSteps.ADDITIONAL_INFO]}
          />
        );
      case PatientSteps.SUBMIT:
        return (
          <SubmitScreen
            infoMsg1="Patient has been added to your system"
            infoMsg2={`Patient has been registered with account number ${createdPatient}`}
            addButton={{
              text: 'Add Patient',
              onClick: () => {
                setCurrentStep(PatientSteps.BASIC_INFO);
              },
            }}
          />
        );
      default:
        return null;
    }
  };

  const steps = [
    {
      title: '',
      description: 'Basic Information',
      key: PatientSteps.BASIC_INFO,
    },
    {
      title: '',
      description: 'Additional Information',
      key: PatientSteps.ADDITIONAL_INFO,
    },
    {
      title: '',
      description: 'Submit',
      key: PatientSteps.SUBMIT,
    },
  ];

  return (
    <>
      <div className="component-header">
        <p className="title lg">Patient Details</p>
      </div>

      <div className="mb-4">
        <Navigation />
      </div>

      <div className="card bg-gray-100 mb-4">
        <div className="card-body py-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ProgressBar
                currentStep={
                  steps
                    .map((s, i) => {
                      if (s.key === currentStep) return i + 1;
                      return 0;
                    })
                    .filter(Boolean)[0] - 1
                }
                steps={steps}
              />
            </div>
          </div>
        </div>
      </div>

      {render()}
    </>
  );
};
