import { Row } from 'antd';
import { styled } from 'styled-components';

export const MainHeaderWrapper = styled(Row)`
  box-shadow: 0px 4px 4px 0px #00000040;
  box-shadow: ${(props) => props.theme.boxShadow.main};
  height: ${(props) => props.theme.layoutElements.headerHeight};
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;

  overflow: hidden;
  .header-container {
    padding: 5px 30px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    &::before {
      content: '';
      background: url('/header-pattern-left.png');
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 300px;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left;
    }
    &::after {
      content: '';
      background: url('/header-pattern-right.png');
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      width: 300px;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;
    }
  }

  .main-logo {
    width: 220px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: left;
    }
  }
  .background-left-logo {
    background: url('/public/headerLeft.png');
    background-repeat: no-repeat;
    width: 200px;
    height: 100%;
    object-fit: contain;
    height: 7vh;
  }
  .background-right-logo {
    background: url('/public/headerRight.png');
    background-repeat: no-repeat;
    width: 200px;
    height: 100%;
    object-fit: contain;
    height: 7vh;
  }

  .middle-menus-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .center-menus {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    article {
      font-weight: bold;
    }
  }
  .left-col {
    display: flex;
    align-items: center;
  }

  a.Home,
  a.About,
  a.Service,
  a.Product,
  a.Contact {
    color: black;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
    font-size: 1.1em;
    transition: color 0.3s;
  }
  .right-menus-wrapper {
    .search-bar {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .search {
      border: none;
      outline: none;
      // padding: 10px;
      border-bottom: 2px solid black;
      width: 200px;
    }
    .btn,
    .btn-2 {
      height: 30px;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }
    .icon {
      color: #f9f9f9;
    }

    .btn {
      background-color: blueviolet;
      margin: 20px 10px;
      width: 30px;
    }
    .btn-2 {
      background-color: rgb(45, 38, 122);
      width: 120px;
      color: aliceblue;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 557px) {
    .left-main-logo {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
      margin-left: none;
    }
  }
`;
