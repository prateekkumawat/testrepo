import { Button, Form, notification } from 'antd';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Injection, InjectionsForm, IVaccine } from '../types';
import {
  StyledCheckBox,
  StyledFormItem,
  StyledRadioButton,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { PatientService } from '../../../Service/Patient';
import { AddInjectionFormWrapper } from './AddInjectionsForm.styled';
import { InjectionAdministered } from './Administered/InjectionAdministered';
import { getTime } from '../../../utility';

export interface AddInjectionPopupProps {
  className?: '';
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
export const AddInjectionsPopup: FC<AddInjectionPopupProps> = ({
  className,
  setModalOpen,
}) => {
  //   const [activeStep, setActiveStep] = useState<''>('add');
  const [saveAdminidtered, setSavedAdminidtered] = useState<Injection | null>(
    null
  );
  const [loader, setLoader] = useState<boolean>(false);
  const [InjectionData, setInjectionData] = useState<IVaccine[]>([]);

  const [activeTab, setActiveTab] = useState<InjectionsForm>(
    InjectionsForm.Administered
  );
  const { patientId } = useParams();

  const initialValues: Injection = saveAdminidtered ?? {
    injectionName: '',
    patientId: Number(patientId)!,
    orderedBy: '',
    administeredBy: '',
    time: '',
    administeredOn: '',
    expirationDate: '',
    location: '',
    route: '',
    site: '',
    dose: '',
    doseUnits: '',
    frequency: '',
    duration: '',
    durationUnits: '',
    notes: '',
    injectionInfoFlag: '',
    isTodayFlag: false,
    isNowFlag: false,
    timeHr: 0,
    timeMin: 0,
    timeSec: 0,
  };

  const patientService = PatientService();

  const handleSubmit = async (values: Injection) => {
    try {
      setLoader(true);
      const payload = {
        ...values,
        time: values?.isNowFlag
          ? getTime()
          : [values.timeHr, values.timeMin, values.timeSec]
              ?.map((e) => `${e}`?.trim()?.padStart(2, '0'))
              ?.filter(Boolean)
              ?.join(':'),
        administeredOn: values?.isTodayFlag
          ? moment(new Date()).format('YYYY-MM-DD')
          : values.administeredOn,
        isTodayFlag: undefined,
        isNowFlag: undefined,
        timeHr: undefined,
        timeMin: undefined,
        timeSec: undefined,
      };
      await patientService.addInjection(payload);
      setLoader(false);
      notification.success({
        message: 'Saved Successfully',
      });
      setModalOpen(false);
      setLoader(false);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err.response || 'Error occured while saving injection details',
      });
    }
  };
  const getAllVaccines = async () => {
    try {
      const data = await patientService.getAllInjections();
      setInjectionData(data);
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
    <AddInjectionFormWrapper className={className}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values) => {
          console.log('values', values);
          handleSubmit(values);
        }}
      >
        {(formikProps) => (
          <Form onFinish={formikProps?.handleSubmit}>
            <>
              <div>
                <div className="add-injection-top-bar">
                  <StyledFormItem
                    className="add-injection-labels"
                    name="Injection Name"
                    validateStatus={
                      formikProps.errors.injectionName ? 'error' : ''
                    }
                    help={formikProps.errors.injectionName}
                    initialValue={formikProps.values.injectionName}
                    style={{ width: '50%' }}
                  >
                    <StyledSimpleSelect
                      showSearch
                      options={InjectionData?.map((e: any) => ({
                        value: e.injectionName,
                        label: e.injectionName,
                      }))}
                      className="add-injection-input-box"
                      //   disabled={activeStep !== 'add'}
                      value={formikProps.values.injectionName}
                      status={formikProps.errors.injectionName ? 'error' : ''}
                      onChange={(value) =>
                        formikProps.setFieldValue('injectionName', value)
                      }
                      onBlur={formikProps.handleBlur}
                    />
                  </StyledFormItem>
                  <div className="checkbox-row">
                    <StyledFormItem
                      className="add-vaccine-labels"
                      initialValue={
                        formikProps.values.injectionInfoFlag === 'Administered'
                      }
                      style={{ width: '33%' }}
                    >
                      <StyledRadioButton
                        className="circular-checkbox"
                        checked={
                          formikProps.values.injectionInfoFlag ===
                          'Administered'
                        }
                        onChange={() =>
                          formikProps.setFieldValue(
                            'injectionInfoFlag',
                            'Administered'
                          )
                        }
                      />
                      <span
                        className="checkbox-label"
                        onClick={() =>
                          setActiveTab(InjectionsForm.Administered)
                        }
                      >
                        Administered
                      </span>
                    </StyledFormItem>
                    <StyledFormItem
                      className="add-vaccine-labels"
                      initialValue={
                        formikProps.values.injectionInfoFlag === 'Historical'
                      }
                      style={{ width: '27%' }}
                    >
                      <StyledRadioButton
                        className="circular-check-box"
                        checked={
                          formikProps.values.injectionInfoFlag === 'Historical'
                        }
                        onChange={() =>
                          formikProps.setFieldValue(
                            'injectionInfoFlag',
                            'Historical'
                          )
                        }
                      />
                      <span
                        className="checkbox-label"
                        onClick={() => setActiveTab(InjectionsForm.Historical)}
                      >
                        Historical
                      </span>
                    </StyledFormItem>
                    <StyledFormItem
                      className="add-vaccine-labels"
                      initialValue={
                        formikProps.values.injectionInfoFlag === 'Refused'
                      }
                      style={{ width: '25%' }}
                    >
                      <StyledRadioButton
                        checked={
                          formikProps.values.injectionInfoFlag === 'Refused'
                        }
                        className="circular-check-box"
                        onChange={() =>
                          formikProps.setFieldValue(
                            'injectionInfoFlag',
                            'Refused'
                          )
                        }
                      />
                      <span
                        className="checkbox-label"
                        onClick={() => setActiveTab(InjectionsForm.Refused)}
                      >
                        Refused
                      </span>
                    </StyledFormItem>
                  </div>
                </div>
                {activeTab === InjectionsForm.Administered ? (
                  <InjectionAdministered formikProps={formikProps} />
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
    </AddInjectionFormWrapper>
  );
};
