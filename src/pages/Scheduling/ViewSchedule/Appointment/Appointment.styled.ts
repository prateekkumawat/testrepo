import styled from 'styled-components';

export const AppointmentWrapper = styled('div')`
  &.show-in-row {
    .details {
      display: flex;
      /* flex-direction: row; */
      justify-content: space-between;
      min-width: 90%;
      align-items: center;
      /* padding: 0px 5px; */
      .appointment-time {
        gap: 5px;
      }
    }
  }
  background-color: lightblue;
  background-color: ${(props) => props.theme.color.lightblue};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-width;
  border-radius: ${(prop) => prop.theme.borderRadius.main};
  /* padding: 10px 0; */
  /* align-items: center; */
  /* overflow: hidden; */
  /* margin: 5px; */
  /* padding: 5px 0; */
  .side-border {
    width: 6px;
    /* background-color: orange; */
  }
  .patient-name {
    font-weight: 600;
    width: fit-content;
  }
  .details {
    display: block;
    margin-left: ${(props) => props.theme.margin.left};
  }
  .appointment-time {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
