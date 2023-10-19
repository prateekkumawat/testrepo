import { Form, Tag, Typography, Button } from 'antd';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { PiTextbox } from 'react-icons/pi';
import { useFormik } from 'formik';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../../../Component/Form/Form';
import { InputPopupWrapper } from './InputPopup.styled';
import { ShadowedCard } from '../../../../../Component/Card/Card';
import { CustomNode } from '../../../../../Types/Types';
import { parseJSON } from '../../../../../utility';

export interface InputPopupProps {
  className?: string;
  handleSubmit: (values: any) => void;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const InputPopup: FC<InputPopupProps> = ({
  className,
  handleSubmit,
  setModalOpen,
}) => {
  const [content, setContent] = useState<CustomNode | null>();
  const formikProps = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: () => {
      handleSubmit([content]);
    },
  });

  useEffect(() => {
    setContent({
      key: '',
      tag: 'div',
      attributes: {
        class: 'input',
      },
      type: 'tag',
      childrens: [
        {
          key: '',
          tag: 'label',
          attributes: {
            for: '',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: formikProps.values.name,
            },
          ],
        },
        {
          key: '',
          tag: 'input',
          attributes: {
            name: formikProps.values.name,
            placeHolder: `please enter ${formikProps.values.name}`,
            type: 'text',
            class: 'form-control',
          },
          type: 'tag',
          childrens: [],
        },
      ],
    });
  }, [formikProps.values]);

  useEffect(() => {
    if (content) {
      const s = parseJSON([content]);
      const divElem = document.getElementById('preview-div');
      if (divElem && s) {
        divElem.innerHTML = '';
        divElem?.appendChild(s);
      }
    }
  }, [content]);
  return (
    <InputPopupWrapper className={className}>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <p className="title"> Selected Component: </p>
        <Tag className="component-tag">
          <PiTextbox className="icons" />
          Input Box
          <span
            className="add"
            onClick={() => {
              console.log('Input clicked');
            }}
          />{' '}
          <button
            className="add"
            // onClick={() => setRadioModalOpen(true)}
            type="button"
          >
            +
          </button>
        </Tag>
      </div>
      <div className="horizontal divider" />
      <div className="card">
        <div className="card-body">
          <Form layout="vertical" onFinish={formikProps.handleSubmit}>
            <div className="generate-element">
              <div className="element">
                <StyledFormItem
                  label="Name of Component"
                  name="name"
                  validateStatus={formikProps.errors.name ? 'error' : ''}
                  help={formikProps.errors.name}
                  initialValue={formikProps.values.name}
                  className="mb-0"
                >
                  <StyledSimpleInput
                    value={formikProps.values.name}
                    status={formikProps.errors.name ? 'error' : ''}
                    name="name"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    className=""
                    placeholder="Add Title"
                  />
                </StyledFormItem>
              </div>
              <div className="vertical divider" />
              <div className="preview ">
                <p className="title mb-5 text-center">Preview</p>
                <div id="preview-div" />
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="modal-footer">
        <div className="btn-container justify-content-end">
          <Button
            type="default"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </Button>
          {/* <Button>delete</Button> */}
          <Button
            className="btn-primary"
            htmlType="submit"
            onClick={() => formikProps.handleSubmit()}
          >
            Add
          </Button>
        </div>
      </div>
    </InputPopupWrapper>
  );
};
