export type IPatient = {
  name: string;
};

export enum DateFormats {
  YearMonthDay = 'YYYY-MM-DD',
  MonthDayYear = 'MM/DD/YYYY',
}

export interface CustomNode {
  key: string;
  tag?: string;
  attributes: Record<string, any>;
  type: string;
  childrens: CustomNode[];
  value?: string;
  innerHTML?: string;
}
