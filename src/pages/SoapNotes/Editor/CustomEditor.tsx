import { Button } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineEnter,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineUnderline,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { BiBold } from 'react-icons/bi';
import { BsParagraph } from 'react-icons/bs';
import { CustomNode } from '../../../Types/Types';
import { parseJSON } from '../../../utility';
import './CustomEditor.scss';

export const CustomEditor: FC = () => {
  const [inputJson, setInputJson] = useState<CustomNode[]>([]);

  const handlep = () => {
    setInputJson((prev: CustomNode[]) => [
      ...prev,
      {
        key: '',
        tag: 'span',
        attributes: {
          class: 'editor-div',
        },
        type: '',
        childrens: [
          {
            key: '',
            tag: 'span',
            attributes: {
              contentEditable: true,
              style: `border: 1px solid lightgrey; 
              /*width: 10px;*/
               display:flex;
               border-radius:10px;
               `,
            },
            type: '',
            childrens: [
              {
                key: 's',
                tag: '',
                attributes: {},
                type: 'text',
                value: '',
                childrens: [],
              },
            ],
          },
          // {
          //   key: '',
          //   tag: 'span',
          //   type: '',
          //   attributes: {
          //     class: 'editor-div-move',
          //     value: 'm',
          //   },
          //   childrens: [],
          // },
          // {
          //   key: '',
          //   tag: 'span',
          //   type: '',
          //   attributes: {
          //     class: 'editor-div-edit',
          //     value: 'e',
          //     onClick: `(function(){
          //       alert('Hey i am calling');
          //       return false;
          //   })();return false;`,
          //   },
          //   childrens: [],
          // },
        ],
      },
    ]);
  };
  const handleInput = () => {
    setInputJson((prev: any[]) => [
      ...prev,
      {
        key: '',
        tag: 'input',
        attributes: {
          type: 'text',
          placeholder: 'text input',
        },
        type: '',
        childrens: [],
        value: '',
        innerHTML: '',
      },
    ]);
  };
  const clear = () => {
    setInputJson([]);
  };

  window.addEventListener('sessionStorageChange', (event) => {
    console.log(
      'sessionStorage changed:',
      sessionStorage.getItem('exampleKey')
    );
  });

  useEffect(() => {
    const docfragment = parseJSON(inputJson);
    const container = document.getElementById(`display-area`);
    if (container) {
      container.innerHTML = '';

      if (docfragment) {
        container.appendChild(docfragment);
      }
    }
  }, [inputJson]);

  const handleBold = () => {};

  const handleItalic = () => {};

  const handleUnderline = () => {};

  const handleEnter = () => {};

  return (
    <div>
      <div className="toolbar">
        <div className="group">
          <span onClick={() => handleBold()}>
            <BiBold />
          </span>
          <span onClick={() => handleItalic()}>
            <AiOutlineItalic />
          </span>
          <span onClick={() => handleUnderline()}>
            <AiOutlineUnderline />
          </span>
          <span onClick={() => handlep()}>
            <BsParagraph />
          </span>
          <span onClick={() => handleEnter()}>
            <AiOutlineEnter />
          </span>
        </div>
        {/* alignments */}
        <div className="group">
          <span onClick={() => handlep()}>
            <AiOutlineAlignLeft />
          </span>
          <span onClick={() => handleEnter()}>
            <AiOutlineAlignCenter />
          </span>
          <span onClick={() => handleUnderline()}>
            <AiOutlineAlignRight />
          </span>
        </div>
        {/* list */}
        <div className="group">
          <span onClick={() => handlep()}>
            <AiOutlineOrderedList />
          </span>
          <span onClick={() => handleEnter()}>
            <AiOutlineUnorderedList />
          </span>
        </div>
        <div className="group">
          <span onClick={() => clear()}>
            <RxCross1 />
          </span>
        </div>
      </div>
      <div id="display-area" />
    </div>
  );
};
