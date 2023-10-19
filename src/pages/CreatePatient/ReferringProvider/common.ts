import { ColumnsType } from 'antd/es/table';
import { RefferingProvider } from '../Types';

export type ReferringProviderWithKey = RefferingProvider & { key: string };
export const RefferingProviderColumn: ColumnsType<ReferringProviderWithKey> = [
  {
    title: 'NPI number',
    dataIndex: 'npi',
  },
  {
    title: 'NPI Type',
    dataIndex: 'npiType',
  },
  {
    title: 'Provider First Name*',
    dataIndex: 'providerFirstName',
  },
  {
    title: 'Provider Last Name*',
    dataIndex: 'providerLastName',
  },
  {
    title: 'Organisation Name',
    dataIndex: 'organisationName',
  },
  {
    title: 'Primary Service Location',
    dataIndex: 'serviceLocation',
  },
  {
    title: 'Specialty',
    dataIndex: 'specialty',
  },
  {
    title: 'Additional Information',
    dataIndex: 'additionalInformation',
  },
];

export const dataSrc: ReferringProviderWithKey[] = [];
for (let i = 0; i < 6; i += 1) {
  dataSrc.push({
    key: `${i}`,
    npi: '1234567890',
    npiType: 'Individual',
    specialty: 'Family Medicine',
    providerFirstName: `John ${i}`,
    providerLastName: 'Smith',
    organisationName: 'MYNX',
  });
}
