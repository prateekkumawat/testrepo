import { Row, Button } from 'antd';
import React, { FC } from 'react';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
  StyledSimpleDatePicker,
} from '../../../../Component/Form/Form';
import { AddMedicineFormWrapper2 } from '../../MedsWrapper.styled';
import { Meds } from '../../types';

export interface AddMedsScreen2Props {
  savedPrescription: Meds;
}
export const AddMedsScreen2: FC<AddMedsScreen2Props> = ({
  savedPrescription,
}) => {
  return (
    <AddMedicineFormWrapper2>
      <Row className="add-medicine-column-1">
        <Row className="dosage-content">
          <StyledFormItem label="Prescribed By" className="add-medicine-labels">
            <StyledSimpleInput
              className="add-medicine-input-box"
              placeholder="Doctors Name comes here"
              style={{ width: '100%' }}
            />
          </StyledFormItem>
          <StyledFormItem label="Quantity" className="add-medicine-labels">
            <StyledSimpleInput className="add-medicine-input-box" />
            <span>Units: Tablet,Orally</span>
          </StyledFormItem>
          <StyledFormItem label="Frequency" className="add-medicine-labels">
            <StyledSimpleSelect
              options={[{ value: 'Select One', label: 'Select One' }]}
              className="add-medicine-input-box"
            />
          </StyledFormItem>
          <StyledFormItem label="Duration" className="add-medicine-labels">
            <StyledSimpleSelect
              options={[{ value: 'Select One', label: 'Select One' }]}
              className="add-medicine-input-box"
            />
            <span>Day(S)</span>
          </StyledFormItem>
          <StyledFormItem label="When" className="add-medicine-labels">
            <StyledSimpleSelect
              options={[{ value: 'Select One', label: 'Select One' }]}
              className="add-medicine-input-box"
            />
          </StyledFormItem>
          <StyledFormItem label="Dispense" className="add-medicine-labels">
            <StyledSimpleInput className="add-medicine-input-box" />
            <span>Tablets</span>
          </StyledFormItem>
        </Row>
      </Row>
      <Row className="add-medicine-column-2">
        <StyledFormItem label="Direction" className="add-medicine-labels">
          <StyledSimpleInput
            className="add-medicine-input-box"
            style={{ height: '120px' }}
          />
        </StyledFormItem>
        <Row style={{ width: '100%' }}>
          <StyledFormItem
            label="Earliest Fill Date"
            className="add-medicine-labels"
            style={{ width: '49%' }}
          >
            <StyledSimpleDatePicker className="add-medicine-input-box" />
          </StyledFormItem>
          <StyledFormItem
            label="Additional Refills"
            className="add-medicine-labels"
            style={{ width: '50%' }}
          >
            <StyledSimpleInput
              className="add-medicine-input-box"
              style={{ width: '50%' }}
            />
          </StyledFormItem>
        </Row>
      </Row>
      <Row
        style={{
          borderTop: '1px solid grey',
          width: '100%',
          padding: '20px 0',
        }}
      >
        <Row style={{ width: '83%', gap: '30%' }}>
          <Button className="bttns">Cancel</Button>
          <StyledFormItem label="Enter your Password" style={{ width: '60%' }}>
            <StyledSimpleInput
              className="add-medicine-input-box"
              style={{ width: '80%' }}
            />
          </StyledFormItem>
        </Row>
        <Row style={{ gap: '1%', width: '17%' }}>
          <Button
            className="bttns"
            style={{ backgroundColor: '#273C91', color: 'white' }}
          >
            Back
          </Button>
          <Button
            className="bttns"
            style={{ backgroundColor: '#972587', color: 'white' }}
          >
            Sign & Send
          </Button>
        </Row>
      </Row>
    </AddMedicineFormWrapper2>
  );
};
