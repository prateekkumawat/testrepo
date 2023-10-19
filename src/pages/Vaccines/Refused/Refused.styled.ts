import styled from 'styled-components';

export const RefusedWrapper = styled('div')`
  /* display: flex; */
  width: 50%;
  height: 50vh;
  .refused-row{
    display: flex;
  }
  .ant-form-item-label > label {
    padding-top: 0 !important;
    width: 150px;
    justify-content: end;
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-row {
    margin-bottom: 5%;
    /* width: 80%; */
  }
`;
