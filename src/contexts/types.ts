import type { FilterState, AppState } from '../types';

export type AppAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'UPDATE_FILTER'; payload: { filterName: keyof FilterState; value: boolean } }
  | { type: 'RESET_FILTERS' }
  | { type: 'TOGGLE_EMPLOYEE' };

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}