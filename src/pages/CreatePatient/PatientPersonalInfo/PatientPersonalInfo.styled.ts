import { Row } from 'antd';
import { styled } from 'styled-components';

export const PatientPersonalWrapper = styled('div')`
  .patient-personal-wrapper {
    /* display: flex;
    width: 100%; */
    .age {
      margin-top: 40px !important;
      font-size: 16px;
      font-weight: 600;
      font-family: Montserrat;
    }
  }

  .ant-form {
    /* width: 100%;
    display: flex !important;
    justify-content: space-between; */
    .ant-form-item-control {
      .ant-form-item-control-input {
        .ant-form-item-control-input-content {
          /* .ant-picker {
            border-radius: 7px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            background: #fff;
            box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
            height: 45px;
          } */
          /* input {
            width: 100%;
            height: 45px;
          } */
        }
      }
    }
  }

  .image-section {
    display: grid;
    width: 100%;
    text-align: center;
    place-content: center;
    /* padding: 20px; */
    .patient-profile {
      img {
        fill: #972587;
        stroke-width: 1px;
        stroke: #fff;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
      .no-image {
        background-color: ${(props) => props.theme.primary.main};
      }
      .has-image {
        border: 1px solid ${(props) => props.theme.primary.main};
        border-radius: 50%;
      }
      border-radius: 100%;
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
      .profile {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: scale-down;
      }
      .camera-label {
        position: relative;
        left: 60px;
        top: -30px;
        .camera-icon {
          cursor: pointer;
          font-size: 2.2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1440px) and (max-width: 1536px) {
    .ant-card {
      .ant-card-body {
        padding: 15px !important;
        border-radius: 0 0 12px 12px;
      }
    }
    ::-webkit-input-placeholder {
      color: #000;
      font-family: Montserrat;
      font-size: 13px !important;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .ant-select-selector {
      .ant-select-selection-placeholder {
        color: #000;
        font-family: Montserrat;
        font-size: 13px !important;
        font-weight: 500;
      }
    }
    .first-section {
      width: 300px;
      .ant-form-item-label > label {
        color: #000;
        font-family: Montserrat;
        font-size: 13px !important;
        font-weight: 500;
        text-transform: capitalize;
      }
      .image-section {
        display: grid;
        width: 100%;
        text-align: center;
        place-content: center;
        margin-top: 10px;
        // padding: 20px;
        .patient-profile {
          img {
            fill: #972587;
            stroke-width: 1px;
            stroke: #fff;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          }
          .no-image {
            background-color: #972587;
          }
          .has-image {
            border: 1px solid #972587;
            border-radius: 50%;
          }
          border-radius: 100%;
          width: 150px;
          height: 150px;
          margin-bottom: 10px;
          .profile {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: scale-down;
          }
          .camera-label {
            position: relative;
            left: 60px;
            top: -30px;
            .camera-icon {
              cursor: pointer;
              font-size: 2.2rem;
            }
          }
        }
      }
    }
    .second-section {
      width: 483px !important;
      .ant-form-item-label > label {
        color: #000;
        font-family: Montserrat;
        font-size: 13px !important;
        font-weight: 500;
        text-transform: capitalize;
      }
    }
    .third-section {
      width: 500px;
      .ant-form-item-label > label {
        color: #000;
        font-family: Montserrat;
        font-size: 13px !important;
        font-weight: 500;
        text-transform: capitalize;
      }
    }
  }
`;
