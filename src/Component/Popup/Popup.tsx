import React, { FC } from 'react';
import { Modal, ModalProps, Row } from 'antd';
import styled from 'styled-components';
import { PopupWrapper } from './Popup.styled';

export interface PopupProps {
  className?: string;
  popupClassName?: string;
}
const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    .ant-modal-close {
      top: 20px;
      color: ${(props) => props?.theme?.primary?.contrastTextColor};
    }
    .ant-modal-header {
      background-color: ${(props) => props?.theme?.primary?.main};
      color: ${(props) => props?.theme?.primary?.contrastTextColor};
      margin: 0;
      padding: 20px;
      .ant-modal-title {
        color: ${(props) => props?.theme?.primary?.contrastTextColor};
        padding: 0;
      }
    }
    .ant-modal-body {
      padding: 20px;
    }
  }
  .modal-footer {
    padding: 20px 0px 0;
    margin: 0;
  }
  .ant-modal-footer {
    padding: 20px;
    margin: 0;
  }
`;
export const Popup: FC<PopupProps & ModalProps> = ({
  className,
  popupClassName,
  ...modalProps
}) => {
  return (
    <PopupWrapper className={`popup-wrapper ${className}`}>
      <StyledModal {...modalProps} className={popupClassName} />
    </PopupWrapper>
  );
};
