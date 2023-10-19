export interface Allergy {
  searchAllergy: string;
  reaction: string;
  severity: string;
  onset: Date | null;
  isDrugAllergy: boolean;
  activeAllergy?: boolean;
}
