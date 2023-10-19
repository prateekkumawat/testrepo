import { Button, notification, Tabs } from 'antd';
import React, { FC, ReactNode, useState } from 'react';
import { ProviderScreen1, ProviderScreen2 } from '../types';
import { ProviderService } from '../../../Service/Provider';
import { CreateProviderAdditionalInfo } from './CreateProviderAdditionalInfo/CreateProviderAdditionalInfo';
import { CreateProviderBasicInfo } from './CreateProviderBasicInfo/CreateProviderBasicInfo';
import { SubmitScreen2 } from '../../../Component/SubmitScreen2/SubmitScreen2';
import { BtnTabsWrapper, CreateProviderWrapper } from './CreateProvider.styled';
import { toPascalCase } from '../../../utility';

enum ProviderSteps {
  BASIC_INFO = 'BASIC_INFO',
  ADDITIONAL_INFO = 'ADDITIONAL_INFO',
  SUBMIT = 'SUBMIT',
}
export const CreateProvider: FC = () => {
  const [currentStep, setCurrentStep] = useState<ProviderSteps>(
    ProviderSteps.BASIC_INFO
  );
  const [initialSteps, setInitialSteps] = useState<{
    [ProviderSteps.BASIC_INFO]: ProviderScreen1 | null;
    [ProviderSteps.ADDITIONAL_INFO]: ProviderScreen2 | null;
  }>({
    [ProviderSteps.BASIC_INFO]: null,
    [ProviderSteps.ADDITIONAL_INFO]: null,
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [createdProvider, setCreatedProvider] = useState<string>('');

  const patientService = ProviderService();

  const goNext = (data: ProviderScreen1) => {
    setInitialSteps((prev) => ({
      ...prev,
      [ProviderSteps.BASIC_INFO]: data,
    }));
    setCurrentStep(ProviderSteps.ADDITIONAL_INFO);
  };

  const createProvider = async (screen2Data: ProviderScreen2) => {
    try {
      setLoader(true);
      setInitialSteps((prev) => ({
        ...prev,
        [ProviderSteps.ADDITIONAL_INFO]: screen2Data,
      }));
      const payload = {
        ...initialSteps[ProviderSteps.BASIC_INFO],
        ...screen2Data,
      };
      const data = await patientService.postProvider(payload);
      setCreatedProvider(data);
      notification.success({
        message: 'Provider created Successfully',
      });
      setInitialSteps({
        ADDITIONAL_INFO: null,
        BASIC_INFO: null,
      });
      setLoader(false);
      setCurrentStep(ProviderSteps.SUBMIT);
    } catch (err: any) {
      // console.log('err', { response: err.response, err });
      setLoader(false);
      notification.error({
        message: err?.response?.data || 'Error occured while creating provider',
      });
    }
  };

  const goBack = (data: ProviderScreen2) => {
    setInitialSteps((prev) => ({
      ...prev,
      [ProviderSteps.ADDITIONAL_INFO]: data,
    }));
    setCurrentStep(ProviderSteps.BASIC_INFO);
  };
  const render = (rederTabs: () => ReactNode) => {
    switch (currentStep) {
      case ProviderSteps.BASIC_INFO:
        return (
          <CreateProviderBasicInfo
            rederTabs={rederTabs}
            goNext={goNext}
            initialSteps={initialSteps[ProviderSteps.BASIC_INFO]}
          />
        );
      case ProviderSteps.ADDITIONAL_INFO:
        return (
          <CreateProviderAdditionalInfo
            rederTabs={rederTabs}
            submitButtonLoading={loader}
            goNext={createProvider}
            goBack={goBack}
            initialSteps={initialSteps[ProviderSteps.ADDITIONAL_INFO]}
          />
        );
      case ProviderSteps.SUBMIT:
        return (
          <SubmitScreen2
            infoMsg1="Provider has been added to your system"
            infoMsg2={`Provider has been registered with account number ${createdProvider}`}
            addButton={{
              text: 'Add Provider',
              onClick: () => {
                setCurrentStep(ProviderSteps.BASIC_INFO);
              },
            }}
          />
        );
      default:
        return null;
    }
  };

  const rederTabs = () => (
    <BtnTabsWrapper className="btn-tabs-wrapper">
      <Tabs
        defaultActiveKey={currentStep}
        // onTabClick={(val) => setCurrentStep(val as ProviderSteps)}
        items={[ProviderSteps.BASIC_INFO, ProviderSteps.ADDITIONAL_INFO].map(
          (val) => {
            return {
              label: (
                <span>
                  {toPascalCase(val.toLowerCase()).split('_').join(' ')}
                </span>
              ),
              key: val,
            };
          }
        )}
      />
    </BtnTabsWrapper>
  );

  return <CreateProviderWrapper>{render(rederTabs)}</CreateProviderWrapper>;
};
