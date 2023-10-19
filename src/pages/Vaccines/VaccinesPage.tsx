import React, { useState } from 'react';
import { Row } from 'antd';
import {
  VaccinesHeaderWrapper,
  VaccinesPageWrapper,
} from './VaccinesPageWrapper.styled';

import { VaccinesTab } from './types';
import { Vaccine } from './Vaccines/Vaccines';
import { Injections } from './Injections/Injections';

export const VaccinesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VaccinesTab>(VaccinesTab.Vaccines);
  return (
    <VaccinesPageWrapper>
      <VaccinesHeaderWrapper>
        <Row className="vaccines-title">Vaccines & T.Injections</Row>
        <Row className="vaccines-title-items">
          <div
            onClick={() => setActiveTab(VaccinesTab.Vaccines)}
            className={`vaccines-item-tabs ${
              activeTab === VaccinesTab.Vaccines ? 'active' : ''
            }`}
          >
            Vaccines
          </div>
          <div
            onClick={() => setActiveTab(VaccinesTab.Injections)}
            className={`vaccines-item-tabs ${
              activeTab === VaccinesTab.Injections ? 'active' : ''
            }`}
          >
            Injections
          </div>
          <div className="icon">✖</div>
        </Row>
      </VaccinesHeaderWrapper>
      {activeTab === VaccinesTab.Vaccines ? <Vaccine /> : <Injections />}
    </VaccinesPageWrapper>
  );
};
