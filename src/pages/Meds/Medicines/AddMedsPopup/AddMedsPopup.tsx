import { notification } from 'antd';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { PatientService } from '../../../../Service/Patient';
import { AllergiesTab, Meds } from '../../types';
import { AddMedsScreen1 } from './AddMedsScreen1';

export interface AddMedsPopupProps {
  drugName: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  activeTab: string;
  selectedMeds: Meds | null;
}
export const AddMedsPopup: FC<AddMedsPopupProps> = ({
  setModalOpen,
  selectedMeds,
  drugName,
  activeTab,
}) => {
  const [activeStep, setActiveStep] = useState<string>('add');
  const [savedPrescription, setSavedPrescription] = useState<Meds | null>(
    selectedMeds
  );
  const [loader, setLoader] = useState<boolean>(false);
  const patientService = PatientService();

  const handleSubmit = async () => {
    try {
      setLoader(true);
      await patientService.addPrescription({
        ...savedPrescription,
        supplementsFlag: activeTab === AllergiesTab.Supplements,
      });
      setLoader(false);
      notification.success({
        message: 'Saved Successfully',
      });
      setModalOpen(false);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err.response || 'Error occured while fetching visits ',
      });
    }
  };

  useEffect(() => {
    setSavedPrescription(selectedMeds);
  }, [selectedMeds]);

  return (
    <AddMedsScreen1
      drugId=""
      drugName={drugName}
      handleSubmit={handleSubmit}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      submitBtnLoader={loader}
      onCancel={() => setModalOpen(false)}
      handleERx={(values: Meds) => {
        setActiveStep('submit');
        setSavedPrescription(values);
      }}
      onSave={(val: Meds) => setSavedPrescription(val)}
      savedPrescription={savedPrescription}
    />
  );
};
