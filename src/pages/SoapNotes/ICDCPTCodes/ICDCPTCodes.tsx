import React, { FC, useEffect, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { CodeDirectory } from './ICDCPTCodes.styled';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { Table } from '../../../Component/Table/Table';
import { ICDPTCodesService } from '../../../Service/ICDPTCodes';
import { ICDPTCodes, OTHERCodes, otherCodesData } from './type';
import { Pagination } from '../../../Component/Pagination/Pagination';

export const ICDCPTCodes: FC = () => {
  const iCDPTCodesService = ICDPTCodesService();
  const [loading, setLoading] = useState<boolean>(false);
  const [iCDPTCodesData, setICDPTCodesData] = useState<ICDPTCodes[]>([]);
  const [icdCurrentPage, setICDCurrentPage] = useState<number>(1);
  const [otherCurrentPage, setOtherCurrentPage] = useState<number>(1);
  const [activeTable, setActiveTable] = useState<string>('ICDCPT_CODES');
  const [tableName, setTableName] = useState<string>('ICD-10-CM Codes');
  const [tableLength, setTableLength] = useState<number>(iCDPTCodesData.length);

  useEffect(() => {
    const fetchICDPTCodesService = async () => {
      try {
        setLoading(true);
        const data = await iCDPTCodesService.getAllICDPTCodes();
        setICDPTCodesData(data);
        setLoading(false);
      } catch (err) {
        console.log('err', err);
        setLoading(false);
        setTableLength(iCDPTCodesData.length);
      }
    };
    fetchICDPTCodesService();
  }, []);

  const columnsICDPT: ColumnsType<ICDPTCodes> = [
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Name',
      dataIndex: 'value',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const columnsOtherTable: ColumnsType<OTHERCodes> = [
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
    },
    {
      title: 'Allowed',
      dataIndex: 'allowed',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header border-bottom">
            <p className="title">ICD/CPT Code Directory</p>
          </div>
          <div className="card-body">
            <CodeDirectory>
              <div
                className="item"
                onClick={() => {
                  setActiveTable('ICDCPT_CODES');
                  setTableName('ICD-10-CM Codes');
                  setTableLength(iCDPTCodesData.length);
                }}
              >
                <p className="title">ICD-10-CM Codes</p>
                <p className="text dr-code">{iCDPTCodesData.length} </p>
                <ArrowRightOutlined />
              </div>
              <div
                className="item active"
                onClick={() => {
                  setActiveTable('CPT_CODES');
                  setTableName('CPT Codes');
                  setTableLength(otherCodesData.length);
                }}
              >
                <p className="title">CPT Codes</p>
                <p className="text dr-code">{otherCodesData.length}</p>
                <ArrowRightOutlined />
              </div>
              <div
                className="item"
                onClick={() => {
                  setActiveTable('HCPCS_CODES');
                  setTableName('HCPCS Codes');
                  setTableLength(otherCodesData.length);
                }}
              >
                <p className="title">HCPCS Codes</p>
                <p className="text dr-code">{otherCodesData.length}</p>
                <ArrowRightOutlined />
              </div>
              <div
                className="item"
                onClick={() => {
                  setActiveTable('OTHER_CODES');
                  setTableName('Other Codes');
                  setTableLength(otherCodesData.length);
                }}
              >
                <p className="title">Other Codes</p>
                <p className="text dr-code">{otherCodesData.length}</p>
                <ArrowRightOutlined />
              </div>
            </CodeDirectory>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card">
          <div className="card-header border-bottom">
            <div className="d-flex align-items-center gap-3">
              <p className="title">{tableName}</p>
              {/* <p className="text clr-text-light">10,920 Codes</p> */}
              <p className="text clr-text-light">{tableLength} Codes</p>
            </div>
          </div>
          <div className="card-body">
            <div className="row g-3 justify-content-end mb-3">
              <div className="col-md-4">
                <StyledFormItem label="" name="">
                  <StyledSimpleInput name="accountNo" placeholder="Search" />
                </StyledFormItem>
              </div>
              <div className="col-md-3">
                <StyledFormItem label="Search By" className="inline">
                  <StyledSimpleSelect
                    showSearch
                    options={[
                      { value: 'name', label: 'Name' },
                      { value: 'name', label: 'Name' },
                    ]}
                    placeholder="Search By"
                  />
                </StyledFormItem>
              </div>
            </div>
            {activeTable === 'ICDCPT_CODES' ? (
              <>
                <Table
                  columns={columnsICDPT}
                  dataSource={iCDPTCodesData}
                  loading={loading}
                  size="small"
                  pagination={{
                    pageSize: 10,
                    current: icdCurrentPage,
                    position: [],
                  }}
                  bordered
                />
                <Pagination
                  currentPage={icdCurrentPage}
                  handleNext={(data) => setICDCurrentPage(data)}
                  handlePrev={(data) => setICDCurrentPage(data)}
                  setCurrentPage={setICDCurrentPage}
                  totalResult={iCDPTCodesData.length}
                />{' '}
              </>
            ) : null}
            {activeTable !== 'ICDCPT_CODES' ? (
              <>
                <Table
                  columns={columnsOtherTable}
                  dataSource={otherCodesData}
                  loading={loading}
                  size="small"
                  pagination={{
                    pageSize: 10,
                    current: otherCurrentPage,
                    position: [],
                  }}
                  bordered
                />
                <Pagination
                  currentPage={otherCurrentPage}
                  handleNext={(data) => setOtherCurrentPage(data)}
                  handlePrev={(data) => setOtherCurrentPage(data)}
                  setCurrentPage={setOtherCurrentPage}
                  totalResult={otherCodesData.length}
                />{' '}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
