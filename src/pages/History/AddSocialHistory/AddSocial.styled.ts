import styled from 'styled-components';

export const AddSocialWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .form {
    width: 100%;
  }
  .form-rows {
    display: flex;
    gap: 2%;
    align-items: center;
    .bttn{
        background-color: ${props => props.theme.primary.main};
        margin-left:30%;
        padding: 0 40px;
        color: white;
        font-weight: 600;
        height: 45px;
    }
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label
    > label {
    width: 70px;
  }
  :where(
      .css-dev-only-do-not-override-4lo48e
    ).ant-select.ant-select-in-form-item {
    width: 100%;
    max-height: 45px;
    margin: 5px;
  }
`;
