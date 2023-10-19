import React, { FC } from 'react';
import { Steps as S, StepsProps as SP, StepProps } from 'antd';
import { CustomSteps } from './Steps.styled';

const customDot: SP['progressDot'] = (
  dot,
  { index }
) => {
  const i = index + 1;
  return (
    <div className="custom-ant-steps-item-icon">
      <span className="ant-steps-icon">{i}</span>
    </div>
  );
};

export interface IStepProp {
  steps?: StepProps[];
  current: number;
}
export const Steps: FC<IStepProp> = ({ steps, current }) => {
  return (
    <CustomSteps>
      <S
        progressDot={(_prop, data) => {
          return customDot('', data);
        }}
        items={steps}
        current={current}
      />
    </CustomSteps>
  );
};
