import styled from 'styled-components';

export const BookAppointmentWrapper = styled('div')`
  width: 100%;
  border: none;
  border-radius: 0;
  background-color: ${(prop) => prop.theme.common.white};
  height: 100%;
  padding: 20px;
  .book-title {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 30px !important;
  }
  .submit-btns-wrapper {
    height: '100%';
    display: flex;
    justify-content: flex-end;
    align-items: end;
    .inner-wrapper {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      gap: 10px;
    }
  }
  .plus-icon {
    width: 45px;
    height: 45px;
    font-size: 25px;
    border: 1px solid #000;
    margin-top: 38px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center;
  }
  .placeholders {
    color: #000;
    display: flex !important;
    align-items: center !important;
    justify-content: center;
    font-size: 14px;
  }
  .clockicon {
    font-size: 25px;
    margin-top: -1px;
    margin-right: 8px;
  }
  .submit-btns {
    height: 45px;
    padding: 0 20px;
    font-weight: 600;
  }
  .ant-picker-input > input::placeholder {
    font-size: 14px;
    color: #000;
  }
  @media screen and (min-width: 1200px) {
    .ant-row {
      .responsive {
        width: 93%;
      }
      .plus-icon {
        width: 45px;
        height: 45px;
        font-size: 25px;
        border: 1px solid #000;
        margin-right: 3px !important;
        margin-top: 38px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .ant-row {
      .ant-form-item {
        label {
          font-size: 14px !important;
        }
      }
      .responsive {
        width: 94.6%;
      }
      .date {
        width: 35%;
        font-size: 0.2em !important;
      }
      .start-end {
        width: 32%;
      }
      .col-49 {
        width: 49.6%;
      }
      .provider {
        width: 88%;
      }
      .clockicon {
        font-size: 20px;
        margin-top: -1px;
        margin-right: 8px;
      }
      .plus-icon {
        width: 45px;
        height: 45px;
        font-size: 25px;
        border: 1px solid #000;
        margin-top: 32px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center;
      }
    }
  }
  @media screen and (min-width: 1810px) {
    .ant-row {
      .responsive {
        width: 95%;
      }
      .plus-icon {
        width: 45px;
        height: 45px;
        font-size: 25px;
        border: 1px solid #000;
        margin-top: 38px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center;
      }
      .provider {
        width: 91%;
      }
      .date {
        width: 40%;
        font-size: 16px;
      }
      .start-end {
        width: 29%;
        font-size: 16px;
      }
    }
  }
`;
