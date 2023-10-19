import { Button, notification, Spin } from 'antd';
import React, { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NewTemplateWrapper } from './NewTemplate.styled';
import { Editor } from '../Editor/Editor';
import { VarComponent } from '../VariableComponent/VariableComponent';
import { Preview } from '../Preview/Preview';
import { Popup } from '../../../Component/Popup/Popup';
import { RoutesPath } from '../../../Routes/Routes';
import { SOAPService } from '../../../Service/SOAP';
import { SavePopup } from '../Popups/SavePopup';
import {
  SelectedEdit,
  SOAPUITemplate,
  SaopNotesType,
  subCategoryMap,
} from '../types';
import { parseHTML } from '../../../utility';

interface NewTemplateProps {
  className?: string;
}

export const NewTemplate: FC<NewTemplateProps> = ({ className }) => {
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false);
  const [soapData, setSoapData] = useState<SaopNotesType | null>(null);
  const [selectedEdit, setSelectedEdit] = useState<SelectedEdit | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [saveBtnLoader, setSavedBtLoader] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const soapService = SOAPService();
  const { templateId } = useParams();

  const handleSubmit = async (payload: SaopNotesType) => {
    try {
      setSavedBtLoader(true);
      let data = null;
      if (templateId) {
        const queryParams = {
          category: 'Subjective',
          subCategory: 'ChiefComplaint',
        };
        data = await soapService.editTemplate(templateId, payload, queryParams);
      } else data = await soapService.createTemplate(payload);
      console.log('data', data);
      setSavedBtLoader(false);
      notification.success({
        message: 'saved successfully',
      });
    } catch (Err) {
      setSavedBtLoader(false);
      console.log('handleSubmit -> Err', Err);
      notification.error({
        message: 'Error Occured',
      });
    }
  };

  const getTemplate = async (id: string) => {
    try {
      setLoader(true);
      const data = await soapService.getTemplate(id);
      setSoapData({ ...data, templateId });
      setLoader(false);
    } catch (err) {
      setLoader(false);
      notification.error({
        message: 'Error Occured',
      });
    }
  };

  useEffect(() => {
    if (templateId) getTemplate(templateId);
    else {
      // create new SOAP
      setSoapData({
        name: '',
        status: '',
        visibility: '',
        templates: Object.keys(subCategoryMap)?.map((e) => ({
          category: e,
          subCategories: subCategoryMap[e as keyof typeof subCategoryMap]?.map(
            (subC: string) => ({
              title: subC?.split(' ').join(''),
              template: [],
            })
          ),
        })),
      });
    }
  }, [templateId]);

  return loader && !soapData ? (
    <Spin />
  ) : (
    <NewTemplateWrapper className={`view-SaopNotes-wrapper ${className}`}>
      <div className="component-header border-bottom">
        <div className="d-flex align-items-center gap-2">
          <p className="title lg">
            {soapData?.name ? soapData?.name : 'Create New Template'}
          </p>
          <p className="text font-m">
            {' '}
            | Public | 20 Aug 2022: 10:50 AM | Dr. Name
          </p>
        </div>
      </div>

      <div className="row g-3 flex-grow-1">
        <div className="col-md-3">
          <div className="card template-heights">
            <VarComponent />
            <div className="blank-height "></div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card template-heights">
            <Editor soapData={soapData} selectedEdit={selectedEdit} />
            <div className="text-center mt-4">
              <Button
                className="btn-primary"
                onClick={() => {
                  const jsonData = parseHTML('editable-container');
                  console.log('jsonData', jsonData);
                  const categories = soapData?.templates.find(
                    (e) => e.category === selectedEdit?.category
                  );
                  const subCategories = categories?.subCategories?.find(
                    (e) =>
                      e.title?.split(' ').join('') ===
                      selectedEdit?.subCategory?.split(' ').join('')
                  );
                  if (subCategories && jsonData?.childrens?.length) {
                    subCategories.template = jsonData?.childrens;
                  } else if (
                    jsonData?.childrens?.length &&
                    selectedEdit?.subCategory
                  ) {
                    categories?.subCategories.push({
                      template: jsonData?.childrens,
                      title: selectedEdit?.subCategory?.split(' ').join(''),
                    });
                  }
                  // TODO
                  console.log(
                    'JSON.parse(JSON.stringify(soapData))',
                    JSON.parse(JSON.stringify(soapData))
                  );
                  setSoapData(JSON.parse(JSON.stringify(soapData)));
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card template-heights">
            <Preview soapData={soapData} setSelectedEdit={setSelectedEdit} />
            <div className="btn-container center mt-4">
              <Button
                className="btn-secondary"
                onClick={() => navigate(RoutesPath.SOAP_NOTES)}
                loading={saveBtnLoader}
              >
                Back
              </Button>
              <Button
                className="btn-primary"
                onClick={() => {
                  setSaveModalOpen((prev) => !prev);
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Popup
        open={saveModalOpen}
        onCancel={() => setSaveModalOpen(false)}
        title="Preview & Publish"
        width="60vw"
        footer={false}
      >
        <SavePopup
          soapData={soapData}
          handleCancel={() => {
            setSaveModalOpen(false);
          }}
          handleSubmit={(values: any) => handleSubmit(values)}
        />
      </Popup>
    </NewTemplateWrapper>
  );
};
