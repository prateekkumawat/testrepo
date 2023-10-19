import { Row, Table as Tb, TableProps } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTable = styled(Tb)`
  /* .ant-table-cell {
      word-wrap: break-word;
      word-break: break-word;
    } */
  .ant-table-thead {
    .ant-table-cell {
      background-color: ${(props) => props.theme.primary.main};
      color: ${(props) => props.theme.primary.contrastTextColor};
    }
  }
  .ant-table-header {
    table {
      table-layout: auto !important;
    }
  }

  .actions-btns {
    .ant-btn:not(:first-of-type) {
      margin-left: 6px;
    }
  }
`;
export const Table: FC<TableProps<any>> = (tableProps) => {
  return <StyledTable {...tableProps} />;
};
