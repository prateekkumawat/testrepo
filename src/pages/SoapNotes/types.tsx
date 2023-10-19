import { CustomNode } from '../../Types/Types';

export interface SaopNotesType {
  templateId?: number | string;
  name: string;
  visibility: string;
  status: string;
  templates: SOAPTemplate[];
}

export interface SOAPTemplate {
  category: string;
  subCategories: {
    title: string;
    template: CustomNode[];
  }[];
}

export interface SOAPUITemplate {
  templateId?: string;
  name: string;
  status: string;
  visibility: string;
  templates: SOAPTemplate[];
}
export enum SOAPTabs {
  Subjective = 'Subjective',
  Objective = 'Objective',
  Assessment = 'Assessment',
  Plan = 'Plan',
}
export interface SelectedEdit {
  category: string;
  subCategory: string;
  templates: CustomNode[];
}

const SubjectiveSubC = [
  'Chief Complaint',
  'History of Present Illness',
  'Medical History',
  'Allergies',
  'Review of Sysytems',
];
const ObjectiveSubC = ['Vitals', 'Past Results', 'Examinations'];
const AssessmentSubC = ['Diagnoses'];
const PlanSubC = [
  'Treatment',
  'Procedures',
  'Immunizations',
  'Therapeutic Injections',
  'Imaging',
  'Lab',
  'Referrals',
  'Follow Up',
  'Visit Codes',
  'Procedure Codes',
];

export const subCategoryMap = {
  [SOAPTabs.Subjective]: SubjectiveSubC,
  [SOAPTabs.Objective]: ObjectiveSubC,
  [SOAPTabs.Assessment]: AssessmentSubC,
  [SOAPTabs.Plan]: PlanSubC,
};

export interface SOAPVariable {
  name: string;
  template?: CustomNode[];
}

export const VisibilityEnums = [
  'Unpublished',
  'Draft',
  'Publicly Visible',
  'Private',
];
