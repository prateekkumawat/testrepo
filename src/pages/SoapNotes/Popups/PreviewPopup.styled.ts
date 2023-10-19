import styled from 'styled-components';

export const PreiviewPopupWrapper = styled('div')`
  overflow: hidden;
  max-height: 600px;
  overflow-y: auto;
  .templete {
    .templete-name {
      border-bottom: 4px solid ${(prop) => prop.theme.primary.main};
      padding-bottom: 10px;
      text-align: center;
    }
    .templete-content {
      .content-data-containers {
        .containers-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid lightgray !important;
          padding: 10px;

          .icon {
            font-size: 1.5em;

            cursor: pointer;
          }
        }
        .containers-data {
          padding: 10px;
        }
      }
    }
  }
`;
