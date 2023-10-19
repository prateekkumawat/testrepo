import { Button } from 'antd';
import React, { FC, useEffect } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { useFormik } from 'formik';
import { SavePopupWrapper } from './SavePopup.styled';
import { AddTemplate } from '../AddTemplate/AddTemplate';
import { SaopNotesType, SOAPTabs, subCategoryMap } from '../types';
import { parseJSON } from '../../../utility';

export interface SavePopupProps {
  className?: string;
  soapData: SaopNotesType | null;
  handleSubmit: (values: any) => void;
  handleCancel: () => void;
}

export const SavePopup: FC<SavePopupProps> = ({
  className,
  soapData,
  handleSubmit,
  handleCancel,
}) => {
  useEffect(() => {
    const loadTemplates = () => {
      soapData?.templates?.forEach((c) =>
        c?.subCategories?.forEach((e) => {
          try {
            const docfragment = parseJSON(e.template);
            const container = document.getElementById(
              `save-popup-${c.category}-${e.title?.split(' ').join('')}`
            );
            if (container) {
              container.innerHTML = '';

              if (docfragment) {
                container.appendChild(docfragment);
              }
            }
          } catch (Er) {
            console.log('loadTemplates -> Er', Er);
          }
        })
      );
    };
    if (soapData) loadTemplates();
  }, [soapData]);

  const formikProps = useFormik({
    initialValues: {
      name: soapData?.name || '',
      status: soapData?.status || '',
      visibility: soapData?.visibility || '',
    },
    enableReinitialize: true,
    onSubmit: (values) => console.log('values', values),
  });

  return (
    <SavePopupWrapper className={className}>
      <div className="row">
        <div className="col-md-7">
          {Object.keys(SOAPTabs).map((e: string) => (
            <div className="templete">
              <div className="text clr-text-light font-m templete-name">
                <span className="fs-20 clr-text-primary">{e.charAt(0)}</span>
                {e.slice(1)}
              </div>
              <div className="templete-content">
                {subCategoryMap[
                  SOAPTabs[
                    e as keyof typeof SOAPTabs
                  ] as keyof typeof subCategoryMap
                ]?.map((subC: string) => (
                  <div className="content-data-containers" key={subC}>
                    <div className="containers-title">
                      <p className="title sm">{subC}</p>
                      <MdModeEditOutline className="icon" />
                    </div>
                    <div
                      className="containers-data"
                      id={`save-popup-${e}-${subC?.split(' ').join('')}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-5">
          <AddTemplate formikProps={formikProps} />
        </div>
      </div>
      <div className="modal-footer d-flex justify-content-between">
        <Button onClick={() => handleCancel()}>Cancel</Button>
        <div className="btn-container">
          <Button>Save & Close</Button>
          <Button
            className="btn-primary"
            onClick={() => {
              const payload = {
                ...soapData,
                templateId: soapData?.templateId,
                name: formikProps.values.name || soapData?.name,
                visibility:
                  formikProps.values.visibility || soapData?.visibility,
                status: formikProps.values.status || soapData?.status,
                templates: soapData?.templates,
              };
              handleSubmit(payload);
            }}
          >
            Publish
          </Button>
        </div>
      </div>
    </SavePopupWrapper>
  );
};
