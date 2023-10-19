import React, { FC, useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Form } from 'antd';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Table } from '../../../Component/Table/Table';
import { ProviderService } from '../../../Service/Provider';
import { ViewAllProviderWrapper } from './ViewAllProvider.styled';
import { ProviderWithId } from '../types';
import { SimpleCard } from '../../../Component/Card/Card';
import { EditProvider } from '../EditProvider/EditProvider';
import { Popup } from '../../../Component/Popup/Popup';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { Pagination } from '../../../Component/Pagination/Pagination';

interface ProviderTable {
  name: string;
  employeeId: string;
  status: string;
  primaryNumber: string;
  email: string;
  speciality: string;
  primaryPracticeLocation: string;
  state: string;
  country: string;
}
export const ViewAllProvider: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const providerService = ProviderService();
  const [providerData, setProviderData] = useState<ProviderWithId[]>([]);
  const [modalOpen, setModalOpen] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    const fetchProviderService = async () => {
      try {
        setLoading(true);
        const data = await providerService.getAllProvider();
        setProviderData(data);
        setLoading(false);
      } catch (err) {
        console.log('err', err);
        setLoading(false);
      }
    };
    fetchProviderService();
  }, []);

  const columns: ColumnsType<ProviderTable> = [
    {
      title: 'Full Name',
      dataIndex: 'name',
    },
    {
      title: 'Emp Id ',
      dataIndex: 'employeeId',
      width: 70,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render(text) {
        return {
          children: <div className={`${text?.toLowerCase()} status`} />,
        };
      },
      width: 70,
    },
    {
      title: 'Phone',
      dataIndex: 'primaryNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 220,
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
    },
    {
      title: 'Primary Practice Location',
      dataIndex: 'primaryPracticeLocation',
    },
    {
      title: 'State',
      dataIndex: 'state',
      width: 100,
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
  ];

  const convertDataToRow = (row: ProviderWithId): ProviderTable => ({
    name: [row.prefix, row.firstName, row.lastName]
      ?.map((e) => e.trim())
      .filter(Boolean)
      .join(' '),
    employeeId: row.providerId,
    status: row.providerStatus,
    primaryNumber: row.primaryNumber,
    email: row.email,
    speciality: row.speciality || 'Nurse Practitioner, Adult Health',
    primaryPracticeLocation: row.primaryPracticeLocation,
    state: row.state,
    country: row.country,
  });

  const list = [
    { name: 'Full Name', placeholder: 'Type Full Name' },
    { name: 'Employee Id', placeholder: 'Type Employee Id' },
    { name: 'Specialty', placeholder: 'Type Specialty' },
    {
      name: 'Primary Practice Location',
      placeholder: 'Type Primary Practice Location',
    },
    { name: 'Phone Number', placeholder: 'Type Phone Number' },
    { name: 'Email Address', placeholder: 'Type Email Address' },
  ];
  return (
    <ViewAllProviderWrapper>
      <SimpleCard>
        <div className="search-fields">
          <Form layout="inline">
            <StyledFormItem
              label="Search By"
              name="searchBy"
              style={{ width: '30%' }}
            >
              <StyledSimpleSelect
                showSearch
                defaultValue={list[0].name}
                options={list.map((obj) => ({
                  value: obj.name,
                  label: obj.name,
                }))}
                onChange={(val) => {
                  setPlaceholder(
                    list.find((e) => e.name === val)?.placeholder || ''
                  );
                }}
              />
            </StyledFormItem>
            <StyledFormItem
              label=""
              name="value"
              style={{ width: '50%' }}
              className="input-field-with-addonAfter"
            >
              <StyledSimpleInput
                placeholder={placeholder}
                addonAfter={<AiOutlineArrowRight />}
              />
            </StyledFormItem>
          </Form>
        </div>
        <Table
          columns={columns}
          dataSource={providerData?.map((row) => convertDataToRow(row))}
          loading={loading}
          size="small"
          pagination={{
            pageSize: 10,
            current: currentPage,
            position: [],
          }}
          bordered
          onRow={(record) => {
            return {
              onClick: () => {
                setModalOpen(record.employeeId);
              },
            };
          }}
        />
        <Pagination
          currentPage={currentPage}
          handleNext={(data) => setCurrentPage(data)}
          handlePrev={(data) => setCurrentPage(data)}
          setCurrentPage={setCurrentPage}
          totalResult={providerData.length}
        />
      </SimpleCard>
      <Popup
        title=""
        open={!!modalOpen}
        onCancel={() => setModalOpen('')}
        width="80vw"
        popupClassName="footer-view-provider"
      >
        <EditProvider
          setModalOpen={setModalOpen}
          providerDetails={providerData.find(
            (data) => data.providerId === modalOpen
          )}
        />
      </Popup>
    </ViewAllProviderWrapper>
  );
};
