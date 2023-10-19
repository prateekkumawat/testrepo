import React, { FC } from 'react';
import { AddVarPopupWrapper } from './AddVarPopup.styled';
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { ShadowedCard } from '../../../Component/Card/Card';
import { SOAPVariable } from '../types';
import { Variables } from '../VariableComponent/Variables/Variables';

export interface AddVarPopupProps {
  className?: string;
  handleSubmit: (values: any) => void;
  soapVariables: SOAPVariable[];
}

export const AddVarPopup: FC<AddVarPopupProps> = ({
  className,
  handleSubmit,
  soapVariables,
}) => {
  return (
    <AddVarPopupWrapper className={className}>
      <Input
        prefix={<AiOutlineSearch className="icon" />}
        type="search"
        className="title-search"
        placeholder="Search here"
      />
      <ShadowedCard className="content">
      <div className="container-body">
          {soapVariables?.map((v: SOAPVariable, index: number) => (
            <>
              <p />
              <Variables
                key={v.name}
                {...v}
                showAdd
                showRemove
              />
            </>
          ))}
        </div>
      </ShadowedCard>
    </AddVarPopupWrapper>
  );
};
