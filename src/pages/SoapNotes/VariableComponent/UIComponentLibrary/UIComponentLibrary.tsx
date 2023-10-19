import { Tag } from 'antd';
import React, { FC, useState } from 'react';
import { Popup } from '../../../../Component/Popup/Popup';
import { DropDownPopup } from './DropDownPopup/DropDownPopup';
import { UIComponentLibraryWrapper } from './UIComponentLibrary.styled';
import { CheckListPopup } from './CheckList/CheckListPopup';
import { DatePopup } from './Date/DatePopup';
import { InputPopup } from './InputBox/InputPopup';
import { TextAreaPopup } from './TextArea/TextAreaPopup';
import { RadioPopup } from './Radio/RadioPopup';
import { insertElement } from '../../../../utility';

export const UIComponentLibrary: FC = () => {
  const [dropDownModalOpen, setDropDownModalOpen] = useState<boolean>(false);
  const [radioModalOpen, setRadioModalOpen] = useState<boolean>(false);
  const [checkListModalOpen, setCheckListModalOpen] = useState<boolean>(false);
  const [textAreaModalOpen, setTextAreaModalOpen] = useState<boolean>(false);
  const [dateModalOpen, setDateModalOpen] = useState<boolean>(false);
  const [inputModalOpen, setInputModalOpen] = useState<boolean>(false);

  return (
    <UIComponentLibraryWrapper>
      <Tag className="component-tag">
        DropDown
        <button
          className="add"
          onClick={() => setDropDownModalOpen(true)}
          type="button"
        >
          +
        </button>
      </Tag>
      <Tag className="component-tag">
        Radio Button{' '}
        <button
          className="add"
          onClick={() => setRadioModalOpen(true)}
          type="button"
        >
          +
        </button>
      </Tag>
      <Tag className="component-tag">
        Checkbox{' '}
        <button
          className="add"
          onClick={() => setCheckListModalOpen(true)}
          type="button"
        >
          +
        </button>
      </Tag>
      <Tag className="component-tag">
        Date{' '}
        <button
          className="add"
          onClick={() => {
            setDateModalOpen(true);
          }}
          type="button"
        >
          +
        </button>
      </Tag>
      <Tag className="component-tag">
        Text Area{' '}
        <button
          className="add"
          onClick={() => setTextAreaModalOpen(true)}
          type="button"
        >
          +
        </button>
      </Tag>
      <Tag className="component-tag">
        Input Box{' '}
        <button
          className="add"
          onClick={() => setInputModalOpen(true)}
          type="button"
        >
          +
        </button>
      </Tag>
      {dropDownModalOpen ? (
        <Popup
          open={dropDownModalOpen}
          onCancel={() => setDropDownModalOpen(false)}
          title="Add Dropdown"
          width="60vw"
          footer={false}
        >
          <DropDownPopup
            setModalOpen={setDropDownModalOpen}
            handleSubmit={(values: any) => {
              insertElement(values, 'editable-container');
              setDropDownModalOpen(false);
            }}
          />
        </Popup>
      ) : null}
      {radioModalOpen ? (
        <Popup
          open={radioModalOpen}
          onCancel={() => setRadioModalOpen(false)}
          title="Add Radio Button"
          width="60vw"
          footer={false}
        >
          <RadioPopup
            setModalOpen={setRadioModalOpen}
            handleSubmit={(values: any) => {
              insertElement(values, 'editable-container');
              setRadioModalOpen(false);
            }}
          />
        </Popup>
      ) : null}
      {checkListModalOpen ? (
        <Popup
          open={checkListModalOpen}
          onCancel={() => setCheckListModalOpen(false)}
          title="Add Checkbox"
          width="60vw"
          footer={false}
        >
          <CheckListPopup
            setModalOpen={setCheckListModalOpen}
            handleSubmit={(values: any) => {
              insertElement(values, 'editable-container');
              setCheckListModalOpen(false);
            }}
          />
        </Popup>
      ) : null}
      {textAreaModalOpen ? (
        <Popup
          open={textAreaModalOpen}
          onCancel={() => setTextAreaModalOpen(false)}
          title="Add Text Area"
          width="60vw"
          footer={false}
        >
          <TextAreaPopup
            setModalOpen={setTextAreaModalOpen}
            handleSubmit={(values: any) => {
              insertElement(values, 'editable-container');
              setTextAreaModalOpen(false);
            }}
          />
        </Popup>
      ) : null}
      {dateModalOpen ? (
        <Popup
          open={dateModalOpen}
          onCancel={() => setDateModalOpen(false)}
          title="Add Date"
          width="60vw"
          footer={false}
        >
          <DatePopup
            setModalOpen={setDateModalOpen}
            handleSubmit={(values: any) => {
              insertElement(values, 'editable-container');
              setDateModalOpen(false);
            }}
          />
        </Popup>
      ) : null}
      {inputModalOpen ? (
        <Popup
          open={inputModalOpen}
          onCancel={() => setInputModalOpen(false)}
          title="Add Input"
          width="60vw"
          footer={false}
        >
          <InputPopup
            setModalOpen={setInputModalOpen}
            handleSubmit={(values: any) => {
              insertElement(values, 'editable-container');
              setInputModalOpen(false);
            }}
          />
        </Popup>
      ) : null}
    </UIComponentLibraryWrapper>
  );
};
