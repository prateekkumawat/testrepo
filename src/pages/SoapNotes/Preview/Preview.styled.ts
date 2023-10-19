import styled from 'styled-components';
import { ShadowedCard } from '../../../Component/Card/Card';

export const PreviewWrapper = styled('div')`
  .content-header {
    width: 100%;
    display: flex;
    .content-header-title {
      width: 25%;
      height: 50px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-right: none;
      &:first-of-type {
        border-left: none;
      }
      letter-spacing: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s;
      position: relative;
      h2 {
        color: ${(prop) => prop.theme.primary.main};
        margin: 0;
        font-size: 20px;
        font-family: ${(prop) => prop.theme.font_m};
      }
      p {
        color: rgba(0, 0, 0, 0.3);
        margin: 0;
        font-size: 14px;
        font-family: ${(prop) => prop.theme.font_m};
      }
      &.active {
        &:after {
          content: '';
          background: ${(prop) => prop.theme.primary.main};
          border-radius: 50px;
          height: 4px;
          width: 80%;
          position: absolute;
          bottom: -2px;
        }
      }
    }
  }

  .sub-category-preview {
    display: flex;
    flex-direction: column;
    .content-data-containers {
      display: flex;
      flex-direction: column;
      min-height: 35%;
      padding: 0 !important;
      .containers-title {
        min-height: 30px;
        padding: 0 !important;
        display: flex;
        border-bottom: 1px solid lightgray !important;
        color: black;
        font-size: 500;
        justify-content: space-between;
        .icon {
          font-size: 1.5em;
          width: 10%;
          cursor: pointer;
        }
      }
      .containers-data {
        display: flex;
        padding: 15px 0;
      }
    }
  }
`;
