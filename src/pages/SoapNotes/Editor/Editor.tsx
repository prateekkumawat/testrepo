import React, { FC, useState, useEffect } from 'react';
import { Button } from 'antd';
import { EditorWrapper } from './Editor.styled';
import { SaopNotesType, SelectedEdit } from '../types';
import { parseJSON } from '../../../utility';
import { CustomEditor } from './CustomEditor';
import { QuillEditor } from './quilledit';

export const Editor: FC<{
  soapData: SaopNotesType | null;
  selectedEdit: SelectedEdit | null;
}> = ({ soapData, selectedEdit }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const customHtml = '<p>This is custom <strong>HTML</strong> content.</p>';

  useEffect(() => {
    const docFragment = parseJSON(selectedEdit?.templates);
    const container = document.getElementById('editable-container');
    if (docFragment && container) {
      container.innerHTML = '';
      container.appendChild(docFragment);
      setEditMode(true);
    }
  }, [selectedEdit]);

  const getName = () => {
    if (selectedEdit?.subCategory) return selectedEdit?.subCategory;
    if (soapData?.name) return soapData?.name;
    return 'New Template';
  };

  return (
    <EditorWrapper className="h-100 view-SaopNotes-wrapper">
      <div className="card v2 h-100">
        <div className="card-header">
          <p className="title sm">{getName()}</p>
          <div className="d-flex gap-2">
            <Button
              onClick={() => setEditMode(true)}
              type={editMode ? 'primary' : 'default'}
            >
              Text Editor
            </Button>
            <Button
              onClick={() => setEditMode(false)}
              type={!editMode ? 'primary' : 'default'}
            >
              Templates
            </Button>
          </div>
        </div>
        <div className="card-body">
          <CustomEditor />
          <QuillEditor />
          {/* <TextEditor editMode={editMode} /> */}
        </div>
      </div>
    </EditorWrapper>
  );
};
