import React, { useState } from 'react';
import { Row } from 'antd';
import { AllergiesWrapper } from './AllergiesWrapper.styled';
import { AllergiesHeaderWrapper } from './AllergiesHeader/AllergiesHeader.styled';
import { AddAllergy } from './AddAllergy/AddAllergy';
import { ViewAllergies } from './ViewAllergies/ViewAllergies';

import { AllergiesTab } from './types';

export const Allergies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AllergiesTab>(
    AllergiesTab.ADD_ALLERGY
  );
  const [viewTab, setViewTab] = useState<boolean>(true);

  const handleCancel = () => {
    setViewTab(false);
  };
  return (
    <>
      {viewTab ? (
        <AllergiesWrapper>
          <AllergiesHeaderWrapper>
            <Row className="allergies-title">Allergies</Row>
            <Row className="allergies-title-items">
              <div
                onClick={() => setActiveTab(AllergiesTab.VIEW_ALLERGY)}
                className={`allergies-item-tabs ${
                  activeTab === AllergiesTab.VIEW_ALLERGY ? 'active' : ''
                }`}
              >
                View Allergy
              </div>
              <div
                onClick={() => setActiveTab(AllergiesTab.ADD_ALLERGY)}
                className={`allergies-item-tabs ${
                  activeTab === AllergiesTab.ADD_ALLERGY ? 'active' : ''
                }`}
              >
                Add Allergy
              </div>
              <div className="icon" onClick={handleCancel}>
                ✖
              </div>
            </Row>
          </AllergiesHeaderWrapper>
          {activeTab === AllergiesTab.ADD_ALLERGY ? (
            <AddAllergy />
          ) : (
            <ViewAllergies />
          )}
        </AllergiesWrapper>
      ) : null}
    </>
  );
};
