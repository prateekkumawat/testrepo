import { styled } from 'styled-components';

export const SubHeaderWrapper = styled('div')`
  background: ${(props) => props.theme.primary.main};
  width: 100%;
  padding: ${(props) => props.theme.padding.secondary};
  justify-content: space-between;
  display: flex;
  align-items: center;
  article {
    color: ${(prop) => prop.theme.common.white} !important;
  }
  .icon-set {
    display: flex;
    gap: 10px;
    padding-left: 15px;
    svg {
      fill: ${(prop) => prop.theme.common.white};
      font-size: 1.2em;
    }
  }
  .right-side-wrapper {
    display: flex;
    gap: 15px;
    .icon-text-set {
      align-items: center;
      display: flex;
      gap: 5px;
    }
    svg {
      fill: ${(prop) => prop.theme.common.white};
    }
  }
`;
