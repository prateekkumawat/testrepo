import React, { FC, useState } from 'react';
import { Tag } from 'antd';
import { IoMdAdd } from 'react-icons/io';
import { UIComponentLibrary } from './UIComponentLibrary/UIComponentLibrary';
import { VarCompWrapper } from './VarCompWrapper.styled';
import { Variables } from './Variables/Variables';
import { SOAPVariable } from '../types';
import { CustomNode } from '../../../Types/Types';
import { Popup } from '../../../Component/Popup/Popup';
import { AddVarPopup } from '../Popups/AddVarPopup';
import { insertElement } from '../../../utility';

export const VarComponent: FC = () => {
  const [addVarModalOpen, setAddVarModalOpen] = useState<boolean>(false);
  const [soapVariables, setSoapVariables] = useState<SOAPVariable[]>([
    {
      name: 'Mayur Nandu',
      template: [
        {
          key: 'patient-name',
          tag: 'p',
          attributes: {
            class: 'chip',
            innerHTML: 'Mayur Nandu',
          },
          type: 'parent',
          innerHTML: 'Mayur Nandu',
          childrens: [],
        },
      ],
    },
    {
      name: 'date',
    },
    {
      name: 'age',
    },
    {
      name: 'height',
    },
    {
      name: 'weight',
    },
    {
      name: 'allergies',
    },
  ]);

  return (
    <VarCompWrapper className="view-SaopNotes-wrapper h-100">
      <div className="card v2 h-100">
        <div className="card-header">
          <p className="title sm">Your Variables</p>
          <IoMdAdd
            className="icons"
            onClick={() => {
              setAddVarModalOpen((prev) => !prev);
            }}
          />
        </div>
        <div className="card-body">
          <div className="d-flex gap-2 flex-wrap">
            {soapVariables?.map((v: SOAPVariable, index: number) => (
              <Variables
                key={v.name}
                {...v}
                showAdd
                showRemove
                onAdd={(template?: CustomNode[]) => {
                  console.log('added');
                  if (template) insertElement(template, 'editable-container');
                }}
                onRemove={() => {
                  setSoapVariables((prev) => {
                    prev.splice(index, 1);
                    return [...prev];
                  });
                }}
              />
            ))}
          </div>
        </div>
        <div className="card-header">
          <div className="title sm">Your components</div>
        </div>
        <div className="card-body">
          <UIComponentLibrary />
        </div>
      </div>

      <Popup
        open={addVarModalOpen}
        onCancel={() => setAddVarModalOpen(false)}
        title="Frequently Used Variables"
        width="60vw"
      >
        <AddVarPopup
          handleSubmit={(values: any) => {
            console.log('vale', values);
          }}
          soapVariables={soapVariables}
        />
      </Popup>
    </VarCompWrapper>
  );
};
