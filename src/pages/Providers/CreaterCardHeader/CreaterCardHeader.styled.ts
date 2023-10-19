import styled from 'styled-components';

export const CreaterCardHeaderWrapper = styled('div')`
  padding: 0 0 20px 0;
  article,
  p {
    font-size: 28px;
    font-weight: medium;
  }
  .border-bottom {
    border-bottom: 1px solid ${(props) => props.theme.secondary.main};
    width: 20%;
    border-width: medium;
  }
`;
