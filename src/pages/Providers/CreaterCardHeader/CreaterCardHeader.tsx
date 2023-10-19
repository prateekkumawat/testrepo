import React, { FC, PropsWithChildren } from 'react';
import { CreaterCardHeaderWrapper } from './CreaterCardHeader.styled';

export const CreaterCardHeader: FC<
  PropsWithChildren & { className?: string }
> = ({ children, className }) => {
  return (
    <CreaterCardHeaderWrapper className={className}>
      {children}
      <div className="border-bottom" />
    </CreaterCardHeaderWrapper>
  );
};
