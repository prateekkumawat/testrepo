import { styled } from 'styled-components';

export const CodeDirectory = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .item {
    border: 1px solid #00000040;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 10px;
    padding: 20px 15px;
    display: flex;
    align-items: center;
    gap: 25px;
    cursor: pointer;
    white-space: nowrap;
    .dr-code {
      color: ${(props) => props.theme.text_light};
      font-family: ${(props) => props.theme.font_m};
      margin-left: auto;
    }
    .anticon {
      opacity: 0;
    }
    &:hover,
    &.active {
      border-color: ${(props) => props.theme.primary.main};
      .dr-code {
        color: ${(props) => props.theme.text_dark};
      }
      .anticon {
        opacity: 1;
      }
    }
  }
`;
