import { styled } from "styled-components"

export const CustomSteps = styled.div`
  .ant-steps-item-tail::after {
    height: 4px !important;
    position: absolute;
    top: 4px;
    width: 100%;
    left: 0;
  }
  .ant-steps-item {
    &.ant-steps-item-active,
    &.ant-steps-item-wait {
      .ant-steps-item-tail::after {
        background-color: ${(prop) => prop.theme.secondary.main} !important;
        top: 4px;
        width: 100%;
        left: 0;
      }
    }
  }
  .custom-ant-steps-item-icon {
    background-color: ${(prop) => prop.theme.primary.main};
    border-radius: 100%;
    // width: 10px;
    // height: 10px;
    padding: 10px;
    display: grid;
    place-content: center;
    width: 30px;
    height: 30px;
    top: -5px;
    position: relative;

    .ant-steps-icon {
      color: #FFFFFF !important;
      top: 0 !important;
    }
  }
  .ant-steps-item-wait {
    .custom-ant-steps-item-icon {
      background-color: ${(prop) => prop.theme.common.white};
      border: 1px solid ${(prop) => prop.theme.primary.main};
      .ant-steps-icon {
        color: ${(prop) => prop.theme.common.white} !important;
      }
    }
  }

  .ant-steps-item-description {
    display: block;
    width: max-content;
  }

  .ant-steps-item-content {
    display: grid !important;
    place-content: center;
  }
`;
