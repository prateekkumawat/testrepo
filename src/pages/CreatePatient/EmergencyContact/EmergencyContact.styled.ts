import { Row } from "antd";
import { styled } from "styled-components";

export const EmergencyContactWrapper = styled(Row)`
  .emergency-title {
    font-size: 16px;
    font-weight: bold;
  }
  .emergency-contact-inner-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    .ant-card {
      width: 90%;
    }
    .ant-card-body {
      display: flex;
      width: 100%;
      padding: 0;
    }
    .add-btn {
      display: grid;
      place-content: center;
      .add-icon {
        font-size: 1.5rem;
      }
    }
  }
  .emergency-delete-icon {
    width: 30px;
    place-content: center;
    font-size: 1.3rem;
    padding: 0 !important;
  }
`