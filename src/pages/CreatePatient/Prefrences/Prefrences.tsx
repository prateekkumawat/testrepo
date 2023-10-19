import { Row, Table } from 'antd';
import { FormikProps } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { StyledCheckBox } from '../../../Component/Form/Form';
import { CreatePatientScreen2 } from '../Types';
import { PrefrencesWrapper } from './Prefrences.styled';

export const Prefrences: FC<FormikProps<CreatePatientScreen2>> = (
  formikProps
) => {
  const [ans, setAns] = useState<{
    email: string;
    text: string;
    voice: string;
  }>({
    email: formikProps.values.emailPermission,
    text: formikProps.values.textPermission,
    voice: formikProps.values.voicePermission,
  });

  useEffect(() => {
    formikProps.setFieldValue('emailPermission', ans.email);
    formikProps.setFieldValue('textPermission', ans.voice);
    formikProps.setFieldValue('voicePermission', ans.text);
  }, [ans]);

  const columns = [
    {
      title: '',
      dataIndex: 'key',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (_p1: any, _p2: any) => {
        return (
          <StyledCheckBox
            checked={ans.email === _p2.key}
            onChange={(e) => {
              setAns({
                ...ans,
                email: _p2.key,
              });
            }}
          />
        );
      },
    },
    {
      title: 'Text',
      dataIndex: 'text',
      render: (_p1: any, _p2: any) => {
        return (
          <StyledCheckBox
            checked={ans.text === _p2.key}
            onChange={(e) => {
              setAns({
                ...ans,
                text: _p2.key,
              });
            }}
          />
        );
      },
    },
    {
      title: 'Voice',
      dataIndex: 'voice',
      render: (_p1: any, _p2: any) => {
        return (
          <StyledCheckBox
            checked={ans.voice === _p2.key}
            onChange={(e) => {
              setAns({
                ...ans,
                voice: _p2.key,
              });
            }}
          />
        );
      },
    },
  ];

  const dataSource = [
    {
      key: 'Yes',
      email: false,
      text: false,
      voice: false,
    },
    {
      key: 'No',
      email: false,
      text: false,
      voice: false,
    },
  ];
  return (
    <PrefrencesWrapper className="prefrences-wrapper">
      <Table
        columns={columns}
        dataSource={dataSource}
        size="small"
        pagination={false}
      />
    </PrefrencesWrapper>
  );
};
