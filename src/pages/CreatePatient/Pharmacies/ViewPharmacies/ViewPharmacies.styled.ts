import { Row } from "antd";
import { styled } from "styled-components";

export const PharmaHeaderWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .provider-label {
    width: 80%;
  }
.view-pharmacies-table {
  width: 100%;
  overflow: scroll;
  .ant-spin-nested-loading {
    width: 100%;
    overflow: scroll;
  }
}
`;
