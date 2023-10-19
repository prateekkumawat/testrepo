import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { parseJSON } from '../../../utility';
import {
  SaopNotesType,
  SelectedEdit,
  SOAPTabs,
  subCategoryMap,
} from '../types';
import { PreviewWrapper } from './Preview.styled';

export const Preview: FC<{
  soapData: SaopNotesType | null;
  setSelectedEdit: Dispatch<SetStateAction<SelectedEdit | null>>;
}> = ({ soapData, setSelectedEdit }) => {
  const [activeTab, setActiveTab] = useState<SOAPTabs>(SOAPTabs.Subjective);
  const [subCategories, setSubCategories] = useState<string[]>([]);

  useEffect(() => {
    setSubCategories(subCategoryMap[activeTab]);
  }, [activeTab]);

  useEffect(() => {
    const loadTemplates = () => {
      soapData?.templates
        .find((e) => e.category === activeTab)
        ?.subCategories?.forEach((e) => {
          try {
            const docfragment = parseJSON(e.template);
            const container = document.getElementById(
              `${activeTab}-${e.title?.split(' ').join('')}`
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
        });
    };
    if (subCategories?.length && soapData) loadTemplates();
  }, [subCategories, soapData]);

  return (
    <PreviewWrapper className="h-100">
      <div className="card v2 h-100">
        <div className="card-header">
          <p className="title sm">Preview</p>
        </div>
        <div className="content-header">
          <div
            className={`content-header-title ${
              activeTab === SOAPTabs.Subjective ? 'active' : ''
            }`}
            onClick={() => setActiveTab(SOAPTabs.Subjective)}
          >
            <h2>S</h2>
            <p>ubjective</p>
          </div>
          <div
            className={`content-header-title ${
              activeTab === SOAPTabs.Objective ? 'active' : ''
            }`}
            onClick={() => setActiveTab(SOAPTabs.Objective)}
          >
            <h2>O</h2>
            <p>bjective</p>
          </div>
          <div
            className={`content-header-title ${
              activeTab === SOAPTabs.Assessment ? 'active' : ''
            }`}
            onClick={() => setActiveTab(SOAPTabs.Assessment)}
          >
            <h2>A</h2>
            <p>ssessment</p>
          </div>
          <div
            className={`content-header-title ${
              activeTab === SOAPTabs.Plan ? 'active' : ''
            }`}
            onClick={() => setActiveTab(SOAPTabs.Plan)}
          >
            <h2>P</h2>
            <p>lan</p>
          </div>
        </div>
        <div className="card-body">
          <div className="sub-category-preview">
            {subCategories?.map((subC) => (
              <div className="content-data-containers" key={subC}>
                <div className="containers-title">
                  <p className="title sm">{subC}</p>
                  <MdModeEditOutline
                    className="icon"
                    onClick={() => {
                      setSelectedEdit({
                        category: activeTab,
                        subCategory: subC?.split(' ').join(''),
                        templates:
                          soapData?.templates
                            .find((e) => e.category === activeTab)
                            ?.subCategories.find(
                              (e) =>
                                e.title?.split(' ').join('') ===
                                subC?.split(' ').join('')
                            )?.template || [],
                      });
                    }}
                  />
                </div>

                <div className="containers-data">
                  <div id={`${activeTab}-${subC?.split(' ').join('')}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewWrapper>
  );
};
