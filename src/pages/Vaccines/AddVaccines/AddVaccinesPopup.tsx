import { Button, Form, notification } from 'antd';
import React, {
  Dispatch,
  useEffect,
  FC,
  SetStateAction,
  useState,
} from 'react';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { AddVaccineFormWrapper } from './AddVaccineForm.styled';
import { IVaccine, Vaccines, VaccinesForm, VaccinesFormType } from '../types';
import {
  StyledFormItem,
  StyledRadioButton,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { Historical } from '../Historical/Historical';
import { Administered } from '../Administered/Administered';
import { Refused } from '../Refused/Refused';
import { PatientService } from '../../../Service/Patient';
import { getTime } from '../../../utility';

export interface AddVaccinePopupProps {
  className?: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  selectedVaccine: Vaccines | null;
}
export const AddVaccinesPopup: FC<AddVaccinePopupProps> = ({
  className,
  setModalOpen,
  selectedVaccine,
}) => {
  const [activeStep, setActiveStep] = useState<string>('add');
  const [saveAdminidtered, setSavedAdminidtered] =
    useState<VaccinesFormType | null>(selectedVaccine);
  const [loader, setLoader] = useState<boolean>(false);
  const [vaccinesData, setVaccinesData] = useState<IVaccine[]>([]);

  useEffect(() => {
    setSavedAdminidtered(selectedVaccine);
  }, [selectedVaccine]);

  const [activeTab, setActiveTab] = useState<VaccinesForm>(
    VaccinesForm.Administered
  );
  const { patientId } = useParams();
  const initialValues: VaccinesFormType = saveAdminidtered ?? {
    patientId: patientId!,
    vaccineName: '',
    orderedBy: '',
    route: '',
    site: '',
    dose: '',
    units: '',
    vaccineNumber: '',
    totalVaccines: '',
    successFlag: true,
    vfcClass: '',
    funding: '',
    // screen2
    administeredBy: '',
    administeredDate: '',
    // facility: '',  facility is common
    source: '',
    // screen 3
    refusalReason: '',
    visProvided: true,
    facility: '',
    refusalNote: '',
    administeredTime: '',
    cvx: '',
    ndc: '',
    vaccinationId: '',
    vaccineInfo: '',
    vaccineInfoFlag: 'Administered',
    // extrafields
    isTodayFlag: false,
    time: '',
    timeHr: 0,
    timeMin: 0,
    timeSec: 0,
    isNowFlag: false,
  };

  const patientService = PatientService();

  const handleSubmit = async (values: VaccinesFormType) => {
    try {
      setLoader(true);
      const selectedVaccine = vaccinesData?.find(
        (vac) => vac?.id?.toString() === values?.vaccinationId?.toString()
      );
      const payload = {
        ...values,
        administeredTime: values?.isNowFlag
          ? getTime()
          : [values.timeHr, values.timeMin, values.timeSec]
              ?.map((e) => `${e}`?.trim()?.padStart(2, '0'))
              ?.filter(Boolean)
              ?.join(':'),
        administeredDate: values?.isTodayFlag
          ? moment(new Date()).format('YYYY-MM-DD')
          : values.administeredDate,
        vaccineInfo: selectedVaccine?.vaccineStatus,
        vaccinationId: saveAdminidtered ? selectedVaccine?.id : undefined,
        ndc: selectedVaccine?.ndc,
        cvx: selectedVaccine?.cvxCodes,
        vaccineName: selectedVaccine?.vaccineName,

        isTodayFlag: undefined,
        isNowFlag: undefined,
        timeHr: undefined,
        timeMin: undefined,
        timeSec: undefined,
        time: undefined,
      };

      await patientService.addVaccines(payload);
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
  const getAllVaccines = async () => {
    try {
      const data = await patientService.getAllVaccines();
      setVaccinesData(data);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err.response || 'Error occured while fetching visits ',
      });
    }
  };

  useEffect(() => {
    getAllVaccines();
  }, []);

  return (
    <AddVaccineFormWrapper className={className}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formikProps) => (
          <Form onFinish={formikProps?.handleSubmit}>
            <>
              <div>
                <div className="add-vaccine-top-bar">
                  <StyledFormItem
                    className="add-vaccine-labels"
                    initialValue={formikProps.values.vaccinationId}
                    style={{ width: '50%' }}
                  >
                    <StyledSimpleSelect
                      showSearch
                      options={vaccinesData
                        ?.filter((e) => e.vaccineStatus === 'Active')
                        ?.map((e: IVaccine) => ({
                          value: e.id,
                          label: e.vaccineName,
                        }))}
                      className="add-vaccine-input-box"
                      value={formikProps.values.vaccinationId}
                      status={formikProps.errors.vaccinationId ? 'error' : ''}
                      onChange={(value) =>
                        formikProps.setFieldValue('vaccinationId', value)
                      }
                      onBlur={formikProps.handleBlur}
                    />
                  </StyledFormItem>
                  <div className="checkbox-row">
                    <StyledFormItem
                      className="add-vaccine-labels"
                      initialValue={
                        formikProps.values.vaccineInfoFlag === 'Administered'
                      }
                      style={{ width: '33%' }}
                    >
                      <StyledRadioButton
                        className="circular-checkbox"
                        checked={
                          formikProps.values.vaccineInfoFlag === 'Administered'
                        }
                        onChange={() =>
                          formikProps.setFieldValue(
                            'vaccineInfoFlag',
                            'Administered'
                          )
                        }
                      />
                      <span
                        className="checkbox-label"
                        onClick={() => setActiveTab(VaccinesForm.Administered)}
                      >
                        Administered
                      </span>
                    </StyledFormItem>
                    <StyledFormItem
                      className="add-vaccine-labels"
                      initialValue={
                        formikProps.values.vaccineInfoFlag === 'Historical'
                      }
                      style={{ width: '27%' }}
                    >
                      <StyledRadioButton
                        className="circular-check-box"
                        checked={
                          formikProps.values.vaccineInfoFlag === 'Historical'
                        }
                        onChange={() =>
                          formikProps.setFieldValue(
                            'vaccineInfoFlag',
                            'Historical'
                          )
                        }
                      />
                      <span
                        className="checkbox-label"
                        onClick={() => setActiveTab(VaccinesForm.Historical)}
                      >
                        Historical
                      </span>
                    </StyledFormItem>
                    <StyledFormItem
                      className="add-vaccine-labels"
                      initialValue={
                        formikProps.values.vaccineInfoFlag === 'Refused'
                      }
                      style={{ width: '25%' }}
                    >
                      <StyledRadioButton
                        checked={
                          formikProps.values.vaccineInfoFlag === 'Refused'
                        }
                        className="circular-check-box"
                        onChange={() =>
                          formikProps.setFieldValue(
                            'vaccineInfoFlag',
                            'Refused'
                          )
                        }
                      />
                      <span
                        className="checkbox-label"
                        onClick={() => setActiveTab(VaccinesForm.Refused)}
                      >
                        Refused
                      </span>
                    </StyledFormItem>
                  </div>
                </div>
                {activeTab === VaccinesForm.Administered ? (
                  <Administered formikProps={formikProps} />
                ) : null}
                {activeTab === VaccinesForm.Historical ? (
                  <Historical formikProps={formikProps} />
                ) : null}
                {activeTab === VaccinesForm.Refused ? (
                  <Refused formikProps={formikProps} />
                ) : null}
              </div>
              <div className="bttn-container">
                <Button
                  className="bttns-cancel"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="bttns-save"
                  loading={loader}
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
            </>
          </Form>
        )}
      </Formik>
    </AddVaccineFormWrapper>
  );
};
