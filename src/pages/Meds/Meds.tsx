import React, { useState } from 'react';
import { MedsHeaderWrapper, MedsWrapper } from './MedsWrapper.styled';
import { Medicines } from './Medicines/Medicines';
import { AllergiesTab } from './types';

export const Meds: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(AllergiesTab.Meds);
  const [viewTab, setViewTab] = useState<boolean>(true);

  const handleCancel = () => {
    setViewTab(false);
  };
  return viewTab ? (
    <MedsWrapper>
      <MedsHeaderWrapper>
        <div className="meds-title">Meds</div>
        <div className="meds-title-items">
          <div
            onClick={() => setActiveTab('Meds')}
            className={`meds-item-tabs ${
              activeTab === AllergiesTab.Meds ? 'active' : ''
            }`}
          >
            Meds
          </div>
          <div
            onClick={() => setActiveTab('Supplements')}
            className={`meds-item-tabs ${
              activeTab === 'Supplements' ? 'active' : ''
            }`}
          >
            Supplements
          </div>
          <div className="icon" onClick={handleCancel}>
            ✖
          </div>
        </div>
      </MedsHeaderWrapper>
      <Medicines activeTab={activeTab} />
    </MedsWrapper>
  ) : null;
};
