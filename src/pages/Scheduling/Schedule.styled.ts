import styled from 'styled-components';

export const ScheduleWrapper = styled('div')`
  background-color: lightgrey;
  margin: -20px;
  /* height: calc(100vh - 05px); */
  .schedule-header {
    padding: 0 20px;
    height: 60px;
    margin-top: ${(prop) => prop.theme.margin.main};
    background-color: white;
    background-color: ${(props) => props.theme.common.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    .first-scetion {
      margin-bottom: ${(prop) => prop.theme.margin.secondary};
      font-weight: bold;
      font-size: ${(prop) => prop.theme.font.primary.size18};
      line-height: ${(prop) => prop.theme.font.primary.size16};
      text-transform: capitalize;
      font-weight: ${(props) => props.theme.patienttitle.bfont};
      font-weight: bold;
    }
    .middle-section {
      display: flex;
      gap: 10px;
      margin-bottom: ${(prop) => prop.theme.margin.secondary};
      align-items: center;
      .ant-btn-default {
        width: ${(prop) => prop.theme.widthHeight.width};
        height: ${(prop) => prop.theme.widthHeight.height};
        fill: ${(prop) => prop.theme.common.white};
        stroke-width: 1px;
        border-radius: 50%;
        stroke: ${(prop) => prop.theme.common.white};
        box-shadow: ${(prop) => prop.theme.shadow.main};
        span {
          color: ${(prop) => prop.theme.common.black};
          font-weight: 500;
          font-size: 24px;
        }
      }
      .date-picker {
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background: #fff;
        box-shadow: ${(prop) => prop.theme.shadow.main};
        .ant-picker-suffix {
          color: ${(prop) => prop.theme.common.black};
          font-weight: bold;
          font-size: ${(prop) => prop.theme.font.primary.size16};
        }
        .ant-picker-clear {
          color: ${(prop) => prop.theme.common.black};
          font-weight: bold;
          font-size: ${(prop) => prop.theme.font.primary.size16};
        }
        input {
          font-size: ${(prop) => prop.theme.font.primary.size15};
          color: ${(prop) => prop.theme.common.black};
          font-weight: 500;
        }
        .ant-picker-clear {
        }
      }
      .btn {
        height: ${(prop) => prop.theme.widthHeight.height};
        padding: ${(prop) => prop.theme.padding.btn};
        span {
          color: #fff;
          text-align: center;
          font-family: ${(prop) => prop.theme.font.primary.family};
          font-size: ${(prop) => prop.theme.font.primary.size16};
          font-weight: 500;
          line-height: ${(prop) => prop.theme.font.primary.size15};
          text-transform: capitalize;
        }
      }
    }
    .last-section {
      margin-bottom: ${(prop) => prop.theme.margin.secondary};
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      width: max-content;
      align-items: center;
      .speciality-drop-down {
        width: 200px;
        box-shadow: ${(prop) => prop.theme.shadow.main};
      }
      .ant-btn {
        height: ${(prop) => prop.theme.widthHeight.height};
        box-shadow: ${(prop) => prop.theme.shadow.main};
      }
    }
  }

  .body-wrapper {
    display: flex;
    padding: 20px;
    padding-left: 0px;
    width: 100%;
    justify-content: space-between;
    background-color: #f5f6fa !important;
    border-radius: 0px;
    .view-schedule {
      width: 76%;
      height: 100%;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    table,
    .ant-table {
      border-radius: 0px;
      padding: ${(props) => props.theme.padding.secondary};
      border: none;
    }
    .ant-table-container {
      border: none !important;
      border-inline-end: none !important;
    }
    tr,
    td {
      border-inline-end: none !important;
    }
    .view-schedule-detail {
      width: 23%;
    }
  }
`;
