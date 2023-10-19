import styled from 'styled-components';

export const ViewScheduleWrapper = styled('div')`
  width: 100%;
  border: none;
  border-radius: 0;
  background-color: ${(prop) => prop.theme.common.white};
  padding: 20px;
  .appointment-row {
    display: flex;
    gap: 10px;
  }
  .height-4 {
    /* position: absolute; */
    /* height: 100px !important; */
    z-index: 1;
  }
  .ant-table-tbody > tr > td {
    height: 5px;
    padding: 0 !important;
  }
  thead {
    display: none;
  }
  table {
    margin-top: ${(props) => props.theme.margin.top};
    border-radius: 0;
  }
  .view-schedule-header-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
    width: 100%;
    .provider-drop-down {
      /* width: 30%; */
      border: none !important;
      border-radius: unset;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3) !important;
      .ant-select-selection-placeholder {
        color: rgba(0, 0, 0, 0.8);
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 106.667% */
        text-transform: capitalize;
      }
    }
    .color-code-wrapper {
      display: flex;
      flex-direction: row;
      width: 70%;
      align-items: center;
      .color-codes {
        margin: 0 10px;
        gap: 10px;
        display: flex;
        flex-direction: row;
        font-size: 8px;
        align-items: center;
      }
    }

    .color-circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .value {
      font-weight: 500;
    }
  }

  .rbc-event {
    background: lightblue !important;
    border-left: 5px solid orange !important;
    border-right: 0 !important;
    border-top: 0 !important;
    border-bottom: 0 !important;
    color: black;
    height: min-width;
    padding: 0;
    margin: 0;
    article {
      font-size: 11px;
    }
  }
  .rbc-calendar {
    overflow: scroll;
    height: calc(100vh - 300px);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .rbc-events-container {
    border-right: 15px solid white;
    margin-right: 0px;
  }
  .rbc-time-content {
    border-top: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .rbc-event-content {
    align-items: center !important;
    display: flex !important;
  }
  .rbc-event:has(.unconfirmed) {
    border-left: 5px solid #ffb800 !important;
  }
  .rbc-event:has(.confirmed) {
    border-left: 5px solid #ffb800 !important;
  }
  .rbc-event:has(.checked-in) {
    border-left: 5px solid #23408e !important;
  }
  .rbc-event:has(.checked-out) {
    border-left: 5px solid #22a2bf !important;
  }
  .rbc-event:has(.rescheduled) {
    border-left: 5px solid #972587 !important;
  }
  .rbc-event:has(.canceled) {
    border-left: 5px solid #fc0303 !important;
  }
  .rbc-event:has(.no-show) {
    border-left: 5px solid #000000 !important;
  }
  .rbc-today {
    background: none;
  }
  .ant-select-selection-item {
    background: lightgrey !important;
  }
  .rbc-time-gutter .rbc-time-slot {
    border: 0;
  }
  .rbc-time-slot {
    min-height: 20px;
    border-bottom: 1px solid grey;
    border-left: 0;
  }
  .rbc-time-content > * + * > * {
    border-left: 0;
  }
  .rbc-event-label,
  .rbc-allday-cell,
  .rbc-toolbar {
    display: none;
  }
`;
