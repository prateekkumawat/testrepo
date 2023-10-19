import { Form, Tag, Typography, Button, Modal } from 'antd';
import { useFormik } from 'formik';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { RiArrowDropDownLine, RiDeleteBin6Line } from 'react-icons/ri';
import {
  StyledFormItem,
  StyledSimpleInput,
} from '../../../../../Component/Form/Form';
import { DropDownPopupWrapper } from './DropDownPopup.styled';
import { ShadowedCard } from '../../../../../Component/Card/Card';
import { CustomNode } from '../../../../../Types/Types';
import { parseJSON } from '../../../../../utility';

export interface DropDownPopupProps {
  className?: string;
  handleSubmit: (values: any) => void;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const DropDownPopup: FC<DropDownPopupProps> = ({
  className,
  handleSubmit,
  setModalOpen,
}) => {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [content, setContent] = useState<CustomNode | null>();
  const formikProps = useFormik({
    initialValues: {
      orderedBy: '',
      name: '',
      placeHolder: '',
      value: '',
      Options: [],
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
          tag: 'select',
          attributes: {
            class: 'form-control',
          },
          type: 'tag',
          childrens:
            formikProps?.values?.Options?.map((option) => ({
              key: '',
              tag: 'option',
              attributes: {
                // value: option,
              },
              type: 'tag',
              childrens: [
                {
                  key: '',
                  attributes: {},
                  type: 'text',
                  childrens: [],
                  value: option,
                },
              ],
            })) || [],
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

  const handleDeleteClick = (index: number) => {
    setIndex(index);
    setIsConfirmVisible(true);
  };

  const handleConfirmYes = () => {
    console.log('Deleted');
    removeEntry(index);
    setIsConfirmVisible(false);
  };

  const handleConfirmNo = () => {
    setIsConfirmVisible(false);
  };

  const removeEntry = (indexToRemove: number) => {
    const updatedOptions = [...formikProps.values.Options];
    updatedOptions.splice(indexToRemove, 1);
    formikProps.setFieldValue('Options', updatedOptions);
  };

  return (
    <DropDownPopupWrapper className={className}>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <p className="title"> Selected Component: </p>
        <Tag className="component-tag">
          DropDown
          <RiArrowDropDownLine className="icons" />
          <span
            className="add"
            onClick={() => {
              console.log('dropdown clicked');
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
                <div className="d-flex align-items-end gap-3">
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
                    />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Value"
                    name="value"
                    validateStatus={formikProps.errors.value ? 'error' : ''}
                    help={formikProps.errors.value}
                    initialValue={formikProps.values.value}
                    className="mb-0"
                  >
                    <StyledSimpleInput
                      value={formikProps.values.value}
                      status={formikProps.errors.value ? 'error' : ''}
                      name="value"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      className=""
                    />
                  </StyledFormItem>
                  <Button
                    onClick={() => {
                      formikProps.setFieldValue('Options', [
                        ...formikProps.values.Options,
                        formikProps.values.value,
                      ]);
                      formikProps.setFieldValue('value', '');
                    }}
                    className=""
                  >
                    +
                  </Button>
                </div>
                <div className="data mt-3">
                  {formikProps.values.Options?.map((option) => (
                    <div className="data-row">
                      <p className="title sm" key={option}>
                        {option}{' '}
                      </p>
                      <RiDeleteBin6Line
                        className="icon"
                        onClick={() => handleDeleteClick(index)}
                      />
                    </div>
                  ))}
                </div>
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
      <Modal
        visible={isConfirmVisible}
        title="Confirm Delete"
        onCancel={handleConfirmNo}
        footer={[
          <Button key="no" onClick={handleConfirmNo}>
            No
          </Button>,
          <Button key="yes" type="primary" onClick={handleConfirmYes}>
            Yes
          </Button>,
        ]}
      >
        Are you sure you want to Delete the Value?
      </Modal>
    </DropDownPopupWrapper>
  );
};
