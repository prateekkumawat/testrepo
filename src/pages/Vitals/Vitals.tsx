import React, { useState } from 'react';
import { Row } from 'antd';
import { VitalsHeaderWrapper, VitalsWrapper } from './VitalsWrapper.styled';
import { ViewVitals } from './ViewVitals/ViewVitals';
import { Vitals } from './VitalsType';
import { AddVitals } from './AddVital/Addvital';

export const VitalsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ADD_VITALS');
  const [viewTab, setViewTab] = useState<boolean>(true);

  const handleCancel = () => {
    setViewTab(false);
  };

  return (
    <>
      {viewTab ? (
        <VitalsWrapper>
          <VitalsHeaderWrapper>
            <Row className="vitals-title">Vitals</Row>
            <Row className="vitals-title-items">
              <div
                onClick={() => setActiveTab('VIEW_VITALS')}
                className={`vitals-item-tabs ${
                  activeTab === 'VIEW_VITALS' ? 'active' : ''
                }`}
              >
                View Vitals
              </div>
              <div
                onClick={() => setActiveTab('ADD_VITALS')}
                className={`vitals-item-tabs ${
                  activeTab === 'ADD_VITALS' ? 'active' : ''
                }`}
              >
                Add Vital
              </div>
              <div className="icon" onClick={handleCancel}>
                ✖
              </div>
            </Row>
          </VitalsHeaderWrapper>
          {activeTab === 'ADD_VITALS' ? <AddVitals /> : <ViewVitals />}
        </VitalsWrapper>
      ) : null}
    </>
  );
};
