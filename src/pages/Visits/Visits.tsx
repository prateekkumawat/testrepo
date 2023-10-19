import React, { useState } from 'react';
import { Row } from 'antd';
import { VisitsHeaderWrapper, VisitsWrapper } from './VisitsWrapper.styled';
import { VisitsBody } from './VisitsBody';

export const Visits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Visits');
  const [viewTab, setViewTab] = useState<boolean>(true);
  const handleCancel = () => {
    setViewTab(false);
  };

  return (
    <>
      {viewTab ? (
        <VisitsWrapper>
          <VisitsHeaderWrapper>
            <Row className="visits-title">Visits</Row>
            <Row className="visits-title-items">
              <div className="icon" onClick={handleCancel}>
                ✖
              </div>
            </Row>
          </VisitsHeaderWrapper>
          <VisitsBody />
        </VisitsWrapper>
      ) : null}
    </>
  );
};
