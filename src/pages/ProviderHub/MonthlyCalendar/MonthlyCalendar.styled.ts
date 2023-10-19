import styled from 'styled-components';

export const MonthlyCalendarWrapper = styled('div')`
  height: 100%;
  .spinner-loader {
    display: grid;
    place-content: center;
    height: 90vh;
  }
  .rbc-day-bg {
    border-radius: 10px;
    border: 1px solid #ddd;
    margin: 10px;
  }
  .rbc-month-row {
    border: 0;
  }
  .rbc-date-cell {
    text-align: center;
    margin-top: 15px;
  }
  .rbc-btn-group {
    display: none;
  }
  .rbc-month-header {
    .rbc-header {
      border: 0;
    }
  }
  .rbc-month-view {
    border: 0;
  }
`;
