import { styled } from 'styled-components';

export const VariableWrapper = styled('div')`
  padding: 2px 10px;
  border-radius: 30px;
  background-color: rgba(252, 131, 0, 0.6);
  color: white;
  border: 0;
  font-size: 14px;
  position: relative;
  ${(props) => props.theme.font_m};
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  .chip-hover-btn {
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    place-content: center;
    height: 20px;
    width: 20px;
  }
  &:hover {
    .chip-hover-btn {
      display: grid;
      border: 0;
    }
  }
  .add {
    display: none;
    background: blue;
    top: -10px;
    right: 0;
  }
  .remove {
    display: none;
    background: red;
    top: -10px;
    right: 25px;
  }
`;
