import { StepProps } from 'antd';
import React, { FC } from 'react';
import { Steps } from '../../../Component/Steps/Steps';
import { ProgressBarWrapper } from './ProgressBar.styled';

export interface ProgressBarProps {
  currentStep: number;
  steps: StepProps[];
}
export const ProgressBar: FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <ProgressBarWrapper>
      <Steps steps={steps} current={currentStep} />
    </ProgressBarWrapper>
  );
};
