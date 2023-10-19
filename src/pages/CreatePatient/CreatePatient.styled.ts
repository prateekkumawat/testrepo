import styled from 'styled-components';

export const CreatePatientWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  .progress-card {
    background-color: ${(prop) => prop.theme.common.grey};
    display: grid;
    place-content: center;
    .ant-card-body {
      width: 60vw;
    }
  }
  .patient-title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .footer-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 10px;
    gap: 10px;
    .left-icon {
      fill: ${(prop) => prop.theme.common.white};
    }
  }
  .patient-personal-wrapper {
    /* display: flex;
    width: 100%; */
    .age {
      margin-top: 40px !important;
      font-size: 16px;
      font-weight: 600;
      font-family: Montserrat;
    }
    /* .ant-form {
      width: 100%;
      display: flex !important;
      justify-content: space-between;
    } */
    .first-section {
      /* width: 32%;*/
      /* .dob {
        width: 85%;
      } */
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
    /* .second-section {
      width: 32%;
    }
    .third-section {
      width: 32%;
    } */
    ${(prop) => prop.theme.mediaQueries.desktop1440} {
      .age {
        margin-top: 36px !important;
        font-size: 16px;
        font-weight: 600;
        font-family: Montserrat;
      }
      .ant-card {
        .ant-card-body {
          padding: 15px !important;
          border-radius: 0 0 12px 12px;
        }
      }
      .first-section {
        width: ${(prop) => prop.theme.mediaQueries.firstSectionWidth};
        .dob {
          width: 82%;
        }
        ::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-family: Montserrat;
          font-size: 12px !important;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .ant-form-item-label > label {
          color: #000;
          font-family: Montserrat;
          font-size: 13px !important;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
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
        width: ${(prop) => prop.theme.mediaQueries.secondSectionWidth};
        ::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-family: Montserrat;
          font-size: 12px !important;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .ant-form-item-label > label {
          color: #000;
          font-family: Montserrat;
          font-size: 13px !important;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-transform: capitalize;
        }
        .ant-select-selector {
          .ant-select-selection-placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-family: Montserrat;
            font-size: 12px !important;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
      .third-section {
        width: ${(prop) => prop.theme.mediaQueries.thirdSectionWidth};
        ::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-family: Montserrat;
          font-size: 12px !important;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .ant-form-item-label > label {
          color: #000;
          font-family: Montserrat;
          font-size: 13px !important;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-transform: capitalize;
        }
        .ant-select-selector {
          .ant-select-selection-placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-family: Montserrat;
            font-size: 12px !important;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }
    ${(prop) => prop.theme.mediaQueries.desktop1920} {
      ::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.5);
        font-family: Montserrat;
        font-size: 12px !important;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
`;
