export interface ResourceCard {
  id: number;
  title: string;
  topic: string;
  category: string;
  type: 'link' | 'video' | 'pdf' | 'doc';
  bgGradient?: string;
  icon: any;
  svgPath?: string;
}

export interface FilterState {
  secureBase: boolean;
  senseOfAppreciation: boolean;
  learningOrganisation: boolean;
  missionAndVision: boolean;
  wellbeing: boolean;
  doc: boolean;
  link: boolean;
  pdf: boolean;
  video: boolean;
  sample: boolean;
}

export interface AppState {
  loading: boolean;
  searchQuery: string;
  filters: FilterState;
  resources: ResourceCard[];
  isEmployee: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  initials: string;
}