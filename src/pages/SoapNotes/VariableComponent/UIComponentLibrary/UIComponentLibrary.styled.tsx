import styled from 'styled-components';

export const UIComponentLibraryWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  .component-tag {
    flex: 0 0 40%;
    background-color: skyblue;
    color: white;
    height: 30px;
    border-radius: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .add {
      display: none;
      background: green;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      right: 0;
      height: 15px;
      width: 15px;
      cursor: pointer;
      place-content: center;
      border: 0;
    }
    &:hover {
      background-color: #007cff;
      .add {
        display: grid;
      }
    }
  }
`;
