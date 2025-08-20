import type { AppState, FilterState } from "../types";

export const initialFilters: FilterState = {
  secureBase: true,
  senseOfAppreciation: false,
  learningOrganisation: false,
  missionAndVision: false,
  wellbeing: true,
  doc: false,
  link: false,
  pdf: false,
  video: false,
  sample: true,
};

export const initialState: AppState = {
  loading: false,
  searchQuery: '',
  filters: initialFilters,
  resources: [],
  isEmployee: false,
};