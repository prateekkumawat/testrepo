import styled from 'styled-components';

export const ProviderAvailablityWrapper = styled('div')`
  padding: 20px;
  .card-section {
    height: 200px;
    padding-top: 10px;
    &:last-child {
      border-bottom: 0;
    }
    .card-section-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 10px;
      .header-title {
        font-weight: bold;
      }
    }
    .individual-row {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      padding: 5px 0 10px 0;
      p {
        margin: 0;
      }
      .first-value {
        width: 30%;
        text-overflow: ellipsis;
      }
      .middle-value {
        width: 40%;
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
      }
      .last-value {
        width: 30%;
        display: flex;
        gap: 5%;
        justify-content: flex-end;
        align-items: center;
      }

      .approved {
        border: 1px solid green;
        color: green;
      }
      .pending {
        border: 1px solid red;
        color: red;
      }
      .edit-icon {
        cursor: pointer;
      }
    }
  }
  .calendar-icon {
    display: flex;
    justify-content: flex-end;
    svg {
      font-size: 1.4em;
    }
  }
  .hours-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 5px;
    .hours-first-half {
      height: 150px;
      overflow-y: scroll;
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
    }
  }
`;
