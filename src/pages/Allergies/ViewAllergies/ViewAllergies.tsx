import React, { FC, useEffect, useState } from 'react';
import { Checkbox, notification, Row, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import {
  ViewAllergiesWrapper,
  TableWrapper,
  TableRow,
  TableColumn,
  TableCell,
} from './ViewAllergiesWrapper.styled';
import drugImg from '../../../../public/drug-allergy.png';
import { Allergy } from '../AllergyType';
import { PatientService } from '../../../Service/Patient';

interface ViewAllergiesProps {
  className?: string;
}

interface ViewAllergyRowProps {
  allergy: Allergy;
}
export const ViewAllergyRow: FC<ViewAllergyRowProps> = ({ allergy }) => {
  return (
    <TableRow className="allergy-row">
      <TableColumn style={{ minWidth: '84%' }}>
        <TableCell className="items-inner-content-1">
          {allergy?.searchAllergy} | {allergy?.severity} | {allergy?.reaction}
        </TableCell>
        <TableCell className="items-inner-content-3">
          {allergy?.onset ? new Date(allergy?.onset).toLocaleDateString() : ''}
        </TableCell>
      </TableColumn>
      <TableColumn style={{ minWidth: '9%' }}>
        <TableCell className="items-inner-content-2">
          {allergy?.isDrugAllergy ? <img src={drugImg} alt="Drug_img" /> : null}
        </TableCell>
      </TableColumn>
      <TableColumn style={{ minWidth: '4%' }}>
        <TableCell className="close-icon">
          <div className="icon">✖</div>
        </TableCell>
      </TableColumn>
    </TableRow>
  );
};

export const ViewAllergies: React.FC<ViewAllergiesProps> = ({ className }) => {
  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const patientService = PatientService();
  const { patientId } = useParams();

  useEffect(() => {
    const getAllergies = async () => {
      try {
        setLoader(true);
        const temp = await patientService.viewAllergies(patientId!);
        setAllergies([...temp]);
      } catch (err: any) {
        notification.error({
          message: err?.response || 'Error occured while getting allergies',
        });
      } finally {
        setLoader(false);
      }
    };
    getAllergies();
  }, []);

  return (
    <ViewAllergiesWrapper className={className}>
      <div className="items">
        <div className="heading">Active Allergy</div>
        <div className="content">
          <Checkbox />
          <div>NKDA</div>
        </div>
      </div>
      {loader ? (
        <Spin className="get-allergies-loader" />
      ) : (
        <div className="get-allergies-data">
          <TableWrapper>
            {allergies
              .filter((a) => a.activeAllergy)
              .map((allergy, index) => (
                <ViewAllergyRow allergy={allergy} key={index} />
              ))}
          </TableWrapper>
          {allergies.filter((a) => !a.activeAllergy)?.length ? (
            <>
              <div className="items">
                <div className="heading">History</div>
              </div>
              <TableWrapper>
                {allergies
                  .filter((a) => !a.activeAllergy)
                  .map((allergy, index) => (
                    <ViewAllergyRow allergy={allergy} key={index} />
                  ))}
              </TableWrapper>
            </>
          ) : null}
        </div>
      )}
    </ViewAllergiesWrapper>
  );
};
