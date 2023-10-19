import { ColumnsType } from "antd/es/table";
import { Attorneys } from "../Types";

export type AtorneyColumnType = {
  key?: string;
} & Attorneys;

export const AttorneyColumns: ColumnsType<AtorneyColumnType> = [
  {
    title: "First Name",
    dataIndex: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
  },
  {
    title: "Office Address",
    dataIndex: "officeAddress",
  },
  {
    title: "Telephone",
    dataIndex: "primaryPhoneNumber",
  },
  {
    title: "Notes",
    dataIndex: "additionalNotes",
  },
];
