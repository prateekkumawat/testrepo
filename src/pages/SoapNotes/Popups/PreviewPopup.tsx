import React, { FC, useEffect } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { parseJSON } from '../../../utility';
import { SaopNotesType, SOAPTabs, subCategoryMap } from '../types';
import { PreiviewPopupWrapper } from './PreviewPopup.styled';

export interface PreiviewPopupProps {
  className?: string;
  soapData: SaopNotesType | null;
}

export const PreiviewPopup: FC<PreiviewPopupProps> = ({
  className,
  soapData,
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
            console.log('loadTemplates -> container', container, docfragment);
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

  return (
    <PreiviewPopupWrapper className={className}>
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
    </PreiviewPopupWrapper>
  );
};
