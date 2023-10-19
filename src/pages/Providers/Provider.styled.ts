import styled from 'styled-components';

export const StyledPRoviderWrapper = styled('div')`
  .provider-header-wrapper {
    background-color: ${(props) => props.theme.secondary.main};
    height: 150px;
    width: calc(100% + 40px);
    margin: -20px;
    padding: 20px;
    margin-bottom: -70px;
    .provider-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    article,
    p {
      color: ${(props) => props.theme.secondary.contrastTextColor};
      display: block;
      min-width: max-content;
    }
    .header-title {
      font-size: 20px;
    }
    .provider-tabs {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
