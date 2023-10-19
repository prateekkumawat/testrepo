import React, { FC, useEffect, useState } from 'react';
import { Button, notification, Row } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
  StyledFormItem,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { ImAttachment } from 'react-icons/im';
import { FaPen } from 'react-icons/fa';
import { ImagingWrapper } from './Imaging.styled';

export const ImagingRow: FC = () => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className="imaging-row">
      <div className="row-detail">
        <div className="first-line">
          <div>Name</div>
        </div>
        <div className="second-line">
          <div>provider Name</div>
          <div>provider Qualification</div>
          <div>Date</div>
          <div className="imaging-body-tag">Condition</div>
        </div>
      </div>
      <div className="row-status">
        {edit ? (
          <ImAttachment className="icon-attach" />
        ) : (
          <FaPen className="icon-edit" />
        )}
        <div className="row-status-data">Availability</div>
      </div>
    </div>
  );
};

export const Imagings: React.FC = () => {
  const [arrangedBy, setArrangedBy] = useState<string>();
  //   const [labs, setLabs] = useState<Labs[]>([
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //     ...temp,
  //   ]);
  const { patientId } = useParams();

  useEffect(() => {
    // getlabs();
  }, []);

  return (
    <ImagingWrapper>
      <div className="imaging-body-heading">
        <StyledFormItem
          label="Arranged By"
          name="arrangedBy"
          className="form-items"
          initialValue={arrangedBy}
        >
          <StyledSimpleSelect
            options={[
              { value: 'All', label: 'All' },
              { value: 'Date', label: 'Date' },
            ]}
            // onChange={(e) => {
            //   setArrangedBy(e.target.value);
            // }}
            className="arrange-by-dropdown"
            placeholder="Speciality"
          />
        </StyledFormItem>
      </div>
      <div className="imaging-body-content">
        {/* {labs?.map((labs, index) => ( */}
        <ImagingRow
        //   key={index} labs={labs}
        />
        {/* ))} */}
      </div>
      <Button className="buttn">Imaging+</Button>
    </ImagingWrapper>
  );
};
