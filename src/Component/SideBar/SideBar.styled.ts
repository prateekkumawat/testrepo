import styled from 'styled-components';

export const AppSidebar = styled.div`
  background-color: ${(props) => props.theme.secondary.main};
  width: ${(props) => props.theme.layoutElements.sidebarSlim};
  position: fixed;
  left: 0;
  top: ${(props) => props.theme.layoutElements.headerHeight};
  height: 100%;
  // &.ant-menu-inline-collapsed {
  //   width: 100px !important;
  // }
  .app-sidebar {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
    margin: 34px 0;
    li {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;

      .ant-menu-item-icon {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        box-shadow: 0px 4px 4px 0px #00000040;
        background: #fff;

        .menu-icons {
          margin: auto;
          display: flex;
          font-size: 1.7em;
          fill: black;
          stroke: black;
        }
        &:hover {
          background: ${(props) => props.theme.primary.main};
          .menu-icons {
            fill: #fff;
            stroke: #fff;
          }
        }
      }
      .ant-menu-title-content {
        display: none !important;
      }
      .ant-menu-submenu-title {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        width: auto;
      }
    }
  }
  li {
    /* .ant-menu-submenu {
      padding: 0 !important;
    } */

    /* .ant-menu-submenu-title {
      padding: 0 !important;
      height: 60px !important;

      &:hover,
      &:focus,
      &:focus-visible {
        background-color: transparent !important;
      }

      .ant-menu-submenu-arrow {
        display: none !important;
      }
    } */
  }

  // .menu-icon-wrapper {

  //   &:hover,
  //   &:focus,
  //   &:focus-visible {
  //     background-color: ${(prop) => prop.theme.primary.main};

  //     .menu-icons {
  //       fill: #ffffff;
  //       stroke: #ffffff;
  //     }
  //   }
  // }

  .ant-menu-item-selected {
    background-color: transparent;

    .menu-icon-wrapper {
      background-color: ${(props) => props.theme.primary.main};

      .menu-icons {
        fill: #ffffff;
        stroke: #ffffff;
      }
    }
  }

  li:has(.height-auto) {
    height: calc(100vh - 500px) !important;
  }
`;
