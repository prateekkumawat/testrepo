export interface ICDPTCodes {
  code: string;
  value: string;
  status: string;
}

// export interface CPTCodes {
//   code: string;
//   description: string;
//   fee: string;
//   cost: string;
//   allowed: string;
//   status: string;
// }

// export interface HCPCSCodes {
//     code: string;
//     description: string;
//     fee: string;
//     cost: string;
//     allowed: string;
//     status: string;
// }

export interface OTHERCodes {
  code: string;
  description: string;
  fee: string;
  cost: string;
  allowed: string;
  status: string;
}

export const otherCodesData: OTHERCodes[] = [
  {
    code: 'A001',
    description: 'Code Description 1',
    fee: '100',
    cost: '80',
    allowed: '90',
    status: 'Active',
  },
  {
    code: 'B002',
    description: 'Code Description 2',
    fee: '120',
    cost: '95',
    allowed: '105',
    status: 'Inactive',
  },
  {
    code: 'C003',
    description: 'Code Description 3',
    fee: '80',
    cost: '70',
    allowed: '75',
    status: 'Active',
  },
  {
    code: 'D004',
    description: 'Code Description 4',
    fee: '150',
    cost: '130',
    allowed: '140',
    status: 'Active',
  },
  {
    code: 'E005',
    description: 'Code Description 5',
    fee: '110',
    cost: '90',
    allowed: '100',
    status: 'Inactive',
  },
  {
    code: 'F006',
    description: 'Code Description 6',
    fee: '95',
    cost: '80',
    allowed: '85',
    status: 'Active',
  },
  {
    code: 'G007',
    description: 'Code Description 7',
    fee: '120',
    cost: '105',
    allowed: '110',
    status: 'Active',
  },
  {
    code: 'H008',
    description: 'Code Description 8',
    fee: '130',
    cost: '110',
    allowed: '120',
    status: 'Active',
  },
  {
    code: 'I009',
    description: 'Code Description 9',
    fee: '140',
    cost: '120',
    allowed: '130',
    status: 'Active',
  },
  {
    code: 'J010',
    description: 'Code Description 10',
    fee: '90',
    cost: '70',
    allowed: '80',
    status: 'Inactive',
  },
  {
    code: 'K011',
    description: 'Code Description 11',
    fee: '160',
    cost: '140',
    allowed: '150',
    status: 'Active',
  },
  {
    code: 'L012',
    description: 'Code Description 12',
    fee: '110',
    cost: '90',
    allowed: '100',
    status: 'Active',
  },
  {
    code: 'M013',
    description: 'Code Description 13',
    fee: '85',
    cost: '70',
    allowed: '80',
    status: 'Active',
  },
  {
    code: 'N014',
    description: 'Code Description 14',
    fee: '125',
    cost: '105',
    allowed: '115',
    status: 'Active',
  },
  {
    code: 'O015',
    description: 'Code Description 15',
    fee: '100',
    cost: '80',
    allowed: '90',
    status: 'Inactive',
  },
  {
    code: 'P016',
    description: 'Code Description 16',
    fee: '110',
    cost: '90',
    allowed: '100',
    status: 'Active',
  },
  {
    code: 'Q017',
    description: 'Code Description 17',
    fee: '130',
    cost: '110',
    allowed: '120',
    status: 'Active',
  },
  {
    code: 'R018',
    description: 'Code Description 18',
    fee: '95',
    cost: '80',
    allowed: '85',
    status: 'Active',
  },
  {
    code: 'S019',
    description: 'Code Description 19',
    fee: '115',
    cost: '95',
    allowed: '105',
    status: 'Active',
  },
  {
    code: 'T020',
    description: 'Code Description 20',
    fee: '120',
    cost: '100',
    allowed: '110',
    status: 'Inactive',
  },
];
