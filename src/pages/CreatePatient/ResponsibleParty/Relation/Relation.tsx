import { Button, Form, Row, Typography } from 'antd';
import { FormikProps } from 'formik';
import React, { FC, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegClone } from 'react-icons/fa';
import { StyledFormItem, StyledInput } from '../../../../Component/Form/Form';
import { Popup } from '../../../../Component/Popup/Popup';
import { CreatePatientScreen1 } from '../../Types';
import { RelationTable } from './RelationTable';
import { RelationPatientWrapper } from './Relation.styled';

export const Relation: FC<FormikProps<CreatePatientScreen1>> = (
  formikProps
) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <RelationPatientWrapper>
    <Row className="relation-patient-wrapper">
      <Button
        onClick={() => setModalOpen(true)}
        disabled={formikProps?.values.selfResponsibleFlag}
      >
        Relation <FaRegClone />
      </Button>
      <Popup
        title="Relation"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width="55vw"
      >
        <div className="relation-patient-wrapper-popup custom-scrolbar">
          <Typography className="title">Relation</Typography>
          <Form onFinish={() => {}} layout="vertical">
            <StyledFormItem label="" name="Relation">
              <StyledInput
                name="Relation"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Search a Guarantor"
                prefix={<AiOutlineSearch />}
                allowClear
              />
            </StyledFormItem>
            <RelationTable />
          </Form>
        </div>
      </Popup>
      </Row>
      </RelationPatientWrapper>
  );
};
