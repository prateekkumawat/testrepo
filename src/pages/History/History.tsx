import React, { useState } from 'react';
import { Row } from 'antd';
import { HistoryBody } from './HistoryBody/HistoryBody';
import { HistoryHeaderWrapper, HistoryWrapper } from './History.styled';
// import { ViewHistory } from './ViewHistory/ViewHistory';
// import { History } from './HistoryType';
// import { AddHistory } from './AddVital/Addvital';

export const HistoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ADD_History');
  const [viewTab, setViewTab] = useState<boolean>(true);
  
  const handleCancel = () => {
    setViewTab(false);
  };

  return (
    <>
      {viewTab ? (
        <HistoryWrapper>
          <HistoryHeaderWrapper>
            <Row className="history-title">History</Row>
            <Row className="history-title-items">
              <div className="icon" onClick={handleCancel}>
                ✖
              </div>
            </Row>
          </HistoryHeaderWrapper>
          <HistoryBody />
        </HistoryWrapper>
      ) : null}
    </>
  );
};
