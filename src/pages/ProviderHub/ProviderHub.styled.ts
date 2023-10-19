import styled from 'styled-components';

export const ProductDetailsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: calc(100% + 40px);
  margin: -20px;
  .half-section {
    padding: 20px;

    height: calc(100vh - 80px);
    overflow: scroll;
  }
  .tab-details-wrapper {
    width: 40%;
    background-color: ${(props) => props.theme.grey.light};
  }
  .tab-value-wrapper {
    width: 60%;
    background-color: white;
  }
`;
