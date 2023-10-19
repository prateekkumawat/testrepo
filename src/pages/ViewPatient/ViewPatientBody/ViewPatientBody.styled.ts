import { styled } from 'styled-components';

export const ViewPatientBodyWrapper = styled.div`
  width: 100%;
  margin: 0 30px;
  .view-button {
    width: 130px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    align-self: center;
    margin-right: -100px;
    .view-btn {
      display: flex;
      gap: 5px;
      color: #972587;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      line-height: 2.2em;
      text-decoration-line: underline;
      text-transform: capitalize;
    }
  }
  .key-name {
    font-weight: ${(props) => props.theme.patienttitle.bfont};
    padding: 5px;
  }
  .key-value {
    font-weight: normal;
    padding: 5px;
    font-weight: 500;
    text-align: end;
  }

  .key-value-pair-separated {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;
  }
  .text-area {
    border-radius: 10px;
    border: 1px solid #972587;
  }
  .key-value-pair {
    display: flex;
  }
  .card-1-wrapper {
    .ant-card-body {
      padding: 12px;
    }
    .row1 {
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
    .card-1 {
      display: flex;
      justify-content: space-between;
      width: 90%;
    }
  }
  .info-card-title {
    font-size: 20px;
    font-weight: ${(props) => props.theme.patienttitle.bfont};
  }
  .more-details {
    display: flex;
    background-color: ${(props) => props.theme.footerbuttons.lefticon.lwhite};
    justify-content: space-between;
    .col-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .col-1 {
      width: 49%;
    }
    .col-2 {
      width: 49%;
    }
    .additional-info-card {
      width: 49%;
    }
    .other-info-card {
      width: 49%;
    }
    .billing-details {
      width: 100%;
    }
    .appointment-booking {
      width: 100%;
      .footer-btns-wrapper {
        display: grid;
        place-content: center;
        width: 100%;
        padding: 10px;
        .footer-btns {
          display: flex;
          gap: 10px;
          .book-btn {
            border-radius: 7px;
            border: 1px solid #972587;
            background: #fff;
            width: 130px;
            height: 45px;
            svg {
              font-weight: 600;
              margin: -2px;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  .items {
    font-size: 14px;
    display: flex;
    width: 100%;
    flex-direction: column;
    .bold-key {
      font-weight: ${(props) => props.theme.patienttitle.bfont};
    }
    .row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 5px 0;
    }
  }
  .statement-btn {
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 7px;
    border: 1px solid #972587;
    background: #fff;
  }
  .dollar-icon {
    font-size: 2.5em;
    fill: ${(props) => props.theme.subheaderwrapper.bgpink};
    margin-top: 5px;
  }
  .edit-icon {
    font-size: 1.5em;
  }
  .title-row {
    display: flex;
    justify-content: space-between;
  }
  .padded-card {
    // min-height: 24%;
    .ant-card-body {
      padding: 10px;
    }
    .icon-card {
      display: flex;
      align-items: center;
      .ant-card-body {
        padding: 5px;
        display: grid;
        place-content: center;
      }
    }
    .key-value-pair {
      padding: 15px 0;
    }
  }

  ${(props) => props.theme.mediaQueries.desktop1440} {
    width: 100%;
    margin: 0 10px;
    .view-button {
      width: 130px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      align-self: center;
      margin-right: -100px;
      .view-btn {
        display: flex;
        gap: 5px;
        color: #972587;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        line-height: 2.2em;
        text-decoration-line: underline;
        text-transform: capitalize;
      }
    }
    .key-name {
      font-weight: ${(props) => props.theme.patienttitle.bfont};
      color: #000;
      font-size: 13px;
      text-align: start;
      text-transform: capitalize;
    }
    .key-value {
      font-weight: 500;
      text-align: end;
      color: #000;
      font-size: 13px;
      display: inline-block;
      // max-width: 70%;
    }

    .key-value-pair-separated {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 30px 0;
    }

    .key-value-pair {
      display: flex;
    }
    .card-1-wrapper {
      .ant-card-body {
        padding: 12px;
      }
      .row1 {
        display: flex;
        justify-content: space-between;
        width: 80%;
      }
      .card-1 {
        display: flex;
        justify-content: space-between;
        width: 90%;
      }
    }
    .info-card-title {
      font-size: 20px;
      font-weight: ${(props) => props.theme.patienttitle.bfont};
    }
    .more-details {
      display: flex;
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      background-color: ${(props) => props.theme.footerbuttons.lefticon.lwhite};
      justify-content: space-between;
      .ant-card-body {
        padding: 10px;
      }
      .ant-typography {
        word-break: normal;
      }
      .col-wrapper {
        display: flex;
        justify-content: space-between;
      }
      .col-1 {
        width: 49%;
      }
      .col-2 {
        width: 49%;
      }
      .additional-info-card {
        width: 49%;
      }
      .other-info-card {
        width: 56%;
      }
      .billing-details {
        width: 100%;
        .ant-btn {
          border-radius: 7px;
          border: 1px solid #972587;
          background: #fff;
          span {
            font-size: 15px;
            font-weight: 600;
          }
        }
      }
      .appointment-booking {
        width: 100%;
        .footer-btns-wrapper {
          display: grid;
          place-content: center;
          width: 100%;
          padding: 10px;
          .footer-btns {
            display: flex;
            gap: 10px;
            .book-btn {
              border-radius: 7px;
              border: 1px solid #972587;
              background: #fff;
              width: 115px;
              height: 36px;
              color: #000;
              font-size: 13px;
              font-weight: 600;
              text-transform: capitalize;
              svg {
                font-weight: 600;
                margin: -2px;
                width: 14.67px;
                height: 14.67px;
              }
              span {
                padding: 4px;
              }
            }
          }
        }
      }
    }
    .items {
      font-size: 14px;
      display: flex;
      width: 100%;
      flex-direction: column;
      .bold-key {
        font-weight: 600;
        text-align: start;
        text-transform: capitalize;
      }
      .row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 5px 0;
      }
    }
    .statement-btn {
      display: flex;
      align-items: center;
      margin: auto;
      border-radius: 7px;
      border: 1px solid #972587;
      background: #fff;
    }
    .dollar-icon {
      font-size: 2.5em;
      fill: ${(props) => props.theme.subheaderwrapper.bgpink};
      margin-top: 5px;
    }
    .edit-icon {
      font-size: 1.5em;
    }
    .title-row {
      display: flex;
      justify-content: space-between;
    }
    .padded-card {
      // min-height: 24%;
      .ant-card-body {
        padding: 10px;
      }
      .icon-card {
        display: flex;
        align-items: center;
        .ant-card-body {
          padding: 5px;
          display: grid;
          place-content: center;
        }
      }
      .key-value-pair {
        padding: 15px 0;
      }
    }
  }

  ${(props) => props.theme.mediaQueries.desktop1920} {
    width: 100%;
    margin: 0 30px;
    .view-button {
      width: 130px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      align-self: center;
      margin-right: -100px;
      .view-btn {
        display: flex;
        gap: 5px;
        color: #972587;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        line-height: 2.2em;
        text-decoration-line: underline;
        text-transform: capitalize;
      }
    }
    .key-name {
      font-weight: ${(props) => props.theme.patienttitle.bfont};
      padding: 5px;
      text-transform: capitalize;
    }
    .key-value {
      font-weight: normal;
      padding: 5px;
      font-weight: 500;
      text-align: end;
      display: inline-block;
      max-width: 69%;
    }

    .key-value-pair-separated {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 30px 0;
    }
    .text-area {
      border-radius: 10px;
      border: 1px solid #972587;
    }
    .key-value-pair {
      display: flex;
    }
    .card-1-wrapper {
      .ant-card-body {
        padding: 12px;
      }
      .row1 {
        display: flex;
        justify-content: space-between;
        width: 80%;
      }
      .card-1 {
        display: flex;
        justify-content: space-between;
        width: 90%;
      }
    }
    .info-card-title {
      font-size: 20px;
      font-weight: ${(props) => props.theme.patienttitle.bfont};
    }
    .more-details {
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      background-color: ${(props) => props.theme.footerbuttons.lefticon.lwhite};
      justify-content: space-between;
      .ant-card-body {
        padding: 10px;
      }
      .ant-typography {
        word-break: normal;
      }
      .col-wrapper {
        display: flex;
        justify-content: space-between;
      }
      .col-1 {
        width: 49%;
      }
      .col-2 {
        width: 49%;
      }
      .additional-info-card {
        width: 49%;
      }
      .other-info-card {
        width: 56%;
      }
      .billing-details {
        width: 100%;
      }
      .appointment-booking {
        width: 100%;
        .footer-btns-wrapper {
          display: grid;
          place-content: center;
          width: 100%;
          padding: 10px;
          .footer-btns {
            display: flex;
            gap: 10px;
            .book-btn {
              border-radius: 7px;
              border: 1px solid #972587;
              background: #fff;
              width: 130px;
              height: 45px;
              color: #000;
              font-size: 15px;
              font-weight: 600;
              text-transform: capitalize;
              svg {
                font-weight: 700;
                margin: 5px 5px 0 0;
              }
            }
          }
        }
      }
    }
    .items {
      font-size: 14px;
      display: flex;
      width: 100%;
      flex-direction: column;
      .bold-key {
        font-weight: ${(props) => props.theme.patienttitle.bfont};
        text-transform: capitalize;
      }
      .row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 5px 0;
      }
    }
    .statement-btn {
      display: flex;
      align-items: center;
      margin: auto;
      border-radius: 7px;
      border: 1px solid #972587;
      background: #fff;
      span {
        font-weight: 600;
        font-size: 15px;
      }
    }
    .dollar-icon {
      font-size: 2.5em;
      fill: ${(props) => props.theme.subheaderwrapper.bgpink};
      margin-top: 5px;
    }
    .edit-icon {
      font-size: 1.5em;
    }
    .title-row {
      display: flex;
      justify-content: space-between;
    }
    .padded-card {
      // min-height: 24%;
      .ant-card-body {
        padding: 10px;
      }
      .icon-card {
        display: flex;
        align-items: center;
        .ant-card-body {
          padding: 5px;
          display: grid;
          place-content: center;
        }
      }
      .key-value-pair {
        padding: 15px 0;
      }
    }
  }
`;
