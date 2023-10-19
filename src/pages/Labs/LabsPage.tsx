import React, { useState } from 'react';
import { Row } from 'antd';
import { LabsHeaderWrapper, LabsWrapper } from './LabsPage.styled';
import { Labs } from './Lab/Labs';
import { Procedures } from './Procedure/Procedure';
import { Imagings } from './Imaging/Imaging';
// import { ViewLabs } from './ViewLabs/ViewLabs';
// import { Labs } from './LabsType';
// import { AddLabs } from './AddVital/Addvital';

export const LabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Labs');
  const [viewTab, setViewTab] = useState<boolean>(true);

  const handleCancel = () => {
    setViewTab(false);
  };

  return (
    <>
      {viewTab ? (
        <LabsWrapper>
          <LabsHeaderWrapper>
            <Row className="labs-title">Labs & Procedures</Row>
            <Row className="labs-title-items">
              <div
                onClick={() => setActiveTab('Labs')}
                className={`labs-item-tabs ${
                  activeTab === 'Labs' ? 'active' : ''
                }`}
              >
                Labs
              </div>
              <div
                onClick={() => setActiveTab('Imaging')}
                className={`labs-item-tabs ${
                  activeTab === 'Imaging' ? 'active' : ''
                }`}
              >
                Imaging
              </div>
              <div
                onClick={() => setActiveTab('Procedures')}
                className={`labs-item-tabs ${
                  activeTab === 'Procedures' ? 'active' : ''
                }`}
              >
                Procedures
              </div>
              <div className="icon" onClick={handleCancel}>✖</div>
            </Row>
          </LabsHeaderWrapper>
          {activeTab === 'Labs' ? (
            <Labs />
          ) : activeTab === 'Imaging' ? (
            <Imagings />
          ) : (
            <Procedures />
          )}
        </LabsWrapper>
      ) : null}
    </>
  );
};
