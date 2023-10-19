import styled from 'styled-components';

export const WorkingHourFormWrapper = styled('div')`
  .sub-title {
    font-size: 1.5em;
    margin: 30px 0 10px 0;
    font-weight: 500;
  }
  .back-btn {
    width: 100px;
    padding: 0;

    svg {
      width: 80%;
      font-size: 2em;
      margin: 0;
      padding: 0;
      line-height: 0;
    }
  }
  .dates-row {
    display: flex;
    gap: 4px;
    width: 100%;
    justify-content: flex-end;
    padding: 10px 0;
    .dates {
      padding: 10px;
      border: 1px solid black;
      border-radius: 50%;
      aspect-ratio: 1;
      width: 45px;
      display: grid;
      place-content: center;
      cursor: pointer;
    }
    .active {
      background-color: #972587;
      color: white;
      border: 1px solid white;
    }
  }
`;
