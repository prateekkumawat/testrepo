import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { BiPrinter } from 'react-icons/bi';
import { MdSearch } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { Button, notification, Spin } from 'antd';
import moment from 'moment';
import { StyledSimpleSelect } from '../../../Component/Form/Form';
import { VaccinesWrapper } from './VaccinesWrapper.styled';
import { PatientService } from '../../../Service/Patient';
import { Popup } from '../../../Component/Popup/Popup';
import { AddVaccinesPopup } from '../AddVaccines/AddVaccinesPopup';
import { Vaccines } from '../types';

const syringeImage = '/syringe.svg';

interface VaccinesProps {
  className?: string;
}

export const VacineRow: FC<{
  data: Vaccines;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedVaccine: Dispatch<SetStateAction<Vaccines | null>>;
}> = ({ data, setModalOpen, setSelectedVaccine }) => {
  return (
    <div className="vaccines-row">
      <div className="row-detail">
        <div className="first-line">
          <div>{data.vaccineName}</div>
          {Array.from(
            { length: Number(data?.vaccineNumber) || 0 },
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
              data?.administeredDate
                ? moment(data?.administeredDate).format('DD MMM YYYY')
                : '',
            ]
              .map((e) => e.trim())
              .filter(Boolean)
              .join(', ')}
          </div>
        </div>
      </div>
      <div className="row-status">
        <span
          onClick={() => {
            console.log('clicked');
            setSelectedVaccine(data);
            setModalOpen(true);
          }}
        >
          <IoMdAdd className="icon-add" />
        </span>
        <BiPrinter className="icon" />
        <RiDeleteBin6Line className="icon" />
      </div>
    </div>
  );
};

export const Vaccine: React.FC<VaccinesProps> = ({ className }) => {
  const { patientId } = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [data, setData] = useState<Vaccines[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVaccine, setSelectedVaccine] = useState<Vaccines | null>(null);

  const patientService = PatientService();

  const getVaccines = async () => {
    try {
      setLoader(true);
      const dat = await patientService.getVaccinesByPatientId(patientId!);
      console.log('dat', dat);
      setData(dat);
      setLoader(false);
    } catch (err: any) {
      setLoader(false);
      notification.error({
        message: err.response || 'Error occured while fetching Vaccines',
      });
    }
  };

  useEffect(() => {
    getVaccines();
  }, []);

  const activeVaccine = useMemo(() => {
    return data?.filter((e) => e.vaccineInfoFlag === 'Administered');
  }, [data]);

  const historyVaccine = useMemo(
    () => data?.filter((e) => e.vaccineInfoFlag === 'Historical'),
    [data]
  );

  const refusedVaccine = useMemo(
    () => data?.filter((e) => e.vaccineInfoFlag === 'Refused'),
    [data]
  );
  return (
    <VaccinesWrapper className={className}>
      {loader ? (
        <Spin className="get-vaccine-loader" />
      ) : (
        <>
          <StyledSimpleSelect
            showSearch
            placeholder={
              <>
                <MdSearch className="icon" />
                <span>Search Vaccines</span>
              </>
            }
            className="search-bar"
            // onChange
          />
          {activeVaccine?.map((e: Vaccines, index: number) => (
            <VacineRow
              data={e}
              key={index}
              setModalOpen={setModalOpen}
              setSelectedVaccine={setSelectedVaccine}
            />
          ))}
          {historyVaccine?.length ? (
            <>
              <div className="history-heading">History</div>
              {historyVaccine?.map((e: Vaccines, index: number) => (
                <VacineRow
                  data={e}
                  key={index}
                  setModalOpen={setModalOpen}
                  setSelectedVaccine={setSelectedVaccine}
                />
              ))}
            </>
          ) : null}
          {refusedVaccine?.length ? (
            <>
              <div className="history-heading">Refused</div>
              {refusedVaccine?.map((e: Vaccines, index: number) => (
                <VacineRow
                  data={e}
                  key={index}
                  setModalOpen={setModalOpen}
                  setSelectedVaccine={setSelectedVaccine}
                />
              ))}
            </>
          ) : null}
          <Button className="buttn" onClick={() => setModalOpen(true)}>
            + Add Vaccines
          </Button>
          {console.log('modalOpen', modalOpen)}
          <Popup
            title="Add Vaccines"
            open={modalOpen}
            footer={null}
            width="70vw"
            onCancel={() => {
              setModalOpen(false);
            }}
          >
            <AddVaccinesPopup
              setModalOpen={setModalOpen}
              selectedVaccine={selectedVaccine}
            />
          </Popup>
        </>
      )}
    </VaccinesWrapper>
  );
};
