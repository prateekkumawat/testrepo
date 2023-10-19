import { styled } from 'styled-components';

export const NavigationWrapper = styled('div')`
  .ant-card-body {
    background-color: transparent;
    display: grid;
    place-content: center;
    text-align: center;
    align-items: center;
    padding: 30px 30px !important;
  }
  .tabs-wrapper {
    .tab-card-wrapper {
      .ant-card-body {
        background-color: transparent;
        display: grid;
        place-content: center;
        text-align: center;
        align-items: center;
        padding: 20px 40px !important;
        .icon {
          fill: ${(props) => props.theme.common.white};
        }
        &:hover {
          background-color: #273c91;
          color: white !important;
          cursor: pointer;
          article {
            color: white !important;
          }
          .icon {
            background: #23408e;
            stroke-width: 1px;
            border: 1px solid #ffffff;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          }
        }
      }
    }
  }
`;

export const TabsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
