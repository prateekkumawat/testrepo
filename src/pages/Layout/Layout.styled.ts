import { styled } from 'styled-components';

export const LayputWrapper = styled('div')`
  height: 100%;
  .body {
    margin-left: ${(props) => props.theme.layoutElements.sidebarSlim};
    height: calc(100% - ${(props) => props.theme.layoutElements.headerHeight});
    .body-children {
      padding: 20px;
      overflow: hidden;
      overflow-y: auto;
      height: 100%;
      /* .title {
        color: ${(prop) => prop.theme.common.black};
        font-family: ${(prop) => prop.theme.font.family};
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: capitalize;
      } */
    }
  }

  // @media screen and (min-width: 320px) {
  //   .body {
  //     font-size: 8px;
  //   }
  // }
  // @media screen and (min-width: 1204px) {
  //   .body {
  //     font-size: 14px !important;
  //   }
  // }

  // @media screen and (min-width: 1440px) {
  //   .body {
  //     font-size: 16px !important;
  //   }
  // }
`;
