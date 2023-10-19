import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiPrinter } from 'react-icons/bi';
import { MdSearch } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { Button, notification, Spin } from 'antd';
import moment from 'moment';
import { StyledSimpleSelect } from '../../../Component/Form/Form';
import { InjectionsWrapper } from './InjectionsWrapper.styled';
import { PatientService } from '../../../Service/Patient';
import { Injection } from '../types';
import { Popup } from '../../../Component/Popup/Popup';
import { AddInjectionsPopup } from '../AddInjections/AddInjectionsPopup';

const syringeImage = '/syringe.svg';

export const InjectionRow = (data: Injection) => {
  return (
    <div className="injections-row">
      <div className="row-detail">
        <div className="first-line">
          <div>{data.injectionName}</div>
          {Array.from(
            { length: Number(data?.duration) || 0 },
            (_, i) => i + 1
          )?.map((e, index) => (
            <img
              src={syringeImage}
              alt="Syringe"
              className="syringe"
              key={index}
            />
          ))}
        </div>
        <div className="second-line">
          <div>
            {[
              data?.administeredBy,
              data?.administeredOn
                ? moment(data?.administeredOn).format('DD MMM YYYY')
                : '',
            ]
              .map((e) => e.trim())
              .filter(Boolean)
              .join(', ')}
          </div>
          {/* <div>{data?.orderedBy}</div> */}
        </div>
      </div>
      <div className="row-status">
        {/* {edit ? (
          <ImAttachment className="icon-attach" />
        ) : (
          <FaPen className="icon-edit" />
        )} */}
        <IoMdAdd className="icon-add" />
        <BiPrinter className="icon" />
        <RiDeleteBin6Line className="icon" />
      </div>
    </div>
  );
};

interface InjectionsProps {
  className?: string;
}
export const Injections: React.FC<InjectionsProps> = ({ className }) => {
  const { patientId } = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [injectionData, setInjectionData] = useState<Injection[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const patientService = PatientService();

  const getInjections = async () => {
    try {
      setLoader(true);
      const data = await patientService.getInjectionByPatientId(patientId!);
      setInjectionData(data);
      setLoader(false);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err.response || 'Error occured while fetching Injection',
      });
    }
  };

  useEffect(() => {
    getInjections();
  }, []);

  return (
    <InjectionsWrapper className={className}>
      {loader ? (
        <Spin className='get-vaccine-loader'/>
      ) : (
        <>
          <StyledSimpleSelect
            showSearch
            placeholder={
              <>
                <MdSearch className="icon" />
                <span>Search Injections</span>
              </>
            }
            className="search-bar"
          />
          {injectionData?.map((e, index) => (
            <InjectionRow {...e} key={index} />
          ))}
          <Button className="buttn" onClick={() => setModalOpen(true)}>
            + Add Injections
          </Button>
          {console.log('modalOpen', modalOpen)}
          <Popup
            title="Add Vaccines"
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            footer={null}
            width="70vw"
          >
            <AddInjectionsPopup setModalOpen={setModalOpen} />
          </Popup>
        </>
      )}
    </InjectionsWrapper>
  );
};
