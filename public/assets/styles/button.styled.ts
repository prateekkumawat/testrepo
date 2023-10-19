import { css } from 'styled-components';

const button = css`
  .ant-btn {
    height: ${(prop) => prop.theme.h_md};
    font-family: ${(prop) => prop.theme.font_sb};
    font-size: 14px;
    border-radius: 10px;
    min-width: 100px;
  }
  /************************/
  .btn-icon {
    min-width: auto;
    padding: 0;
  }
  /************************/
  .btn-xs {
    height: ${(prop) => prop.theme.h_xs};
    &.btn-icon {
      width: ${(prop) => prop.theme.h_xs};
    }
  }
  /************************/
  .btn-primary {
    background: ${(prop) => prop.theme.primary.main};
    border-color: ${(prop) => prop.theme.primary.main};
    color: #fff;
    &:hover {
      background: ${(prop) => prop.theme.primary.main};
      border-color: ${(prop) => prop.theme.primary.main} !important;
      color: #fff !important;
    }
  }

  .btn-secondary {
    background: ${(prop) => prop.theme.secondary.main};
    border-color: ${(prop) => prop.theme.secondary.main};
    color: #fff;
    &:hover {
      background: ${(prop) => prop.theme.secondary.main};
      border-color: ${(prop) => prop.theme.secondary.main} !important;
      color: #fff !important;
    }
  }

  .btn-transparent {
    background: transparent;
    border: none;
  }
  /************************/
  .header-tabs {
    position: relative;
    .header-tabs-buttons {
      position: absolute;
      right: 20px;
      bottom: 0;
      .btn {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  /************************/
  .btn-container {
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    &.center {
      justify-content: center;
    }
  }
`;

export default button;
