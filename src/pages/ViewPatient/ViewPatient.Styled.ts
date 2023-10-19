import { styled } from "styled-components";

export const ViewPatientWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .loader {
    display: grid;
    place-content: center;
    height: 80vh;
    width: 100%;
  }
`
