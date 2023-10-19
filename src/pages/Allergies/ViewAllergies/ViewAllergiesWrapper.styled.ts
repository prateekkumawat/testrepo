import { Row } from 'antd';
import styled from 'styled-components';

export const ViewAllergiesWrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-weight: 600;
  align-items: start;
  justify-content: start;
  margin: 2% 4%;

  .items {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
  }

  .get-allergies-data {
    min-width: 100%;
  }

  .get-allergies-loader {
    padding: 48%;
  }

  .heading {
    font-size: 1.5em;
    min-width: 85%;
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 20%;
    font-size: 1.2em;
  }

  .items-inner-content-3 {
    padding: 10px 0;
    font-size: 1em;
    color: grey;
    font-weight: 500;
  }
  .close-icon {
    display: none;
  }
  .allergy-row {
    &:hover {
      .close-icon {
        display: block;
      }
    }
  }
`;

export const TableWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  font-weight: 600;
  align-items: start;
  justify-content: start;
`;

export const TableRow = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  min-width: 100%;
  padding: 2%;
`;
export const TableColumn = styled('div')`
  justify-content: space-between;
`;

export const TableCell = styled('div')`
  flex-grow: 1;
  font-size: 1.2em;
  .icon {
    font-size: 1.2em;
    align-items: center;
    margin-left: 5%;
    margin-top: 2%;
    cursor: pointer;
  }
`;
