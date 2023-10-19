import React, {
  FC,
  useEffect,
  useMemo,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import { useParams } from 'react-router-dom';
import { BiPrinter } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoHandLeftOutline } from 'react-icons/io5';
import { MdAutorenew } from 'react-icons/md';
import { notification, Row, AutoComplete, Spin } from 'antd';
import { MedicinesWrapper } from './MedicinesWrapper.styled';
import {
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { PatientService } from '../../../Service/Patient';
import { AllergiesTab, Meds } from '../types';
import { MedicineService } from '../../../Service/Medicines';
import { Popup } from '../../../Component/Popup/Popup';
import { AddMedsPopup } from './AddMedsPopup/AddMedsPopup';

export const MedsRow: FC<{
  meds: Meds;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedMeds: Dispatch<SetStateAction<Meds | null>>;
}> = ({ meds, setModalOpen, setSelectedMeds }) => {
  const [update, setUpdate] = useState<boolean>(true);
  const [action, setAction] = useState<boolean>(false);
  const getTagName = () => {
    if (!meds?.activeFlag) return 'Stopped';
    if (meds?.prescribedFlag) return 'Prescribed';
    return 'Added';
  };
  return (
    <Row className="meds-content-data">
      <Row className="meds-details">
        <Row className="meds-details-rows">
          <Row className="meds-name">
            {meds.drugName}, {meds.quantity}
          </Row>
          <Row className={`meds-tag ${getTagName()?.toLowerCase()}`}>
            {getTagName()}
          </Row>
        </Row>
        <Row className="second-line">
          {[meds?.direction, meds?.when, meds?.frequency, meds?.duration]
            ?.map((e) => e?.trim())
            ?.filter(Boolean)
            ?.join(', ')}
        </Row>
      </Row>
      <Row className="meds-icons">
        {update ? (
          <MdAutorenew
            className="renew-icons"
            onClick={() => {
              setModalOpen(true);
              setSelectedMeds(meds);
            }}
          />
        ) : null}
        {action ? (
          <IoHandLeftOutline className="stop-icons" />
        ) : (
          <img src="/print.png" alt="Medicines" style={{ height: '50%' }} />
        )}
        <BiPrinter className="printer-icons" />
        <RiDeleteBin6Line className="printer-icons" />
      </Row>
    </Row>
  );
};

const renderTitle = () => (
  <span
    className="table-header"
    style={{
      backgroundColor: '#273C91',
      display: 'flex',
      fontWeight: '600',
      color: 'white',
      height: '25px',
      padding: '4px 0',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    }}
  >
    <span className="cell" style={{ textAlign: 'center', width: '40%' }}>
      Medicine Name
    </span>
    <span className="cell" style={{ textAlign: 'center', width: '30%' }}>
      Route
    </span>
    <span className="cell" style={{ textAlign: 'center', width: '30%' }}>
      Action
    </span>
  </span>
);

const renderItem = (title: string, route: string, action: () => void) => ({
  value: title,
  label: (
    <span style={{ backgroundColor: 'white', color: 'black', display: 'flex' }}>
      <span className="cell" style={{ textAlign: 'center', width: '40%' }}>
        {title}
      </span>
      <span className="cell" style={{ textAlign: 'center', width: '30%' }}>
        Route
      </span>
      <span
        className="cell"
        onClick={() => action()}
        style={{ textAlign: 'center', width: '30%' }}
      >
        Prescribe
      </span>
    </span>
  ),
});

interface MedicinesProps {
  className?: string;
  activeTab: string;
}
export const Medicines: React.FC<MedicinesProps> = ({
  className,
  activeTab,
}) => {
  const { patientId } = useParams();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedMeds, setSelectedMeds] = useState<Meds | null>(null);
  const [drugName, setDrugName] = useState<string>('');
  const [meds, setMeds] = useState<Meds[]>([]);
  const [supplements, setSupplements] = useState<Meds[]>([]);
  const [externalMeds, setExternalMeds] = useState<any[]>([]);
  const patientService = PatientService();
  const medicineService = MedicineService();
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const getMeds = async () => {
      try {
        setLoader(true);
        const data: Meds[] = await patientService.getPrescriptions();
        const medsData: Meds[] = [];
        const supplementsData: Meds[] = [];
        data?.forEach((e: Meds) => {
          if (!e.supplementsFlag) medsData.push(e);
          else supplementsData.push(e);
        });
        setMeds(medsData);
        setSupplements(supplementsData);
      } catch (err) {
        notification.error({
          message: `Error Occured while submiting ${activeTab}`,
        });
      } finally {
        setLoader(false);
      }
    };
    getMeds();
  }, []);

  const stoppedMeds = useMemo(() => {
    if (activeTab === AllergiesTab.Meds)
      return meds?.filter((e) => !e.activeFlag);
    return supplements?.filter((e) => !e.activeFlag);
  }, [meds, supplements, activeTab]);

  const activeMeds = useMemo(() => {
    if (activeTab === AllergiesTab.Meds)
      return meds?.filter((e) => e.activeFlag);
    return supplements?.filter((e) => e.activeFlag);
  }, [meds, supplements, activeTab]);

  const getAllMeds = async (val: string) => {
    try {
      if (!val?.trim()?.length) {
        setExternalMeds([]);
        return;
      }
      const data = await medicineService.getMedicinesExternalCall(val);
      setExternalMeds(data?.suggestionGroup?.suggestionList?.suggestion || []);
    } catch (err) {
      notification.error({
        message: 'Error occured while fetching meds',
      });
    }
  };

  console.log('stoppedMeds', stoppedMeds);

  return (
    <MedicinesWrapper className={className}>
      <Row className="search-bar">
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          options={
            externalMeds?.length
              ? [
                  {
                    label: renderTitle(),
                    options: externalMeds?.map((e) =>
                      renderItem(e, '-', () => {
                        setModalOpen(true);
                        setDrugName(e);
                      })
                    ),
                  },
                ]
              : []
          }
          style={{ width: '80%' }}
          onSearch={(text) => getAllMeds(text)}
          placeholder="input here"
        >
          <StyledSimpleInput />
        </AutoComplete>
        <StyledSimpleSelect
          options={[
            { value: 'Active', label: 'Active' },
            { value: 'inactive', label: 'inactive' },
            { value: 'All', label: 'All' },
          ]}
          className="med-status"
        />
      </Row>
      {loader ? (
        <Spin className="get-meds-loader" />
      ) : (
        <Row className="meds-content">
          <div className="meds-content-container">
            {activeMeds?.map((med) => {
              return (
                <>
                  <MedsRow
                    setModalOpen={setModalOpen}
                    meds={med}
                    key={`${med.drugId}-${med.patientId}`}
                    setSelectedMeds={setSelectedMeds}
                  />
                  <span />
                </>
              );
            })}
          </div>
          <div className="meds-content-container">
            {stoppedMeds.length>0 ? <div className="separator" /> : null}
            {stoppedMeds?.map((med) => {
              return (
                <>
                  <MedsRow
                    setModalOpen={setModalOpen}
                    meds={med}
                    setSelectedMeds={setSelectedMeds}
                    key={`${med.drugId}-${med.patientId}`}
                  />
                  <span />
                </>
              );
            })}
          </div>
        </Row>
      )}
      <Popup
        title="Add new medicines"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        width="65vw"
      >
        <AddMedsPopup
          setModalOpen={setModalOpen}
          drugName={drugName}
          selectedMeds={selectedMeds}
          activeTab={activeTab}
        />
      </Popup>
    </MedicinesWrapper>
  );
};
