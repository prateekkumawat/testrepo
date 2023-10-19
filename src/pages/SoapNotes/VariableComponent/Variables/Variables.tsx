import React, { FC } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CustomNode } from '../../../../Types/Types';
import { SOAPVariable } from '../../types';
import { VariableWrapper } from './Variables.styled';

export const Variables: FC<
  SOAPVariable & {
    onAdd?: (templaet?: CustomNode[]) => void;
    showAdd: boolean;
    showRemove: boolean;
    onRemove?: () => void;
  }
> = ({ name, template, onAdd, onRemove, showAdd, showRemove }) => {
  return (
    <VariableWrapper>
      {name}
      {showAdd ? (
        <span className="add chip-hover-btn" onClick={() => onAdd?.(template)}>
          <AiOutlinePlus />
        </span>
      ) : null}
      {showRemove ? (
        <span className="remove chip-hover-btn" onClick={() => onRemove?.()}>
          <AiOutlineMinus />
        </span>
      ) : null}
    </VariableWrapper>
  );
};
