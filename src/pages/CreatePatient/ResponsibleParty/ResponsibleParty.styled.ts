import { styled } from 'styled-components';

export const ResponsilvePartyWrapper = styled.div`
  width: 100%;
  .ant-card {
    width: 100%;
  }
  .responsible-party-title {
    font-weight: normal;
    display: flex;
    gap: 20px;
    flex-direction: row;
  }
  .disable-selection {
    .ant-card-body {
      cursor: not-allowed;
      background-color: rgb(243, 243, 243);
      // .responsible-party-popups {
      //   cursor: not-allowed;
      //   .another-patient-wrapper {
      //     cursor: not-allowed;
      //   }
      // }
    }
  }
  .responsible-party-popups {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
