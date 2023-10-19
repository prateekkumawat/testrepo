import React, { FC, useEffect, useState } from 'react';
import { Button, Input, Modal, notification } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCircleFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { SaopNotesType, SOAPUITemplate } from './types';
import { ViewSaopNotesWrapper } from './SoapNotes.styled';
import { Table } from '../../Component/Table/Table';
import { Popup } from '../../Component/Popup/Popup';
import { PreiviewPopup } from './Popups/PreviewPopup';
import { SOAPService } from '../../Service/SOAP';
import { RoutesPath } from '../../Routes/Routes';
import { EditTemplate } from './EditTemplate/EditTemplate';
import { StyledSimpleInput } from '../../Component/Form/Form';

interface ColumnType {
  srNo?: number | string;
  name: string;
  visibility: string;
  status: string;
  delete?: string;
}

export const SaopNotes: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [editTemplate, setEditTemplate] = useState<SOAPUITemplate | null>(null);
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [saopNotesData, setSaopNotesData] = useState<SOAPUITemplate[]>([]);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  const soapservice = SOAPService();

  useEffect(() => {
    const getAlltemplates = async () => {
      try {
        setLoading(true);
        const data = await soapservice.getAllTemplates();
        setSaopNotesData(data?.templates);
      } catch (e) {
        notification.error({
          message: 'Error occured while getting SOAP Templates',
        });
      } finally {
        setLoading(false);
      }
    };
    getAlltemplates();
  }, []);

  const navigate = useNavigate();

  const handleDeleteClick = (index: number) => {
    setIndex(index);
    setIsConfirmVisible(true);
  };

  const handleConfirmYes = () => {
    console.log('Deleted');
    removeEntry(index);
    setIsConfirmVisible(false);
  };

  const handleConfirmNo = () => {
    setIsConfirmVisible(false);
  };

  console.log(saopNotesData);

  const renderStatusDot = (status: string) => {
    switch (status) {
      case 'Pending':
        return <BsFillCircleFill className="status-dot-yellow-dot" />;
      case 'Available':
        return <BsFillCircleFill className="status-dot-green-dot" />;
      case 'Active':
        return <BsFillCircleFill className="status-dot-green-dot" />;
      default:
        return null;
    }
  };

  const removeEntry = (indexToRemove: number) => {
    const updatedsaopNotesData = [...saopNotesData];
    updatedsaopNotesData.splice(indexToRemove, 1);
    setSaopNotesData(updatedsaopNotesData);
  };

  const columns: ColumnsType<ColumnType> = [
    {
      title: 'Sr. No.',
      dataIndex: 'srNo',
      width: 150,
      align: 'center',
    },
    {
      title: 'Template Name',
      dataIndex: 'name',
    },
    {
      title: 'Visibility',
      dataIndex: 'visibility',
      width: 150,
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 150,
      align: 'center',
      render: (status) => <div>{renderStatusDot(status)}</div>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: 150,
      align: 'center',
      render: (_, record, index) => (
        <div className="actions-btns">
          <Button className="btn-transparent btn-icon btn-xs">
            <BsFillInfoCircleFill
              onClick={() => {
                setPreviewModalOpen((prev) => !prev);
              }}
            />
          </Button>
          <Button className="btn-transparent btn-icon btn-xs">
            <MdEdit
              onClick={() => {
                const data = saopNotesData?.find(
                  (e) => e.templateId === record.srNo
                );
                if (data) setEditTemplate(data);
              }}
            />
          </Button>
          <Button className="btn-transparent btn-icon btn-xs">
            <RiDeleteBin6Line
              // onClick={() => removeEntry(index)}
              onClick={() => handleDeleteClick(index)}
            />
          </Button>
        </div>
      ),
    },
  ];

  const processDataToDisplayRow = (
    SaopNotesRecords: SaopNotesType[]
  ): ColumnType[] => {
    return SaopNotesRecords?.map((SaopNotesRecord: SaopNotesType) => ({
      name: SaopNotesRecord.name,
      status: SaopNotesRecord.status,
      visibility: SaopNotesRecord.visibility,
      srNo: SaopNotesRecord.templateId,
    })).filter((e) => e.name?.trim());
  };

  return (
    <ViewSaopNotesWrapper className="view-SaopNotes-wrapper">
      <div className="card">
        <div className="card-header border-bottom header-tabs">
          <div className="d-flex align-items-center gap-3">
            <p className="title lg">SOAP Templates</p>
            <StyledSimpleInput
              prefix={<AiOutlineSearch className="icon" />}
              type="search"
              className="form-conrtol"
              placeholder="Search Template by Name"
            />
          </div>
          <div className="header-tabs-buttons">
            <Button
              className="btn btn-primary btn-tab"
              onClick={() => navigate(RoutesPath.CREATE_SOAP_NOTES)}
            >
              Add New Template
            </Button>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <Table
                columns={columns}
                dataSource={processDataToDisplayRow(saopNotesData)}
                loading={loading}
                size="small"
                pagination={{ pageSize: 16 }}
                bordered
              />
            </div>
            <div className="col-md-4">
              {editTemplate ? <EditTemplate template={editTemplate} /> : null}
            </div>
          </div>
        </div>
      </div>

      {previewModalOpen && (
        <Popup
          open={previewModalOpen}
          onCancel={() => setPreviewModalOpen(false)}
          title="Preview & Publish"
          width="60vw"
        >
          <PreiviewPopup soapData={editTemplate} />
        </Popup>
      )}
      {isConfirmVisible && (
        <Modal
          visible={isConfirmVisible}
          title="Confirm Delete"
          onCancel={handleConfirmNo}
          footer={[
            <Button key="no" onClick={handleConfirmNo}>
              No
            </Button>,
            <Button key="yes" type="primary" onClick={handleConfirmYes}>
              Yes
            </Button>,
          ]}
        >
          Are you sure you want to Delete the Template?
        </Modal>
      )}
    </ViewSaopNotesWrapper>
  );
};
