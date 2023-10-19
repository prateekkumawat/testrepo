import styled from 'styled-components';

export const ProviderAppointmentWrapper = styled('div')`
  padding: 10px 0;
  .count-row {
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    gap: 10px;
    align-items: center;
    &:last-child {
      border-bottom: 0;
    }
    p {
      font-size: 1.3em;
      font-weight: 500;
      margin: 0;
    }
  }
  .count-div {
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    width: 60px;
    text-align: center;
  }
`;
