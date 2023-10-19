import React, { useState } from 'react';
import { PatientService } from '../../../Service/Patient';
import { HistoryBodyWrapper } from './HistoryBody.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Medical, Social, Surgical } from '../types';
import { AddMedical } from '../AddMedicalHistory/AddMedical';
import { AddSurgical } from '../AddSurgicalHistory/AddSurgical';
import { AddSocial } from '../AddSocialHistory/AddSocial';
import { AiOutlineMinusCircle } from 'react-icons/ai';

interface HistoryBodyProps {
  className?: string;
}

export const HistoryBody: React.FC<HistoryBodyProps> = ({ className }) => {
  const [savedSurgical, setSavedSurgical] = useState<Surgical | null>(null);
  const [savedMedical, setSavedMedical] = useState<Medical | null>(null);
  const [savedSocial, setSavedSocial] = useState<Social | null>(null);
  const [addSurgical, setAddSurgical] = useState<boolean>(false);
  const [addMedical, setAddMedical] = useState<boolean>(false);
  const [addSocial, setAddSocial] = useState<boolean>(false);
  const [openform, setOpenForm] = useState<boolean>(false);
  const handleSurgicalHistoryClick = () => {
    setAddSurgical(true);
    setAddMedical(false);
    setAddSocial(false);
    setOpenForm(true);
  };
  const handleMedicalHistoryClick = () => {
    setAddSurgical(false);
    setAddMedical(true);
    setAddSocial(false);
    setOpenForm(true);
  };
  const handleSociallHistoryClick = () => {
    setAddSurgical(false);
    setAddMedical(false);
    setAddSocial(true);
    setOpenForm(true);
  };
  const handleFormCloseClick = () => {
    setAddSurgical(false);
    setAddMedical(false);
    setAddSocial(false);
    setOpenForm(false);
  };

  return (
    <HistoryBodyWrapper className={className}>
      <div className="history-content">
        <div className="history-content-container">
          <div className="history-content-heading-data">
            <div className="history-content-heading">
              <div className="heading">Social History</div>
              {openform && !addMedical && !addSurgical ? (
                <AiOutlineMinusCircle
                  className="icon"
                  onClick={handleFormCloseClick}
                />
              ) : (
                <div className="icon" onClick={handleSociallHistoryClick}>
                  +
                </div>
              )}
            </div>
          </div>
          {addSocial ? (
            <AddSocial savedSocial={savedSocial} addSocial={addSocial} />
          ) : null}
          <div className="history-content-data">
            <div className="data-rows">
              Current Everyday Smoker 1/4 packs(s) per day
            </div>
            <div className="data-rows">Tabacco: Yes</div>
            <div className="data-rows">Alcohol: Quit </div>
            <div className="data-rows">Exercise: 3 Times per Week</div>
            <div className="data-rows">
              Recreational Drug Use: Marijuana,Cocaine
            </div>
          </div>
        </div>
        <div className="history-content-container">
          <div className="history-content-heading-data">
            <div className="history-content-heading">
              <div className="heading">Medical Problems</div>
              {openform && !addSocial && !addSurgical ? (
                <AiOutlineMinusCircle
                  className="icon"
                  onClick={handleFormCloseClick}
                />
              ) : (
                <div className="icon" onClick={handleMedicalHistoryClick}>
                  +
                </div>
              )}
            </div>
            {addMedical ? (
              <AddMedical savedMedical={savedMedical} addMedical={addMedical} />
            ) : null}
          </div>
          <div className="history-content-data">
            <div className="medical-pro">
              <div className="medical-pro-name">Daibetes</div>
              <div className="medical-pro-content">
                <div className="status-tag">Active</div>
                <RiDeleteBin6Line className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="history-content-container">
          <div className="history-content-heading-data">
            <div className="history-content-heading">
              <div className="heading">Surgical History</div>
              {openform && !addMedical && !addSocial ? (
                <AiOutlineMinusCircle
                  className="icon"
                  onClick={handleFormCloseClick}
                />
              ) : (
                <div className="icon" onClick={handleSurgicalHistoryClick}>
                  +
                </div>
              )}
            </div>
            {addSurgical ? (
              <AddSurgical
                savedSurgical={savedSurgical}
                addSurgical={addSurgical}
              />
            ) : null}
          </div>
          <div className="history-content-data">
            <div className="medical-pro">
              <div className="medical-pro-name">Daibetes</div>
              <div className="medical-pro-content">
                <div className="status-tag">Active</div>
                <RiDeleteBin6Line className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HistoryBodyWrapper>
  );
};
