import { CustomNode } from '../../../../Types/Types';

export const textArea: CustomNode = {
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
          value: 'TextArea',
        },
      ],
    },
    {
      key: '',
      tag: 'TEXTAREA',
      attributes: {
        class: 'form-control',
        placeholder: 'TextArea',
      },
      type: 'tag',
      childrens: [],
    },
  ],
};

export const inputField: CustomNode = {
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
          value: 'Input',
        },
      ],
    },
    {
      key: '',
      tag: 'input',
      attributes: {
        type: 'text',
        class: 'form-control',
        placeholder: 'Input',
      },
      type: 'tag',
      childrens: [],
    },
  ],
};

export const dateField: CustomNode = {
  key: 'parent-div',
  tag: 'div',
  attributes: {
    class: 'input',
  },
  type: 'tag',
  childrens: [
    {
      key: 'label-div-1',
      tag: 'label',
      attributes: {
        for: 'date',
      },
      type: 'tag',
      childrens: [
        {
          key: 'label-div-1-child',
          attributes: {},
          type: 'text',
          childrens: [],
          value: 'Date',
        },
      ],
    },
    {
      key: 'input-div-2',
      tag: 'input',
      attributes: {
        type: 'date',
        class: 'form-control',
        placeholder: 'Date',
      },
      type: 'tag',
      childrens: [],
    },
  ],
};

export const Dropdown: CustomNode = {
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
          value: 'select Dropdown',
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
      childrens: [
        {
          key: '',
          tag: 'option',
          attributes: {
            value: '',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: 'option',
            },
          ],
        },
        {
          key: '',
          tag: 'option',
          attributes: {
            value: '',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: 'option',
            },
          ],
        },
      ],
    },
  ],
};
export const checkboxField: CustomNode = {
  key: '',
  tag: 'div',
  attributes: {
    class: 'input',
  },
  type: 'tag',
  childrens: [
    {
      key: '',
      tag: 'div',
      attributes: {
        class: 'form-check form-check-inline',
      },
      type: 'tag',
      childrens: [
        {
          key: 'one',
          tag: 'input',
          attributes: {
            class: 'form-check-input',
            type: 'checkbox',
            id: 'one',
            value: '',
          },
          type: 'tag',
          childrens: [],
        },
        {
          key: '',
          tag: 'label',
          attributes: {
            class: 'form-check-label',
            for: 'one',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: 'Checkbox',
            },
          ],
        },
      ],
    },
    {
      key: '',
      tag: 'div',
      attributes: {
        class: 'form-check form-check-inline',
      },
      type: 'tag',
      childrens: [
        {
          key: 'two',
          tag: 'input',
          attributes: {
            class: 'form-check-input',
            type: 'checkbox',
            id: 'two',
            value: '',
          },
          type: 'tag',
          childrens: [],
        },
        {
          key: '',
          tag: 'label',
          attributes: {
            class: 'form-check-label',
            for: 'two',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: 'Checkbox',
            },
          ],
        },
      ],
    },
  ],
};

export const radio: CustomNode = {
  key: '',
  tag: 'div',
  attributes: {
    class: 'input',
  },
  type: 'tag',
  childrens: [
    {
      key: '',
      tag: 'div',
      attributes: {
        class: 'form-check form-check-inline',
      },
      type: 'tag',
      childrens: [
        {
          key: 'three',
          tag: 'input',
          attributes: {
            class: 'form-check-input',
            type: 'radio',
            id: 'three',
            value: '',
          },
          type: 'tag',
          childrens: [],
        },
        {
          key: '',
          tag: 'label',
          attributes: {
            class: 'form-check-label',
            for: 'three',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: 'Radio',
            },
          ],
        },
      ],
    },
    {
      key: '',
      tag: 'div',
      attributes: {
        class: 'form-check form-check-inline',
      },
      type: 'tag',
      childrens: [
        {
          key: 'four',
          tag: 'input',
          attributes: {
            class: 'form-check-input',
            type: 'radio',
            id: 'four',
            value: '',
          },
          type: 'tag',
          childrens: [],
        },
        {
          key: '',
          tag: 'label',
          attributes: {
            class: 'form-check-label',
            for: 'four',
          },
          type: 'tag',
          childrens: [
            {
              key: '',
              attributes: {},
              type: 'text',
              childrens: [],
              value: 'Radio',
            },
          ],
        },
      ],
    },
  ],
};
