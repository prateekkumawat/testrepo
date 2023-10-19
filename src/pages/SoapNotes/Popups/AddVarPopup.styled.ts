import styled from 'styled-components';

export const AddVarPopupWrapper = styled('div')`
  height: 45vh;
  padding: 0 40px;
  .title-search {
    width: 40%;
    height: 45px;
    margin: 5px 30%;
    /* border-radius: 22px; */
    ::placeholder {
      color: black;
    }
  }
  .content {
    height: 35vh;
    overflow: scroll;
    .container-body {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
