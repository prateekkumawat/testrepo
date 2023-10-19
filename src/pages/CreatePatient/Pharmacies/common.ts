import { ColumnsType } from "antd/es/table";
import { Pharmacies } from "../Types";

export type PharmaciesColumnType = {
  key?: string;
} & Pharmacies;

export const PharmacyColumns: ColumnsType<PharmaciesColumnType> = [
  {
    title: "Store Name",
    dataIndex: "name",
  },
  {
    title: "Address Line 1",
    dataIndex: "addressLine1",
  },
  {
    title: "Address Line 2",
    dataIndex: "addressLine1",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "ext",
    dataIndex: "ext",
  },
  {
    title: "Fax",
    dataIndex: "fax",
  },
  {
    title: "NCPDP iD",
    dataIndex: "ncpdpId",
  },
  {
    title: "Zip",
    dataIndex: "zip",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "e- Prescription Enabled",
    dataIndex: "ePrescription",
  },
  {
    title: "E- Mail Enabled",
    dataIndex: "eMailEnabled",
  },
];

export const dataSrc: PharmaciesColumnType[] = [];
for (let i = 0; i < 6; i += 1) {
  dataSrc.push({
    key: `${i}`,
    name: `name ${i}`,
    addressLine1: "addressLine1",
    addressLine2: "addressLine2",
    city: "city",
    country: "country",
    state: "state",
    zipCode: "zipCode",
    phone: "phone",
    "ext.": '    "ext.":',
    notes: "notes",
    ncpdpId: "ncpdpId",
    fax: "fax",
    ePrescription: false,
    eMailEnabled: true,
  });
}
