import styled from 'styled-components';
import { ShadowedCard } from '../../../Component/Card/Card';

export const EditorWrapper = styled('div')`
  /* width: 45%;
  height: 60vh;
  border: 1px solid lightgray;
  padding: 0 !important;
  border-radius: 20px; */
  .editor-title {
    height: 45px;
    display: flex;
    justify-content: space-between;
    background-color: lightgray;
    padding: 0 10px;
    align-items: center;
    color: black;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    button {
      margin: 5px;
    }
  }
  .chip {
    background: yellow;
    color: white;
    border-radius: 10px;
    padding: 5px 10px;
  }
  .drop-down {
    width: 100px;
    height: 50px;
  }
`;
