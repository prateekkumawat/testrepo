import styled from 'styled-components';

export const DropDownPopupWrapper = styled('div')`
  .component-tag {
    width: 120px;
    /* padding: 5px 20px; */
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: skyblue;
    color: white;
    .icon {
      font-size: 1.2em;
      margin: 5px;
      background-color: white;
      color: purple;
    }
    .add {
      display: none;
      background: green;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      right: 0;
      height: 15px;
      width: 15px;
      cursor: pointer;
      place-content: center;
      border: 0;
    }
    &:hover {
      background-color: #007cff;
      .add {
        display: grid;
      }
    }
  }

  .divider {
    &.horizontal {
      height: 4px;
      margin: 10px auto;
      width: 40%;
      background-color: ${(props) => props.theme.primary.main};
    }
    &.vertical {
      width: 5px;
      margin: 0 auto;
      height: 100%;
      background-color: ${(props) => props.theme.secondary.main};
    }
  }

  .generate-element {
    display: flex;
    gap: 25px;
    .element,
    .preview {
      flex: 1 0 48%;
    }
    .element {
      .data {
        overflow: hidden;
        overflow-y: auto;
        max-height: 250px;
        .data-row {
          display: flex;

          justify-content: space-between;
          align-items: center;

          &:not(:last-of-type) {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          }
          .icon {
            font-size: 1.2em !important;
            color: grey;
            width: 10%;
            cursor: pointer;
          }
        }
      }
    }
    .preview {
    }
    .divider.vertical {
      align-self: stretch;
      height: auto;
      width: 3px;
      flex: 0 0 3px;
    }
  }
`;
